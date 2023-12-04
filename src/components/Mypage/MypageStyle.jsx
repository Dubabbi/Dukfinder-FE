import styled from 'styled-components';
import { IoMdSettings } from "react-icons/io";

export const BackColor = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E3E3E3;
`

export const Setting = styled(IoMdSettings)`
    width: 4vw;
    height: 4vw;
    position: absolute;
    right: 4vw;
    margin-top: 2vw;
`

export const Title = styled.div`
    font-size: 2vw;
    font-weight: bold;
    text-align: center;
    padding-top: 5vh;
`

export const BackYellow = styled.div`
    background-color: #FFFAE0;
    width: 100vw;
`

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:transparent;
    width: 100vw;
    height: 20vw;
    padding-top: 5vw;
    margin-bottom: 5vw;
`

export const ProfilePic = styled.div`
    width: 10vw;
    height: 10vw;
`

export const Nickname = styled.div`
    font-size: 2vw;
    font-weight: bold;
    padding-top: 1vw;
    background-color:transparent;
`

export const Email = styled.div`
    font-size: 1vw;
    color: #333333;
    padding: 1vw 0 1vw 0;
    background-color:transparent;
`

export const CardWrapper = styled.div`
    width: 90vw;
    margin: 0 5vw 0 5vw;
`