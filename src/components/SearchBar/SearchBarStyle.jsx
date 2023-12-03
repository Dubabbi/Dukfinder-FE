import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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


export const StyledForm = styled(Form)`
    width: 700px;
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
