import React, { useState } from 'react';
import axios from 'axios';
import { noticeData } from '../../noticeData';
import * as M from '../Main/MainStyle';
import * as N from './NoticeStyle';
import react from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Notice({ n_id, n_title, n_date, n_content}) {
    return (
        <M.MainWrapper>
        <N.Section>
          <N.PageTitle>
            <N.TitleText>공지사항</N.TitleText>
          </N.PageTitle>
          {/* Board Search Area */}
          <N.BoardSearchArea>
           <N.SearchWindow>
            <N.SearchWrap>
            <N.SearchInput type="search" placeholder="검색어를 입력해주세요." />
              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" onClick={() => {/* Handle icon click */}}>
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
            </N.SearchWrap>
           </N.SearchWindow>
          </N.BoardSearchArea>
                  {/* Board List Area */}
        <N.BoardListArea>
          <N.BoardTable>
            <N.TableHead>
              <N.TableRow>
                <N.ThNum>NO</N.ThNum>
                <N.ThTitle>{n_title}</N.ThTitle>
                <N.ThDate>날짜</N.ThDate>
                <N.ThViews>조회수</N.ThViews>
              </N.TableRow>
            </N.TableHead>
            {/* Table Body content goes here */}
            <N.TableBody>
                <N.TableRow>
                  <N.ThNum >{`./${n_id}`}</N.ThNum>
                  <N.ThTitle>
                    <N.BoardLink as={Link} to={`./${n_title}`}>{`./${n_title}`}</N.BoardLink>
                  </N.ThTitle>
                  <N.ThDate>{`./${n_date}`}</N.ThDate>
                  <N.ThViews>100</N.ThViews> {/* 조회수는 실제 데이터로 대체해야 합니다. */}
                </N.TableRow>
            </N.TableBody>
          </N.BoardTable>
          </N.BoardListArea>
        </N.Section>
        </M.MainWrapper>
    );
}

export default Notice;