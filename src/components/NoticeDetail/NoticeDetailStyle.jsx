import styled from 'styled-components';

export const BoardWrap = styled.div`
  width: 1200px;
  margin: 100px auto;
  @media (max-width: 1000px) {
    width: 100%;
    min-width: 320px;
    padding: 0 30px;
    box-sizing: border-box;
  }
`;

export const BoardTitle = styled.div`
  margin-bottom: 30px;
`;

export const BoardViewWrap = styled.div`
  width: 100%;
  border-top: 2px solid #000;
`;

export const BoardView = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  padding: 20px 15px;
  border-bottom: 1px dashed #ddd;
  font-size: 2rem;
`;

export const Info = styled.div`
  padding: 15px;
  border-bottom: 1px solid #999;
  font-size: 0;
`;

export const InfoItem = styled.dl`
  position: relative;
  display: inline-block;
  padding: 0 20px;
  &:first-child {
    padding-left: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 0;
    display: block;
    width: 1px;
    height: 13px;
    background: #ddd;
  }

  &:first-child::before {
    display: none;
  }
`;



export const TextWrap = styled.div`
  padding: 2%;
  font-size: 18px;
  line-height: 1.6;
`;

