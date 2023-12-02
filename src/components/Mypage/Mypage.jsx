import * as My from './MypageStyle';
import Card from './../Main/Card';
import * as M from './../Main/MainStyle';

export default function MyPage() {
    return (
        <>
            <My.BackColor>
                <My.Title>My Page</My.Title>
            </My.BackColor>
            <My.BackYellow>
                <My.ProfileWrapper>
                    <My.ProfilePic/>
                    <My.Nickname>nickname</My.Nickname>
                    <My.Email>example@duksung.ac.kr</My.Email>
                </My.ProfileWrapper>
                <My.CardWrapper>
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
                </My.CardWrapper>
            </My.BackYellow>
        </>
    )
}