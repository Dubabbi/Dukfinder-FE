import styled from 'styled-components';

export const DetailTitle = styled.h2`
  font-size: 25px;
  color: #333333; 

  padding: 1%; 
`;

export const TitleWrap = styled.div`

`;


export const TextWrap = styled.div`
  padding: 2%;
  font-size: 18px;
  line-height: 1.6;
`;

export const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  line-height: 1;
  font-size: 20px;
  background: #bbb;
  width: 20%;
  margin-left: 40%;
  color: #0d0d0d;
  border-radius: 5px;
  font-weight: bold;
  padding: 18px 32px;
  &:hover {
    background: #141414ae;
    border-radius: 5px;
    color: #ccc;
  }
`;