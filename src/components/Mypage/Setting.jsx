import * as L from './../Login/LoginStyle';
import * as S from './../Signin/SigninStyle';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Setting() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [changeSuccess, setChangeSuccess] = useState(false);
    const [data, setData] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false); // 로그인 여부 상태
  
    useEffect(() => {
      const token = localStorage.getItem('key');
  
      if (token) {
        // 유저 정보를 받아오는 요청
        axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/userinfo/', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(response => {
            setData(response.data);})
        .catch(error => {
          console.error('Error fetching user info: ', error);
          setLoggedIn(false); // 로그인되지 않은 상태로 설정
        });
      } else {
        setLoggedIn(false); // 토큰이 없으면 로그인되지 않은 상태로 설정
      }
    }, []);

  const handlePasswordChange = async () => {
    try {
        const token = localStorage.getItem('key');

      const response = await axios.put(
        'https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/password/',
        {
          old_password: oldPassword,
          new_password: confirmNewPassword,
        },
        {
            headers: {
              Authorization: `Token ${token}`
            },
          }
      );

      if (response.status === 200) {
        setChangeSuccess(true);
        // 비밀번호 변경이 성공한 경우에 수행할 작업
        // 예를 들어, 성공 메시지를 보여줄 수 있습니다.
      } else {
        // 다른 응답에 대한 처리
      }
    } catch (error) {
      console.error('비밀번호 변경 중 에러 발생:', error);
      // 에러 발생 시 처리
    }
  };

    return (
        <L.LoginWrapper>
        <L.Page>
          <L.TitleWrap>
            <p>회원정보 수정</p>
          </L.TitleWrap>
          <L.ContentWrap>
            <L.InputTitle>Current Password</L.InputTitle>
            <S.InputWrap>
              <S.Input
                type="password"
                placeholder="Enter your password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              {/* {!passwordValid && password.length > 0 && (
                <L.ErrorMessageWrap>영문, 숫자, 특수기호 조합 8자리 이상의 비밀번호를 입력하세요.</L.ErrorMessageWrap>
              )} */}
            </S.InputWrap>
          </L.ContentWrap>
          <L.ContentWrap>
            <L.InputTitle>New Password</L.InputTitle>
            <S.InputWrap>
              <S.Input
                type="password"
                placeholder="Re-enter your password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              {passwordMatchError && <L.ErrorMessageWrap>{passwordMatchError}</L.ErrorMessageWrap>}
            </S.InputWrap>
          </L.ContentWrap>
          <L.BottomButton onClick={handlePasswordChange} >
            {changeSuccess ? '변경 완료' : '비밀번호 변경'}
          </L.BottomButton>
        </L.Page>
      </L.LoginWrapper>
      );
}