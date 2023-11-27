import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaCalendarAlt } from 'react-icons/fa';

export const FindWrapper = styled.div`
    color: black;
    font-size: 35px;
    margin: 0px auto;
`

export const Title=styled.div`
    margin: 40px;
    margin-top: 60px;
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
`

export const NoticeTitle=styled.div`
    font-size: 14px;
    border: 2px solid #C9736B;
    padding: 10px;
    margin-top: 5px;
    margin-left: 30px;
    border-radius: 25px;
    width: 800px;
    font-weight: bold;

    > span {
        color: #C9736B;
        font-weight: bold;
        margin-right: 10px;
      }

    a {
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
`



export const Post_Container = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    font-size: 14px;
    margin: 16px;
    
`

export const Post = styled.div`
    
    margin: 16px;
`


export const Search_Container=styled.div`
    margin: 60px 200px;
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

export const FilterButton = styled.button`
    font-size: 13px;
    font-weight: bold;
    width: 100px;
    margin: 5px;
    color: black;
    background-color: white;
    height: 30px;
    border: solid 1.5px #FFE665;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
        background: #FFFAE0;
        color: black;
        transition: 0.5s;
      }

    &.active {
        background-color: #FFFAE0;
        border: solid 2px #FFE665;
}
`

export const ButtonGroup=styled.div`
    display: flex;
    justify-content: center; 
`

export const YellowCardBody = styled(Card.Body)`
    background-color: #FFFAE0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 150px); 
    border: 1px solid #FFE665;
`;

export const CardTitle=styled(Card.Title)`
    font-size: 18px;
    padding: 3px 0px;
    font-weight: bold;
`

export const SubtitleContainer = styled(Card.Subtitle)`
    overflow-y: auto;
    padding: 2px 0px;
    font-size: 14px;
`;

export const TruncatedContent = styled(Card.Text)`
    overflow: hidden;
    padding: 3px 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 50px;
    font-size: 16px;
`;

export const LinkStyle = styled(Card.Link)`
    font-weight: bold;
    text-decoration: underline;
    display: flex;
    align-items: right;
`

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
   
`;

export const DropdownMenu = styled.select`
    margin-right: 10px;
    border: none;
    font-size: 14px;
    position: absolute;
    left: 20px;
    top: 5px;
    width: auto;
`;

export const CustomCalendarIcon = styled(FaCalendarAlt)`
    position: relative;
    font-size: 14px;
    left: 5px;
`;

export const DropDownWrapper = styled.div`
    margin-left: 10px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid #FFE665;
    height: 35px;
    width: 90px;
    border-radius: 10px;
    
`;