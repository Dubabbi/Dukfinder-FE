import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import * as U from '../Upload/UploadStyle';
import * as N from './NoticeStyle';

const Notice = () => {
  const [findPostData, setFindPostData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate= useNavigate();

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

        axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/notice/', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(response => {
          setFindPostData(response.data);
          console.log('포스트를 불러왔습니다.');
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
      navigate.push('/'); // Redirect to the login page if token is not present
    }
  }, [navigate]);

  const items = findPostData.map((notice) => (
    <CommonTableRow key={notice.id}>
      <CommonTableColumn>{notice.id}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
      </CommonTableColumn>
      <CommonTableColumn>{notice.created_at}</CommonTableColumn>
      <CommonTableColumn>{notice.view_count}</CommonTableColumn>
    </CommonTableRow>
  ));

  return (
    <U.MainWrapper>
      <N.Section>
        <N.PageTitle>
          <N.TitleText>공지사항</N.TitleText>
        </N.PageTitle>
        {/* Board Search Area */}
        <N.BoardSearchArea>
          <N.SearchWindow>
            <N.SearchWrap>
              <N.SearchInput type="search" placeholder="검색어를 입력해주세요." />
              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" onClick={() => {/* Handle icon click */}}>
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
            </N.SearchWrap>
          </N.SearchWindow>
        </N.BoardSearchArea>
        <div>
          {loggedIn ? (
            <CommonTable headersName={['No', '제목', '등록일', '조회수']}>{items}</CommonTable>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </N.Section>
    </U.MainWrapper>
  );
};

export default Notice;
