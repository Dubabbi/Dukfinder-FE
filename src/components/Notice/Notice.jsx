import * as M from '../Main/MainStyle';
import * as N from './NoticeStyle';

export default function Notice() {
    return (
        <M.MainWrapper>
        <N.Section>
          <N.PageTitle>
            <N.TitleText>공지사항</N.TitleText>
          </N.PageTitle>
        </N.Section>
        </M.MainWrapper>
    );
}