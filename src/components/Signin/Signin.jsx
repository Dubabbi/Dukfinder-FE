import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as L from '../Login/LoginStyle';
import * as S from './SigninStyle';

const Signin = () => {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pw, setPw] = useState('');
  const [pwValid, setPwValid] = useState(false);
  const [confirmPw, setConfirmPw] = useState('');
  const [confirmPwMsg, setConfirmPwMsg] = useState('');
  const [notAllow, setNotAllow] = useState(true);
  const [signupComplete, setSignupComplete] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [random, setRandom] = useState("000000");
  const navigate = useNavigate();

  const handleName = (n) => {
    setName(n.target.value);
    const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/i;
    setNameValid(regex.test(n.target.value));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^(?=.*[a-zA-Z]).*duksung\.ac\.kr$/;
    setEmailValid(regex.test(e.target.value));
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    setPwValid(regex.test(e.target.value));
  };

  const handleConfirmPw = (e) => {
    setConfirmPw(e.target.value);
  };

  useEffect(() => {
    if (confirmPw.length >= 1) {
      setConfirmPwMsg(confirmPw === pw ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPwMsg('');
    }
  }, [confirmPw, pw]);

  useEffect(() => {
    if (nameValid && emailValid && pwValid && confirmPw === pw) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [nameValid, emailValid, pwValid, confirmPw, pw]);

  useEffect(() => {
    if (signupComplete) {
      setShowWelcomeMessage(true);
    }
  }, [signupComplete]);

  const registerUser = async () => {
    try {
      const response = await axios.post('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/register/', {
        username: name,
        email: email,
        password: pw,
        password2: confirmPw,
      });

      console.log('사용자 등록 성공:', response.data);
      setSignupComplete(true);
      setShowWelcomeMessage(true);

    } catch (error) {
      if (error.response) {
        console.error('등록 실패:', error.response.data.error);
      } else {
        console.error('등록 중 예기치 않은 오류:', error.message);
      }
    }
  };

  const onClickConfirmButton = async () => {
    try {
      if (nameValid && emailValid && pwValid && confirmPw === pw) {
        const response = await axios.post('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/register/', {
          username: name,
          email: email,
          password: pw,
          password2: confirmPw,
        });
        console.log('사용자 등록 성공:', response.data);
        setShowWelcomeMessage(true);

      } else {
        console.error('등록 실패: 입력값이 올바르지 않습니다.');
      }
    } catch (error) {
      if (error.response) {
        console.error('등록 실패:', error.response.data.error);
      } else {
        console.error('등록 중 예기치 않은 오류:', error.message);
      }
    }

    console.log('하단 버튼이 클릭되었습니다.');
    navigate('/login');
  };

  useEffect(() => {
    if (confirmPw.length >= 1) {
      setConfirmPwMsg(confirmPw === pw ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPwMsg('');
    }
  }, [confirmPw, pw]);

  useEffect(() => {
    if (signupComplete) {
      setShowWelcomeMessage(true);
    }
  }, [signupComplete]);


  return (
    <L.LoginWrapper>
      <L.Page>
        {showWelcomeMessage ? (
          <div>
            <L.TitleWrap>
              <p>[덕새]님<br />환영합니다!</p>
            </L.TitleWrap>
            <L.ContentWrap>
              <S.TextWrap>
                가입을 완료했습니다.<br />
                🐤Dukfinder🐤에서 다양한 경험을<br />시작해 보세요!<br />
                버튼을 누르면 메인 화면으로 이동합니다.
              </S.TextWrap>
            </L.ContentWrap>
            <a href='/user/login'>
              <S.BottomButton onClick>
                확인
              </S.BottomButton>
            </a>
          </div>
        ) : (
          <form>
          <div>
            <L.TitleWrap>
              <p>회원가입</p>
            </L.TitleWrap>
            <L.ContentWrap>
              <L.InputTitle>Username</L.InputTitle>
              <S.InputWrap>
                <S.Input
                  type="text"
                  placeholder="덕새"
                  value={name}
                  onChange={handleName}
                  autoComplete="username"
                  id="username"
                />
              </S.InputWrap>
              <L.ErrorMessageWrap>
                {!nameValid && name.length > 0 && (
                  <div>2글자 이상 9글자 미만으로 입력해 주세요.</div>
                )}
              </L.ErrorMessageWrap>
            </L.ContentWrap>
            <L.ContentWrap>
              <L.InputTitle>Email (덕성 이메일 입력)</L.InputTitle>
              <S.InputWrap>
              <S.Input
                type="email"
                placeholder="test@duksung.ac.kr"
                value={email}
                onChange={handleEmail}
                autoComplete="email"
                id="email"
              />
              </S.InputWrap>
              <L.ErrorMessageWrap>
                {!emailValid && email.length > 0 && (
                  <div>올바른 이메일 형식으로 입력해주세요.</div>
                )}
              </L.ErrorMessageWrap>
            </L.ContentWrap>
            <L.ContentWrap>
              <L.InputTitle>Password</L.InputTitle>
              <S.InputWrap>
                <S.Input
                  type="password"
                  placeholder="Enter your password"
                  value={pw}
                  onChange={handlePw}
                  autoComplete="new-password" 
                  id="password"
                />
              </S.InputWrap>
              <L.ErrorMessageWrap>
                {!pwValid && pw.length > 0 && (
                  <div>영문, 숫자, 특수기호 조합 8자리 이상의 비밀번호를 입력하세요.</div>
                )}
              </L.ErrorMessageWrap>
            </L.ContentWrap>
            <L.ContentWrap>
              <L.InputTitle>Password Check</L.InputTitle>
              <S.InputWrap>
              <S.Input
                type="password"
                placeholder="Re-enter your password"
                value={confirmPw}
                onChange={handleConfirmPw}
                autoComplete="new-password"
                id="confirmPassword"
              />
              </S.InputWrap>
              <L.ErrorMessageWrap>
                {confirmPwMsg && <div>{confirmPwMsg}</div>}
              </L.ErrorMessageWrap>
              <L.ErrorMessageWrap>
                {!pwValid && pw.length > 0 && (
                  <div></div>
                )}
              </L.ErrorMessageWrap>
            </L.ContentWrap>
            <L.BottomButton onClick={onClickConfirmButton} disabled={notAllow}>
              {signupComplete ? '회원가입' : '회원가입'}
            </L.BottomButton>
          </div>
        </form>
      )}
    </L.Page>
  </L.LoginWrapper>
);
};
export default Signin;
