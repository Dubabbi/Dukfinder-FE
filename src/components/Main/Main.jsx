import * as M from './MainStyle';
import FindCard from './FindCards';
import LostCard from './LostCards'
import SearchBar from './../SearchBar/SearchBar';
import Logo from './../../assets/icon/duklogo.svg';

export default function Main() {
    return (
        <>
            <M.MainContainer>
                <M.Header>
                    <M.Logo src={Logo}/>
                    <M.Title>Dukfinder</M.Title>
                    <SearchBar/>
                </M.Header>

                <M.SubTitleWrapper>
                <M.SubTitle><a href="/find">주인을 찾아요!</a></M.SubTitle>
                <M.SubTitle><a href="/lost">잃어버렸어요!</a></M.SubTitle>
                </M.SubTitleWrapper>
                 
                <M.SubWrapper>
                    <M.CardWrapper>
                        <FindCard />
                    </M.CardWrapper>
                    <M.CardWrapper>
                        <LostCard />
                    </M.CardWrapper>
                </M.SubWrapper>

            </M.MainContainer>
        </>
    );
}