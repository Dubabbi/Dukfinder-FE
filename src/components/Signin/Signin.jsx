// Signin.jsx
import React, { useEffect, useState } from 'react';
import * as L from '../Login/LoginStyle';
import * as S from './SigninStyle';

const User = {
  email: 'test@example.com',
  pw: 'test2323@@@',
};

const Signin = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [random, setRandom] = useState("000000");

  // 랜덤 문자열을 생성하는 함수
  const generateRandom = () => {
    const randomValue = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    setRandom(randomValue);
  };

  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]);

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

  const handleName = (n) => {
    setName(n.target.value);
    const regex =
      /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/i;
      if (regex.test(n.target.value)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  return (
    <L.LoginWrapper>
      <L.Page>
        <S.TitleWrap>
          <p>회원가입</p>
        </S.TitleWrap>
        {/* 🦆 */}
        <L.ContentWrap>
          {/* <S.TextWrap>
            덕성여자대학교 소속임을 확인하기 위해<br />
            이메일 인증코드를 보내드립니다.<br />
            덕성여자대학교 이메일만 입력 가능하오니<br />
            덕성여자대학교 이메일을 입력하고 인증을 완료해 주세요.
          </S.TextWrap> */}
          <L.InputTitle>Username</L.InputTitle>
          <L.InputWrap>
            <L.Input
              type="text"
              placeholder="덕새"
              value={name}
              onChange={handleName}
            />
          </L.InputWrap>
          <L.ErrorMessageWrap>
            {!nameValid && name.length > 0 && (
              <div>2글자 이상 9글자 미만으로 입력해 주세요.</div>
            )}
          </L.ErrorMessageWrap>
          </L.ContentWrap>
          <L.ContentWrap>
          <L.InputTitle>Email (덕성 이메일 입력)</L.InputTitle>
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
              <div>올바른 이메일 형식으로 입력해주세요.</div>
            )}
          </L.ErrorMessageWrap>
          </L.ContentWrap>
          <L.ContentWrap>
          <L.InputTitle>Password</L.InputTitle>
          <L.InputWrap>
            <L.Input
              type="text"
              placeholder="덕새"
              value={name}
              onChange={handleName}
            />
          </L.InputWrap>
          <L.ErrorMessageWrap>
            {!nameValid && name.length > 0 && (
              <div>2글자 이상 9글자 미만으로 입력해 주세요.</div>
            )}
          </L.ErrorMessageWrap>
        </L.ContentWrap>
        <L.ContentWrap>
          <L.InputTitle>Password Check</L.InputTitle>
          <L.InputWrap>
            <L.Input
              type="text"
              placeholder="덕새"
              value={name}
              onChange={handleName}
            />
          </L.InputWrap>
          <L.ErrorMessageWrap>
            {!nameValid && name.length > 0 && (
              <div>2글자 이상 9글자 미만으로 입력해 주세요.</div>
            )}
          </L.ErrorMessageWrap>
        </L.ContentWrap>

        <div>
          <S.BottomButton onClick={generateRandom} disabled={notAllow}>
            <a href='./Verification'>
              인증코드 보내기
            </a>
            </S.BottomButton>
        </div>
      </L.Page>
    </L.LoginWrapper>
  );
};

export default Signin;
