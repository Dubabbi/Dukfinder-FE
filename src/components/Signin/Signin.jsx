// Signin.jsx
import React, { useEffect, useState } from 'react';
import * as L from '../Login/LoginStyle';
import * as S from './SigninStyle';

// 이 부분에서 랜덤 문자열을 생성하는 코드는 제거하거나 함수로 변경합니다.
// const generatedRandom = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');

const User = {
  email: 'test@example.com',
  pw: 'test2323@@@',
};

const Signin = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [random, setRandom] = useState("000000");

  // 이 부분에서 랜덤 문자열을 생성하는 함수입니다.
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

  const onClickConfirmButton = () => {
    // 패스워드 관련 로직을 제거하였습니다.
    // 이메일만 확인하는 기능으로 변경되었습니다.
    if (email === User.email) {
      alert('로그인에 성공했습니다.');
    } else {
      alert('등록되지 않은 회원입니다.');
    }
  };

  return (
    <L.LoginWrapper>
      <L.Page>
        <L.TitleWrap>
          <p>회원가입</p>
        </L.TitleWrap>
        {/* 🦆 */}
        <L.ContentWrap>
          <S.TextWrap>
            덕성여자대학교 소속임을 확인하기 위해<br />
            이메일 인증코드를 보내드립니다.<br />
            덕성여자대학교 이메일만 입력 가능하오니<br />
            덕성여자대학교 이메일을 입력하고 이메일 인증을 완료해 주세요.
          </S.TextWrap>
          <L.InputTitle>Email</L.InputTitle>
          <S.InputWrap>
            <L.Input
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </S.InputWrap>
          <S.ErrorMessageWrap>
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </S.ErrorMessageWrap>
        </L.ContentWrap>

        <div>
          <S.BottomButton onClick={generateRandom} disabled={notAllow}>
            인증코드 보내기
          </S.BottomButton>
        </div>
      </L.Page>
    </L.LoginWrapper>
  );
};

export default Signin;
