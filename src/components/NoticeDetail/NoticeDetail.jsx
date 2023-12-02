import React, { useState } from 'react';
import { noticeData } from '../../noticeData';
import * as D from './NoticeDetailStyle';
import * as M from '../Main/MainStyle';
import * as N from '../Notice/NoticeStyle';
import { Link } from 'react-router-dom';

function NoticeDetail(props) {
    const { n_id } = useParams();
    const notice = noticeData.results.find(notice => notice.n_id === n_id);
    return (
        <M.MainWrapper>
        <N.Section>
          <N.PageTitle>
            <N.TitleText>공지사항</N.TitleText>
          </N.PageTitle>
                    
           <N.PageTitle><hr />{n_title}<hr /></N.PageTitle>
                    
           <div>{n_content}</div>
           <button as={Link} to={`../notice`}>목록으로</button>
            </N.Section>
        </M.MainWrapper>
    );
  }
  
  export default NoticeDetail;