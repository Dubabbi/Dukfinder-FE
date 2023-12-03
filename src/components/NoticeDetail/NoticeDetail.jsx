import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as N from '../Notice/NoticeStyle';
import * as D from './NoticeDetailStyle';

function NoticeDetail() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    // Axios를 사용하여 서버로부터 공지사항 상세 데이터를 가져옴
    const fetchNoticeDetail = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/notice/${id}`);
        setNotice(response.data);
      } catch (error) {
        console.error('공지사항 상세 불러오기 실패:', error.message);
      }
    };

    fetchNoticeDetail();
  }, [id]); // id가 변경될 때마다 useEffect가 실행되도록 설정

  // notice가 존재하지 않거나 로딩 중인 경우
  if (!notice) {
    return <div>로딩 중이거나 해당 공지사항을 찾을 수 없습니다.</div>;
  }

  const { title, content } = notice;

  return (
    <N.NoticeWrapper>
      <N.Section>
        <N.PageTitle>
          <N.TitleText>공지사항</N.TitleText>
        </N.PageTitle>
        <D.TitleWrap>
          <hr />
          <D.DetailTitle>{title}</D.DetailTitle>
          <hr />
        </D.TitleWrap>
        <D.TextWrap>{content}</D.TextWrap>
        <button as={Link} to="../notice">
          목록으로
        </button>
      </N.Section>
    </N.NoticeWrapper>
  );
}

export default NoticeDetail;