// Login.jsx
import React, { useEffect, useState } from 'react';
import * as L from './LoginStyle';

const User = {
  email: 'test@duksung.ac.kr',
  pw: 'test2323@@@',
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
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
  
  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('로그인에 성공했습니다.');
    } else {
      alert('등록되지 않은 회원입니다.');
    }
  };

  return (
    <L.LoginWrapper>
    <L.Page>
      <L.TitleWrap>
        <p style={{ color: 'red'}}>🐤Duk</p><p>finder🐤에 오신 것을</p><br/>
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
        {/* <L.LostPwMessage>
        <L.UnderlinedText>
          <a href = "#">비밀번호를 잊으셨나요?</a>
        </L.UnderlinedText>
        </L.LostPwMessage> */}
      

      <div>
        <L.BottomButton onClick={onClickConfirmButton} disabled={notAllow}>
          로그인
        </L.BottomButton>
        <L.NoAccount><p>계정이 없으신가요? </p><p style = {{color: 'blue'}}><L.UnderlinedText><a href = "./Signin"> 회원가입</a></L.UnderlinedText></p></L.NoAccount>
      </div>
      </L.ContentWrap>
    </L.Page>
    </L.LoginWrapper>
  );
};
 
export default Login;
