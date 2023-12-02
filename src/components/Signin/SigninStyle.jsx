// SigninStyle.jsx
import styled from 'styled-components';

export const TitleWrap = styled.div`
  margin-top: 3%;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #262626;
  letter-spacing: 0px;
  line-height: 1.5;
  p {
    display: inline; 
  }
`;

export const TextWrap = styled.div`
  padding: 10%;
  font-size: 18px;
  text-align: center;
  
  line-height: 1.6;
`;


export const InputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 10px;
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
  height: 16px;
  font-size: 15px;
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
background-color: #FFE665;
font-size: 20px;
color: #0d0d0d;
border-radius: 10px;
&:disabled {
  margin-left: 5%;
  margin-top: 8%;
  width: 90%;
  padding: 16px;
  height: 10%;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  background-color: #FFE665;
  font-size: 20px;
  color: #0d0d0d;
}
`;