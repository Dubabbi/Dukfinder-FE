import * as F from './FooterStyle';

const Front = ['윤소은', '조예영', '최유리'];
const Back = ['김나영', '여현정'];

export default function Footer() {
    return (
        <>
            <F.FooterWrapper>
                <F.DevWrapper>
                    <F.Dev>Front-end</F.Dev>
                    <F.Names>{Front}</F.Names>
                </F.DevWrapper>
                <F.DevWrapper>
                    <F.Dev>Back-end</F.Dev>
                    <F.Names>{Back}</F.Names>
                </F.DevWrapper>
            </F.FooterWrapper>
        </>
    )
}