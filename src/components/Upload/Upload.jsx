//Upload.jsx
import * as U from './UploadStyle';
import * as M from '../Main/MainStyle';
import * as N from '../Notice/NoticeStyle';

export default function Upload() {
    return (
        <M.MainWrapper>
        <N.Section>
          <N.PageTitle>
            <N.TitleText>작성 페이지</N.TitleText>
          </N.PageTitle>
        <U.InputTitle>제목 (물건명)</U.InputTitle>
        <U.InputWrap>
          <U.Input
            type="text"
            placeholder=""
          />
        </U.InputWrap>
        <U.InLine>
            <div>
                <U.InputTitleInLine>장소</U.InputTitleInLine>
                <U.InputWrapInLine>
                <U.Input type="text" placeholder="" />
                </U.InputWrapInLine>
            </div>
            <div>
                <U.InputTitleInLine>분류</U.InputTitleInLine>
                <U.InputWrapInLine>
                <U.Input type="text" placeholder="" />
                </U.InputWrapInLine>
            </div>
            <div>
                <U.InputTitleInLine>일자</U.InputTitleInLine>
                <U.InputWrapInLine>
                <U.Input type="text" placeholder="" />
                </U.InputWrapInLine>
            </div>
        </U.InLine>

        <U.InputTitle>내용</U.InputTitle>
        <U.InputWrap>
          <U.Input
            type="text"
            placeholder=""
          />
        </U.InputWrap>
        </N.Section>
        </M.MainWrapper>
    );
}