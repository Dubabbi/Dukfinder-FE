import * as L from '../Login/LoginStyle';
import * as S from '../Signin/SigninStyle';
import * as Set from './SettingStyle';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('key');
  const navigate = useNavigate();

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.put(
      'https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/password/',
      {
        old_password: oldPassword,
        new_password: newPassword,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
      .then((response) => {
        setMessage('비밀번호가 성공적으로 변경되었습니다.');
      })
      .catch((error) => {
        setMessage('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
        console.error('비밀번호 변경 오류:', error);
      });
  };

  useEffect(() => {
    if (message === '비밀번호가 성공적으로 변경되었습니다.') {
      alert('비밀번호가 성공적으로 변경되었습니다.');
      navigate('/mypage'); // '/mypage'로 이동
    }
  }, [message, history]);

  return (
    <L.LoginWrapper>
        <Set.Page>
          <L.TitleWrap>
            <p>비밀번호 변경</p>
          </L.TitleWrap>
          <form onSubmit={handleSubmit}>
          <L.ContentWrap>
            <L.InputTitle>현재 비밀번호</L.InputTitle>
            <S.InputWrap>
              <S.Input
                type="password"
                placeholder="Enter your password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
            </S.InputWrap>
          </L.ContentWrap>
          <L.ContentWrap>
            <L.InputTitle>새로운 비밀번호</L.InputTitle>
            <S.InputWrap>
              <S.Input
                type="password"
                placeholder="Re-enter your password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
            </S.InputWrap>
          </L.ContentWrap>
          <L.BottomButton type="submit">
            제출
          </L.BottomButton>
          </form>
        {message && <p>{message}</p>}
        </Set.Page>
      </L.LoginWrapper>
  );
}