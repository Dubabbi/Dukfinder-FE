import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as D from './NoticeDetailStyle';

const VocViewWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const VocViewRow = styled.div`
  margin: 10px 0;
  display: flex;
`;

const Label = styled.label`
  margin: 10px 0;
  width: 30%;
  font-weight: bold;
`;

const Content = styled.div`
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
      if (token) {
          loadPost(token);
          
      } else {
          setLoggedIn(false);
      }
  }, []);

  const loadPost = (token) => {
      axios.get(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/userinfo/`, {
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
  });

  
  if (!post) {
      return <div>Loading...</div>; // 데이터가 로딩 중일 때 표시할 내용
  }

  if (!loggedIn) {
      return <Link to="../login" />; // 로그인되지 않았다면 로그인 페이지로 리다이렉트
  }

  return (
    <>
      {loggedIn && (
        <VocViewWrapper>
          <VocViewRow>
            <Label>제목</Label>
            <Label>{notice.title}</Label>
          </VocViewRow>
          <VocViewRow>
            <Label>작성일</Label>
            <Label>{notice.created_at}</Label>
          </VocViewRow>
          <VocViewRow>
            <Label>내용</Label>
            <Content>{notice.content}</Content>
          </VocViewRow>
        </VocViewWrapper>
      )}
    </>
  );
}
}
export default NoticeDetail;
