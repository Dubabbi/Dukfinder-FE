import * as F from './FindStyle';
import React, { useState } from 'react';
import PostCard from './PostCard';
import { data } from '../../postData';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import DateFilter from '../DateFilter/DateFilter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

function Find() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category.toLowerCase()); // 선택된 카테고리 업데이트
    };

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase()); // 검색어 업데이트
    };

    // 검색어와 선택된 카테고리에 따라 데이터 필터링하는 함수
    const filteredPosts = data.results.filter(post => {
        const matchesCategory = !selectedCategory || post.p_category.toLowerCase() === selectedCategory;
        const matchesSearch = !searchTerm || post.p_title.toLowerCase().includes(searchTerm);

        // 검색어와 카테고리 모두 일치하는 경우에만 반환
        return matchesCategory && matchesSearch;
    });

    return (
        <F.FindWrapper>
            <SearchBar setSearchTerm={handleSearch} />
            <CategoryFilter handleCategoryFilter={handleCategoryFilter} />
            <F.Title>
                주인을 찾아요!
                <F.NoticeTitle>
                    <span>UPDATE</span>
                    <Link to="/your-link-here">공지 - 게시글 작성 방법 안내</Link>
                </F.NoticeTitle>
                <DateFilter />
            </F.Title>
            <F.Post_Container>
                {filteredPosts.map((item) => (
                    <PostCard
                        key={item.p_id}
                        p_id={item.p_id}
                        p_title={item.p_title}
                        p_date={item.p_date}
                        p_findPlace={item.p_findPlace}
                        p_keepPlace={item.p_keepPlace}
                        p_category={item.p_category}
                        p_content={item.p_content}
                        p_time={item.p_time}
                    />
                ))}
            </F.Post_Container>
        </F.FindWrapper>
    );
}

export default Find;