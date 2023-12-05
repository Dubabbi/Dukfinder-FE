import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export const Search_Container=styled.div`
    margin: 60px;
    display: flex;
    justify-content: center;
    
`

export const StyledButton = styled(Button)`
    position: absolute;
    top: 50%;
    right: 10px; /* 오른쪽 여백 설정 */
    transform: translateY(-50%);

    height: 40px; 
    width: 40px; 
    font-size: 16px; 
    background-color: #FFE665; 
    border-radius: 50px; 
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        background: #FFFAE0;
        transition: 0.5s;
      }
`;

export const CommentNot = styled.div`
      font-size: 17px;
      margin: 30px 60px;
      color: gray;
`

export const StyledForm = styled(Form)`
    width: 1200px;
    height: 55px; 
    font-size: 19px; 
    border-radius: 25px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    position: relative;
    
    .form-control {
        height: 51px; 
        font-size: 19px; 
        border-radius: 25px;
        padding-right: 80px; 
        padding-left: 20px;
    }
`;

export const CommentListStyle = styled(Container)`
    width: 1200px;
    border-bottom: 1px solid gray;
    padding: 30px 20px;
    text-align: left;
`

export const UserRow = styled(Row)`
    width: 1200px;
    align-items: center;
    font-size: 17px;
    padding: 0px 0px 10px 0px;

`

export const ContentRow = styled(Row)`
    width: 1200px;
    align-items: center;
    font-size: 20px;
    padding: 10px 0px;
`

export const DateRow = styled(Row)`
    width: 1200px;
    align-items: center;
    font-size: 13px;
    color: gray;
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

    &:hover {
        background: #FFFAE0;
        transition: 0.5s;
        border: 2px solid #FFE665;
      }
`

export const DeleteContainer = styled.div`
    display: flex;
    justify-content: right;
`