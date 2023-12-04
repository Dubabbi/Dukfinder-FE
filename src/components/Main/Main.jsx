import SearchBar from '../SearchBar/SearchBar';
import * as M from './MainStyle';
import { PiBell } from "react-icons/pi";
import Card from './Card';

export default function Main() {
    return (
        <>
            <M.MainContainer>
                <M.Header>
                    <M.Title>Dukfinder</M.Title>
                    <SearchBar/>
                    <M.Bell>
                        <PiBell size={65} stroke="black" fill="black" strokeWidth="3"/>
                    </M.Bell>
                </M.Header>

                <M.SubTitleWrapper>
                    <M.SubTitle>주인을 찾아요!</M.SubTitle>
                    <M.SubTitle>잃어버렸어요!</M.SubTitle>
                </M.SubTitleWrapper>
                 
                <M.SubWrapper>
                    <M.CardWrapper>
                        <Card />
                    </M.CardWrapper>
                <M.CardWrapper>
                        <Card />
                    </M.CardWrapper>
                </M.SubWrapper>

            </M.MainContainer>
        </>
    );
}