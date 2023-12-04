// Login.jsx

import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as L from './LoginStyle';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태

  useEffect(() => {
    if (nameValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [nameValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
    /^(?=.*[a-zA-Z]).*duksung\.ac\.kr$/;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleName = (n) => {
    setName(n.target.value);
    const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/i;
    setNameValid(regex.test(n.target.value));
  };


  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
     /^[a-zA-Z0-9$`~!@$!%*#^?&\\(\\)\-_=+]{2,}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const navigate = useNavigate();
  
  const onClickConfirmButton = async () => {
    try {
      const response = await axios.post(
        'https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/login/',
        {
          username: name,
          password: pw,
        },
        {
          withCredentials: true,  // Add this option to send cookies
        }
      );
  
      if (response.status === 200) {
        // 로그인 성공 시
        localStorage.setItem('key', response.data.token);
        alert('로그인에 성공했습니다.');
        
        console.log('토큰:', response.data.token);
        // 토큰을 상태로 저장하거나 다른 곳에 활용할 수 있도록 처리
        // 예: 저장된 토큰을 전역 상태로 관리하는 Context API 활용
        // 여기서는 간단하게 alert으로 토큰을 표시
        // alert('토큰: ' + response.data.token);
        localStorage.setItem('key', response.data.token);
  
        // navigate 함수를 사용하여 페이지 이동
        navigate('/');
      } else {
        // 로그인 실패 시
        alert('로그인에 실패했습니다.');
      }
  
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // 가입되지 않은 사용자
        alert('등록되지 않은 회원입니다.');
      } else if (error.response && error.response.status === 401) {
        // 인증 실패
        alert('인증에 실패하였습니다. 이메일과 비밀번호를 확인하세요.');
      } else {
        // 기타 오류
        alert('로그인에 실패했습니다.');
      }
      console.error('에러:', error.response ? error.response.data.error : error.message);
    }
  };
  
  
  return (
    <L.LoginWrapper>
      <L.Page>
        <L.TitleWrap>
          <p style={{ color: 'red' }}>🐤Duk</p>
          <p>finder🐤에 오신 것을</p>
          <br />
          환영합니다!👋
        </L.TitleWrap>
        {/* 🦆 */}
        <L.ContentWrap>
          <L.InputTitle>Username</L.InputTitle>
              <L.InputWrap>
                <L.Input
                  type="text"
                  placeholder="덕새"
                  value={name}
                  onChange={handleName}
                />
              </L.InputWrap>

          <L.InputTitle style={{ marginTop: '26px' }}>Password</L.InputTitle>
          <L.InputWrap>
            <L.Input
              type="password"
              placeholder="Enter your password"
              value={pw}
              onChange={handlePw}
            />
          </L.InputWrap>

          <div>
            <L.BottomButton onClick={onClickConfirmButton} disabled={notAllow}>
              로그인
            </L.BottomButton>
            <L.NoAccount>
              <p>계정이 없으신가요? </p>
              <p style={{ color: 'blue' }}>
                <L.UnderlinedText>
                  <a href="/Signin"> 회원가입</a>
                </L.UnderlinedText>
              </p>
            </L.NoAccount>
          </div>
        </L.ContentWrap>
      </L.Page>
    </L.LoginWrapper>
  );
};

export default Login;