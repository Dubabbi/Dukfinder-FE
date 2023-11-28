// SigninStyle.jsx
import styled from 'styled-components';

export const TitleWrap = styled.div`
  margin-top: 5%;
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
  margin-bottom: 2%;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

export const BottomButton = styled.button`
  margin-left: 5%;
  width: 90%;
  margin-top: 5%;
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
    width: 90%;
    margin-top: 5%;
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
