import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import * as S from '../SearchBar/SearchBarStyle';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import * as U from '../Upload/UploadStyle';
import * as N from './NoticeStyle';

const Notice = () => {
  const [findPostData, setFindPostData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate= useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      setSearchTerm(searchValue);
      setSearchValue('');
  };

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
      // navigate.push('/'); // Redirect to the login page if token is not present
    }
  }, [navigate]);

  const items = findPostData.map((notice) => (
    <CommonTableRow key={notice.id}>
      <CommonTableColumn>{notice.id}</CommonTableColumn>
      <CommonTableColumn>
        <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
      </CommonTableColumn>
      <CommonTableColumn> {new Date(notice.created_at).toLocaleDateString()}</CommonTableColumn>
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
          <N.StyledForm onSubmit={handleSubmit}>
                    <Form.Control type="text"
                        placeholder="게시글 검색"size="lg" className="form-control" value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}/>
                        <S.StyledButton type="submit" variant="none"><FaSearch size={20} /></S.StyledButton>
                </N.StyledForm></N.SearchWrap>
          </N.SearchWindow>
        </N.BoardSearchArea>
        <div><hr/>
          {loggedIn ? (
            <CommonTable headersName={['No', '제목', '등록일', '조회수']}>{items}</CommonTable>
          ) : (
            <p>Loading...</p>
          )}<hr/>
        </div>
      </N.Section>
    </U.MainWrapper>
  );
};

export default Notice;
