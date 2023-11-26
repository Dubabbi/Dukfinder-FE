// SigninStyle.jsx
import styled from 'styled-components';

export const TextWrap = styled.div`
  margin-top: 10px;
  margin-bottom: 9%;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

export const BottomButton = styled.button`
  margin-left: 5%;
  width: 90%;
  height: 48px;
  border: none;
  font-weight: bold;
  border-radius: 10px;
  background-color: #9e30f4;
  color: white;
  margin-bottom: 60px;
  cursor: pointer;

  &:disabled {
    background-color: #FFE665;
    font-size: 17px;
    color: #0d0d0d;
  }
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

export const ErrorMessageWrap = styled.div`
  position: absolute;
  left: 6%;
  width: 90%;
  color: #ef0000;
  font-size: 12px;
  padding-top: 8px; /* margin-top 대신 padding-top 사용 */
`;