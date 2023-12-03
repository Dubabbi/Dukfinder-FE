import styled, { css } from 'styled-components';
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const FindDetailWrapper = styled.div`
    color: black;
    font-size: 35px;
    margin: 60px auto;

    @media screen and (max-width: 768px) {
        ${({ smallSize }) =>
          smallSize &&
          css`
            /* 작은 화면에서 컴포넌트 크기 조절 */
            width: 50%;
            height: 50%;
          `}
      }
    
`

export const Title=styled.div`
    padding: 0px 40px;
    display: flex;
    font-weight: bold;
`

export const PathContainer = styled(Breadcrumb)`
    display: flex;
    justify-content: right;
    margin: 0 60px 0 0;
`

export const PathItem = styled(Breadcrumb.Item)`
      font-size: 14px;
      margin: 0 auto;
      text-align: center;
      
`
export const ModalTitleSize = styled(Modal.Title)`
      font-size: 20px;
      margin: 15px 0;
`

export const ModalCloseButton = styled(Button)`
    width: 60px;
    height: 40px;
    font-size: 14px;
    border-radius: 5px;  
`

export const ModalButton = styled(Button)`
    background-color:  #FFE665;
    color: black;
    width: 80px;
    height: 40px;
    font-size: 14px;    
    border: 2px solid #FFE665;
    border-radius: 5px;  


    &:hover {
        background: #FFFAE0;
        color: black;
        transition: 0.5s;
        border: 2px solid #FFE665;
      }
`


export const DetailContainer = styled.div`
    padding: 0 40px 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ImageSize = styled(Image)`
      width: 500px;
      height: 360px;
      border-radius: 15px;
      border: 2px solid gray;
      ${({ smallSize }) =>
      smallSize &&
      css`
        /* 작은 화면에서 컴포넌트 크기 조절 */
        width: 50%;
      `}
`

export const CardStyle = styled(Card)`
    margin: 16px;
    border-radius: 15px;   
   

`

export const YellowCardBody = styled(Card.Body)`
    background-color: #FFFAE0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 150px); 
    border: 1px solid #FFE665;
    border-radius: 15px;
    @media screen and (max-width: 768px) {
       
    
`;

export const CardTitle=styled(Card.Title)`
    font-size: 30px;
    padding: 20px;
    font-weight: bold;
    text-align: left;
    dislay: flex;
    justify-content: center;
`

export const SubtitleContainer = styled(Card.Subtitle)`
    overflow-y: auto;
    padding: 5px 23px;
    font-size: 17px;
    
    > span {
        font-weight: bold;
        margin-right: 10px;
      }
`;

export const CardContent = styled(Card.Text)`
    margin-bottom: 10px;
    padding: 5px 23px;
    height: 50px;
    font-size: 17px;
`


export const TimeContainer = styled(Card.Subtitle)`
    padding: 10px 23px;
    text-align: right;
    font-size: 16px;
`

export const line = styled.div`
    border: none;
    border-top: 3px solid #FFE665;
    margin: 20px auto 0;
    width: 95%;
    
`

export const ButtonStyle = styled(Button)`
    background-color: #FFE665;
    width: 180px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid #FFE665;
    border-radius: 10px;
    text-align: center;
    padding: 15px;

    &:hover {
        background: #FFFAE0;
        transition: 0.5s;
        border: 2px solid #FFE665;
      }
`

export const ButtonContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`
export const DeleteButton = styled(Button)`
    background-color: white;
    width: 60px;
    height: 30px;
    font-size: 13px;
    text-align: center;
    padding: 4px;
    border: 2px solid #FFE665;
    border-radius: 5px;  
    margin: auto;
    margin-right: 10px;

    &:hover {
        background: #FFFAE0;
        transition: 0.5s;
        border: 2px solid #FFE665;
      }
`

export const DeleteContainer = styled.div`
    display: flex;
    justify-content: between;
`