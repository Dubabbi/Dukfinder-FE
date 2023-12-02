// Login.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as L from './LoginStyle';


const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    // Check both email and password conditions
    if (emailValid && pwValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid]);
  
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

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = async () => {
    try {
      // Axios를 사용하여 API 호출
      const response = await axios.post('/user/login/', {
        email: email, 
        password: pw,
      });

      // 로그인 성공
      alert('로그인에 성공했습니다.');
      console.log('토큰:', response.data.token);

      // 토큰을 상태에 저장하거나 필요한 대로 사용
    } catch (error) {
      // 로그인 실패
      alert('등록되지 않은 회원입니다.');
      console.error('에러:', error.response.data.error);
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
          <L.InputTitle>Email</L.InputTitle>
          <L.InputWrap>
            <L.Input
              type="text"
              placeholder="test@duksung.ac.kr"
              value={email}
              onChange={handleEmail}
            />
          </L.InputWrap>
          <L.ErrorMessageWrap>
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </L.ErrorMessageWrap>

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
                  <a href="./Signin"> 회원가입</a>
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
