import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const FilterButton = styled.button`
    font-size: 13px;
    font-weight: bold;
    width: 100px;
    margin: 5px;
    color: black;
    background-color: white;
    height: 30px;
    border: solid 1px #FFE665;
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
