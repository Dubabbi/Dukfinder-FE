import React, { useState } from 'react';
import * as M from '../Main/MainStyle';
import * as N from './NoticeStyle';

export default function Notice() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items to display per page

    // 페이지 변경 시 호출되는 함수
    const handlePageChange = (page) => {
      // 예시로 현재 페이지를 변경하고 다른 작업을 수행할 수 있습니다.
      setCurrentPage(page);
      // 여기서 추가적인 작업을 수행할 수 있습니다.
      // 예: 해당 페이지의 데이터를 불러오기, 또는 렌더링 로직 수행 등
    };
  
    // 계산된 현재 페이지의 데이터 슬라이싱 및 역순으로 정렬
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = Array.from({ length: 15 })
      .slice(startIndex, endIndex)
      .reverse();
  
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
                <N.ThTitle>제목</N.ThTitle>
                <N.ThDate>날짜</N.ThDate>
                <N.ThViews>조회수</N.ThViews>
              </N.TableRow>
            </N.TableHead>
            {/* Table Body content goes here */}
            <N.TableBody>
              {currentData.map((_, index) => (
                <N.TableRow key={index}>
                  <N.ThNum>{startIndex + index + 1}</N.ThNum>
                  <N.ThTitle>
                    <N.BoardLink href="#">공지 제목 {startIndex + index + 1}</N.BoardLink>
                  </N.ThTitle>
                  <N.ThDate>2023-01-01</N.ThDate>
                  <N.ThViews>100</N.ThViews> {/* 조회수는 실제 데이터로 대체해야 합니다. */}
                </N.TableRow>
              ))}
            </N.TableBody>
          </N.BoardTable>
          {/* Pagination */}
          <N.PaginationWrapper>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                <a href="#" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </a>
              </li>
            ))}
           </N.PaginationWrapper>
          </N.BoardListArea>
        </N.Section>
        </M.MainWrapper>
    );
}