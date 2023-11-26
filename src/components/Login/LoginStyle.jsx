// LoginStyle.jsx
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFFAE0;
`;

export const Page = styled.div`
  position: absolute;
  top: 20%;
  bottom: 20%;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  justify-content: center;
  height: 500px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TitleWrap = styled.div`
  margin-top: 65px;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: #262626;
  letter-spacing: 0.5px;
  line-height: 1.5;
  p {
    display: inline; /* 'Duk'를 한 줄에 표시하기 위해 추가 */
  }
`;

export const ContentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`;

export const LostPwMessage = styled.div`
  position: fixed;
  margin-top: 8px;
  margin-left: 61%;
  cursor: pointer;
  width: 90%;
  color: red;
  font-size: 12px;
`

export const InputTitle = styled.div`
  font-size: 15px;
  margin-left: 5%;
  width: 90%;
  font-weight: 600;
  color: #262626;
`;

export const InputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  margin-left: 5%;
  width: 90%;
  background-color: #EFF0F2;
  border: 1px solid #e2e0e0;

  &:focus-within {
    border: 1px solid #9e30f4;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: #666666;
  }
`;

export const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  margin-left: 5%;
  width: 90%;
  color: #ef0000;
  font-size: 12px;
`;

export const NoAccount = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  text-align: center;
  font-size: 13px;
  p {
    font-weight: bold;
    display: inline; /* 'Duk'를 한 줄에 표시하기 위해 추가 */
  }
`

export const UnderlinedText = styled.span`
  text-decoration: underline;
`;