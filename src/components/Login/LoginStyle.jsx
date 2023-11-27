// LoginStyle.jsx
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFFAE0;
`;

export const Page = styled.div`
  position: absolute;
  top: 20%;
  bottom: 0px;
  width: 100%;
  max-width: 550px;
  padding: 0 3%;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: hidden;
  flex-direction: column;
  border-radius: 20px;
  justify-content: center;
  height: 600px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TitleWrap = styled.div`
  margin-top: 20%;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #262626;
  letter-spacing: 0px;
  line-height: 1.5;
  p {
    display: inline; /* 'Duk'를 한 줄에 표시하기 위해 추가 */
  }
`;

export const ContentWrap = styled.div`
  margin-top: 26px;
  position: relative; /* 상대적인 위치 설정 */
`;

export const LostPwMessage = styled.div`
  position: relative;
  margin-top: 8px;
  cursor: pointer;
  width: 90%;
  color: red;
  font-size: 14px;
  // 추가한 부분: text-align을 right로 설정하여 텍스트를 오른쪽 정렬
  text-align: right;
`;

export const InputTitle = styled.div`
  font-size: 17px;
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
  height: 20%;
  font-size: 20px;
  font-weight: 400;

  &::placeholder {
    color: #666666;
  }
`;

export const BottomButton = styled.button`
  margin-left: 5%;
  margin-top: 8%;
  width: 90%;
  padding: 16px;
  height: 10%;
  border: none;
  font-weight: bold;
  border-radius: 10px;
  background-color: #9e30f4;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #FFE665;
    font-size: 20px;
    color: #0d0d0d;
  }
`;

export const ErrorMessageWrap = styled.div`
  position: fixed;
  padding-left: 5%;
  margin-top: 1%;
  width: 90%;
  color: red;
  font-size: 14px;
`;

export const NoAccount = styled.div`
  margin-top: 3%;
  max-width: 100%;
  cursor: pointer;
  text-align: center; 
  p {
    font-weight: bold;
    display: inline; 
    font-size: 13px;
  }
  a {
    font-size: 15px;
  }
`

export const UnderlinedText = styled.span`
  text-decoration: underline;
`;