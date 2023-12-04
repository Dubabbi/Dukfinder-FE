// VocView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
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

function GetData(n_Id) {
  const [question, setQuestion] = useState({});

  useEffect(() => {
    axios.get(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/notice/${n_Id}`).then((response) => {
      setQuestion(response.data.question);
    });
  }, [n_Id]);

  const item = (
    <>
    <N.NoticeWrapper>
      <N.Section>
        <N.PageTitle>
          <N.TitleText>공지사항</N.TitleText>
        </N.PageTitle>
        <D.TitleWrap>
          <hr />
          <D.DetailTitle>{question.title}</D.DetailTitle>
          <hr />
        </D.TitleWrap>
        <VocViewRow>
          <VocViewLabel>작성일</VocViewLabel>
          <label>{question.created_at}</label>
        </VocViewRow>
        <VocViewRow>
          <VocViewLabel>내용</VocViewLabel>
          <VocViewContent>{question.content}</VocViewContent>
        </VocViewRow>
        <button as={Link} to="/notice">
          목록으로
        </button>
      </N.Section>
    </N.NoticeWrapper>
    </>
  );

  return item;
}

function NoticeDetail() {
  const { n_Id } = useParams();
  const item = GetData(n_Id);

  return (
    <>
      <div>{item}</div>
    </>
  );
}

export default NoticeDetail;
