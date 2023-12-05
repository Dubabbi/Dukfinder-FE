import styled from 'styled-components';
import { PiBell } from "react-icons/pi";

export const MainContainer = styled.div`
    color: black;
    width: 80vw;
    margin: 0px auto;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
`

export const Logo = styled.img`
    width: 5vw;
    height: 5vw;
    margin-left: 1vw;
    margin-right: 1vw;
`

export const Title = styled.div`
    font-size: 4vw;
    font-weight: bold;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Bell = styled(PiBell)`
    width: 4vw;
    height: 4vw;
    position: absolute;
    margin-left: 73vw;
`

export const SubTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-direction: nowrap;
    width: 100%;
`

export const SubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 4vw;
    margin: 20px;
    border-style: solid;
    border-color: #FFE665;
    border-width: 3px;
    border-radius: 20px;
    font-size: 2vw;
`

export const SubWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100px, 30vw);
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 20vw;
    height: 400px;
`

export const Image = styled.img`
    height: 20vw;
    width: 90%;
    padding: 2vw 2vw 1vw 2vw;
`

export const CardTitle = styled.div`
    font-size: 2vw;
    text-align: left;
    width: 90%;
    margin-left:10px;
    padding: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    padding-left: 20px;
    padding-right: 20px;
`

export const Tag = styled.div`
    width: 45%;
    height: 20px;
    margin-right: 5px;
    background-color: #FFE665;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    text-align: center;
    color: black;
`