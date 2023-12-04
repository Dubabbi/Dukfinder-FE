import * as F from './FindStyle';
import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { data } from '../../postData';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import DateFilter from '../DateFilter/DateFilter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import axios from 'axios';

function Find() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const [loggedIn, setLoggedIn] = useState(false); // 로그인 여부 상태
    const [findPostData, setFindPostData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('key');
        console.log('토큰 값:', token); // 토큰 값 확인
    
        if (token) {
            axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/userinfo/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            .then(response => {
                setLoggedIn(true);
    
                // 로그인 상태일 때 포스트를 불러옴
                axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/', {
                    headers: {
                        Authorization: `Token ${token}` // 토큰을 헤더에 추가
                    }
                })
                .then(response => {
                    setFindPostData(response.data);
                    console.log('포스트를 불러왔습니다.');
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
            })
            .catch(error => {
                setLoggedIn(false);
                console.error('Invalid token:', error);
            });
        } else {
            setLoggedIn(false); // 토큰이 없다면, 로그인되지 않은 상태로 설정
        }
    }, []);

    //카테고리 필터 버튼

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category.toLowerCase()); // 선택된 카테고리 업데이트
    };

    const handleDataUpdate = (data) => {
        setFindPostData(data); // 받아온 데이터로 상태 업데이트
    };

    // 검색창

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase()); // 검색어 업데이트
    };

    // 검색어와 선택된 카테고리에 따라 데이터 필터링하는 함수
    const filteredPosts = findPostData.filter(post => {
        const matchesCategory = !selectedCategory || post.category.toLowerCase() === selectedCategory;
        const matchesSearch = !searchTerm || post.title.toLowerCase().includes(searchTerm);

        // 검색어와 카테고리 모두 일치하는 경우에만 반환
        return matchesCategory && matchesSearch;
    });

    return (
        <F.FindWrapper>
            <SearchBar setSearchTerm={handleSearch} />
            <CategoryFilter handleCategoryFilter={handleCategoryFilter} handleDataUpdate={handleDataUpdate} />
            <F.Title>
                주인을 찾아요!
                <F.NoticeTitle>
                    <span>UPDATE</span>
                    <Link to="/notice">공지 - 게시글 작성 방법 안내</Link>
                </F.NoticeTitle>
                <DateFilter />
            </F.Title>
            <F.Post_Container>
                {loggedIn ? (
                    filteredPosts.map((post) => (
                        <PostCard
                           
                            p_img={post.head_image}
                            p_id={post.id}
                            p_title={post.title}
                            p_date={post.date_select}
                            p_findPlace={post.location}
                            p_keepPlace={post.LostAndFound}
                            p_category={post.category}
                            p_content={post.content}
                            p_createtime={post.created_at}
                            p_updatetime={post.updated_at}
                            p_author={post.author}
                            p_comment={post.comment}
                        />
                    ))
                ) : (
                    <h1>Please log in to view posts</h1>
                )}
            </F.Post_Container>
        </F.FindWrapper>
    );
}

export default Find;