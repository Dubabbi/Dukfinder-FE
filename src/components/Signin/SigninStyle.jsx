// SigninStyle.jsx
import styled from 'styled-components';

export const TextWrap = styled.div`
  margin-top: 10%;
  margin-bottom: 11%;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

export const BottomButton = styled.button`
  margin-left: 5%;
  margin-top: 8%;
  width: 90%;
  padding: 16px;
  height: 10%;
  border: none;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  background-color: #9e30f4;
  color: white;
  cursor: pointer;

  &:disabled {
    margin-left: 5%;
    margin-top: 8%;
    width: 90%;
    padding: 16px;
    height: 10%;
    border: none;
    font-weight: bold;
    border-radius: 10px;
    pointer-events: none; 
    background-color: #FFE665;
    font-size: 20px;
    color: #0d0d0d;
  }
`;
