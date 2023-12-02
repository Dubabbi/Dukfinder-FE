import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { noticeData } from '../../noticeData';
import * as N from '../Notice/NoticeStyle';
import * as D from './NoticeDetailStyle';

function NoticeDetail(props) {
    const { n_id } = useParams();
    const notice = noticeData.results.find(notice => notice.n_id === n_id);

    // notice가 존재하지 않는 경우에 대한 예외 처리
    if (!notice) {
        return <div>해당 공지사항을 찾을 수 없습니다.</div>;
    }

    const { n_title, n_content } = notice;

    return (
        <N.NoticeWrapper>
            <N.Section>
                <N.PageTitle>
                    <N.TitleText>공지사항</N.TitleText>
                </N.PageTitle>
                <D.TitleWrap><hr />
                <D.DetailTitle>
                
                    {n_title}
                  
                </D.DetailTitle> <hr />                  
                </D.TitleWrap>
                <D.TextWrap>{n_content}</D.TextWrap>
                <button as={Link} to="../notice">목록으로</button>
            </N.Section>
        </N.NoticeWrapper>
    );
}

export default NoticeDetail;
