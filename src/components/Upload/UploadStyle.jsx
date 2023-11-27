// UploadStyle.jsx
import styled from 'styled-components';

export const InputTitle = styled.div`
  font-size: 22px;
  margin-left: 1%;
  width: 90%;
  font-weight: 600;
  margin-top: 3%;

  color: #444444;
`;

export const InputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  margin-top: 1%;
  margin-left: 1%;
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


export const InputTitleInLine = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #444444;
`;

export const InputWrapInLine = styled.div`
  display: flex;
  border-radius: 8px;
  margin-top: 1%;
  height: 
  width: 90%;
  background-color: #EFF0F2;
  border: 1px solid #e2e0e0;

  &:focus-within {
    border: 1px solid #9e30f4;
  }
`;

export const InputInLine = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: 400;
  &::placeholder {
    color: #666666;
  }
`;

export const InLine = styled.div`
  margin-left: 1%;
  width: 90%;
  margin-top: 3%;
  display: flex;
  justify-content: space-between; /* Adjust this based on your spacing preferences */
  align-items: center; /* Align items vertically in the center if needed */
`;