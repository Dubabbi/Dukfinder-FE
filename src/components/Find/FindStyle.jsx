import styled, { css } from 'styled-components';
import { Card } from 'react-bootstrap';

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
}
`



export const Post_Container = styled.div`
    display : flex;
    flex-wrap : wrap;
   
    font-size: 14px;
    margin: 16px;
    
`

export const CardStyle = styled(Card)`
    border-radius: 15px;
    margin: 16px;
    border: 2px solid gray;
`
export const CardImgStyle = styled(Card.Img)`
    border-radius: 15px 15px 0px 0px;
    height: 270px;
`

export const YellowCardBody = styled(Card.Body)`
    background-color: #FFFAE0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 150px); 
    border-radius: 0px 0px 15px 15px;
   
`;

export const CardTitle=styled(Card.Title)`
    font-size: 19px;
    padding: 10px 5px;
    font-weight: bold;
`

export const SubtitleContainer = styled(Card.Subtitle)`
    overflow-y: auto;
    padding: 2px 5px;
    font-size: 15px;
`;

export const TruncatedContent = styled(Card.Text)`
    overflow: hidden;
    padding: 10px 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 50px;
    font-size: 15px;
`;

export const LinkStyle = styled(Card.Link)`
    font-weight: bold;
    padding: 5px 10px;
    text-decoration: underline;
    text-align: right;
`

export const TimeContainer = styled(Card.Subtitle)`
    padding: 6px;
    text-align: left;
    font-size: 14px;
`

export const LinkTimeGroup = styled.div`
    display : flex;
    justify-content: space-between;
    
`

