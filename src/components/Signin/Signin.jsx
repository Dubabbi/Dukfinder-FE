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
  const [confirmPwMsg, setConfirmPwMsg] = useState('');


  const handleConfirmPw = (e) => {
    setConfirmPw(e.target.value);
  };

  const onClickConfirmButton = async () => {
    try {
      if (nameValid && emailValid && pwValid && confirmPw === pw) {
        // 등록 API 호출
        const response = await axios.post('/user/register/', {
          username: name,
          email: email,
          password: pw,
          password2: confirmPw,
        });

        // 성공 로그 및 등록 프로세스 진행
        console.log('사용자 등록 성공:', response.data);
        generateRandom(); // 등록 프로세스에 필요한 경우
        setSignupComplete(true); // 등록 프로세스에 필요한 경우
        setShowWelcomeMessage(true);
      } else {
        // 입력 값이 조건을 만족하지 않을 때의 처리
        console.error('등록 실패: 입력값이 올바르지 않습니다.');
      }
    } catch (error) {
      // 등록 실패
      if (error.response) {
        console.error('등록 실패:', error.response.data.error);
      } else {
        console.error('등록 중 예기치 않은 오류:', error.message);
      }
    }

    console.log('하단 버튼이 클릭되었습니다.');
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
      const response = await axios.post('/user/register/', {
        username: name,
        email: email,
        password: pw,
        password2: confirmPw,
      });

      // 등록 성공
      console.log('사용자 등록 성공:', response.data);
      generateRandom(); // 나머지 등록 프로세스를 진행하려면 가정
    } catch (error) {
      // 등록 실패 처리
      if (error.response) {
        console.error('등록 실패:', error.response.data.error);
        // 상태를 업데이트하거나 사용자에게 오류 메시지를 표시할 수 있습니다.
      } else {
        console.error('등록 중 예기치 않은 오류:', error.message);
      }
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

 
  useEffect(() => {
    if (nameValid && emailValid && pwValid && confirmPw === pw) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [nameValid, emailValid, pwValid, confirmPw, pw]);

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
            <p>[덕새]님<br />환영합니다!</p>
          </L.TitleWrap>
          <L.ContentWrap>
            <S.TextWrap>
              가입을 완료했습니다.<br />
              🐤Dukfinder🐤에서 다양한 경험을<br />시작해 보세요!<br />
              버튼을 누르면 메인 화면으로 이동합니다.
            </S.TextWrap>
          </L.ContentWrap>
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
          <L.ErrorMessageWrap >
            {!pwValid && pw.length > 0 && (
              <div></div>
            )}
          </L.ErrorMessageWrap>
        </L.ContentWrap>
        <L.BottomButton onClick={onClickConfirmButton} disabled={notAllow}>
          {signupComplete ? '인증코드 보내기' : '인증코드 보내기'}
        </L.BottomButton>
          </div>
        )}
      </L.Page>
    </L.LoginWrapper>
  );
}
export default Signin;
