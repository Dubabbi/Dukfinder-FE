import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as N from '../Notice/NoticeStyle';
import * as D from './NoticeDetailStyle';
import * as U from '../Upload/UploadStyle';


function NoticeDetail(props) {
  const { n_id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('key');
    console.log('토큰 값:', token);

    if (token) {
      axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/userinfo/', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(response => {
        setLoggedIn(true);

        axios.get(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/notice/${n_id}`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(response => {
          setNotice(response.data);
          console.log('공지를 불러왔습니다.');
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
      })
      .catch(error => {
        setLoggedIn(false);
        console.error('Invalid token:', error);
        navigate.push('/'); // Redirect to the login page if token is invalid
      });
    } else {
      setLoggedIn(false);
      // navigate.push('/'); // Redirect to the login page if token is not present
    }
  }, [navigate]);
  return (

    <U.MainWrapper>
      <N.Section>
        <N.PageTitle>
          <N.TitleText>공지사항</N.TitleText>
        </N.PageTitle>
    <D.BoardViewWrap>
      <D.BoardView>
      <D.Title>{notice.title}</D.Title>
          <D.Info>
            <D.InfoItem>
              <D.InfoItemText>{notice.id}</D.InfoItemText>
            </D.InfoItem>
            <D.InfoItem>
              <D.InfoItemText>작성일</D.InfoItemText>
              <D.InfoItemText>: {new Date(notice.created_at).toLocaleDateString()}</D.InfoItemText>
            </D.InfoItem>
            <D.InfoItem>
              <D.InfoItemText>조회</D.InfoItemText>
              <D.InfoItemText>{notice.view_count}</D.InfoItemText>
            </D.InfoItem>
            </D.Info>
            <D.Cont>
              {notice.content && notice.content.split('\n').map((content, index) => (
                <React.Fragment key={index}>
                  {content}
                  {index !== notice.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </D.Cont>

        </D.BoardView>
        <D.BtWrap>
          <D.BtLink as={Link} to="/notice">
            목록
          </D.BtLink>
          <D.BtLink href="edit.html">수정</D.BtLink>
        </D.BtWrap>
      </D.BoardViewWrap>
    </N.Section>
    </U.MainWrapper>
  );
}

export default NoticeDetail;
