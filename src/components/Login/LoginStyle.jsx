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
