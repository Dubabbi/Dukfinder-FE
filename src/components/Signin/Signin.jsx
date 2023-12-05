// Signin.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as L from '../Login/LoginStyle';
import * as S from './SigninStyle';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [pw, setPw] = useState('');
    const [pwValid, setPwValid] = useState(false);
    const [name, setName] = useState('');
    const [nameValid, setNameValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const [random, setRandom] = useState("000000");
    const [signupComplete, setSignupComplete] = useState(false); 
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); 
    const [confirmPw, setConfirmPw] = useState(''); 

    const handleConfirmPw = (e) => { 
      setConfirmPw(e.target.value); 
    }; 


    const [confirmPwMsg, setConfirmPwMsg] = useState(''); 

    const onClickConfirmButton = async () => {
      try {
        const response = await axios.post('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/register/', {
          username: name, // 클라이언트의 name 상태를 서버의 username 필드로 전달
          email,
          password: pw, // 클라이언트의 pw 상태를 서버의 password 필드로 전달
          password2: confirmPw // 클라이언트의 confirmPw 상태를 서버의 password2 필드로 전달
        });
    
        // Check the response and handle successful signup
        if (response.status === 201) {
          setSignupComplete(true);
          // Handle success (perhaps show a success message)
        } else {
          // Handle other responses accordingly
        }
      } catch (error) {
        console.error('Error while signing up:', error);
        // Handle error cases (perhaps show an error message)
      }
    };


    useEffect(() => { 
      if (confirmPw.length >= 1) { 
        if (confirmPw === pw) {
          setConfirmPwMsg('비밀번호가 일치합니다.');
        } else {
          setConfirmPwMsg('비밀번호가 일치하지 않습니다.');
        }
      } else {
        setConfirmPwMsg(''); 
      }
    }, [confirmPw, pw]);


  
    const handleName = (n) => {
      setName(n.target.value);
      const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/i;
      if (regex.test(n.target.value)) {
        setNameValid(true);
      } else {
        setNameValid(false);
      }
    };
  
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
  
    useEffect(() => {
      if (nameValid && emailValid && pwValid && confirmPw === pw) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid], [nameValid], [pwValid], [confirmPw]);
  
    useEffect(() => {
      if (signupComplete) {
        setShowWelcomeMessage(true);
      }
    }, [signupComplete]);
    
    const generateRandom = () => {
      const randomValue = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
      setRandom(randomValue);
      setSignupComplete(true);
    };


    useEffect(() => {
      if (nameValid && emailValid && pwValid && confirmPw === pw) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [nameValid, emailValid, pwValid, confirmPw, pw]);
    
  return (
    <L.LoginWrapper>
      <L.Page>
        {showWelcomeMessage ? ( 
          <div>
          <L.TitleWrap>
            <p>💛{name}님💛<br />환영합니다!</p>
          </L.TitleWrap>
          <L.ContentWrap>
            <S.TextWrap>
            🐤Dukfinder🔍에서 <br />다양한 경험을 시작해 보세요!<br />
            버튼을 누르면 로그인 페이지로 <br />이동합니다.
          </S.TextWrap></L.ContentWrap>
          <a href='/'>
            <S.BottomButton onClick>
                확인
            </S.BottomButton>
            </a>
          
          </div>
        ) : ( 
          <div>
          <L.TitleWrap>
          <p>회원가입</p>
        </L.TitleWrap>
        {/* 🦆 */}
        <L.ContentWrap>
          <L.InputTitle>Username</L.InputTitle>
          <S.InputWrap>
            <S.Input
              type="text"
              placeholder="덕새"
              value={name}
              onChange={handleName}
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
              type="text"
              placeholder="test@duksung.ac.kr"
              value={email}
              onChange={handleEmail}
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
        )}
      </L.Page>
    </L.LoginWrapper>
  );
};

export default Signin;