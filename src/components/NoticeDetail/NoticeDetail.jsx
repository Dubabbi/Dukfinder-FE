import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as N from '../Notice/NoticeStyle';
import * as D from './NoticeDetailStyle';

const VocViewWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const VocViewGoListBtn = styled.button`
  border: 0;
  padding: 10px;
  background-color: #ffd9d9;
`;

const VocViewRow = styled.div`
  margin: 10px 0;
  display: flex;
`;

const VocViewLabel = styled.label`
  margin: 10px 0;
  width: 30%;
  font-weight: bold;
`;

const VocViewContent = styled.div`
  margin: 10px 0;
  width: 70%;
`;

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
    <VocViewWrapper>
      <N.NoticeWrapper>
        <N.Section>
          <N.PageTitle>
            <N.TitleText>공지사항</N.TitleText>
          </N.PageTitle>
          <D.TitleWrap>
            <hr />
            <D.DetailTitle>{notice.title}</D.DetailTitle>
            <hr />
          </D.TitleWrap>
          <VocViewRow>
            <VocViewLabel>작성일</VocViewLabel>
            <label>{notice.created_at}</label>
          </VocViewRow>
          <VocViewRow>
            <VocViewLabel>내용</VocViewLabel>
            <VocViewContent>{notice.content}</VocViewContent>
          </VocViewRow>
          <VocViewGoListBtn as={Link} to="/notice">
            목록으로
          </VocViewGoListBtn>
        </N.Section>
      </N.NoticeWrapper>
    </VocViewWrapper>
  );
}

export default NoticeDetail;
