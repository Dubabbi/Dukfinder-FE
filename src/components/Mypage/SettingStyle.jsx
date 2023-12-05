import styled from 'styled-components';

export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  border-radius: 8px;
  padding: 10px;
  margin-top: 40px;
  margin-left: 5%;
  width: 90%;
  height: 50px;
  background-color: #EFF0F2;
  border: 1px solid #e2e0e0;
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
  height: 500px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;