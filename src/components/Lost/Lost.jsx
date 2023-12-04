import * as L from './LostStyle';
import React, { useState, useEffect } from 'react';
import LostPostCard from './LostPostCard';
import { data } from '../../postData';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import DateFilter from '../DateFilter/DateFilter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import axios from 'axios';

function Lost() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const [loggedIn, setLoggedIn] = useState(false); // 로그인 여부 상태
    const [lostPostData, setLostPostData] = useState([]);

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
                    axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/lost_posts/', {
                        headers: {
                            Authorization: `Token ${token}` // 토큰을 헤더에 추가
                        }
                    })
                        .then(response => {
                            setLostPostData(response.data);
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

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category.toLowerCase()); // 선택된 카테고리 업데이트
    };

    const handleDataUpdate = (data) => {
        setLostPostData(data); // 받아온 데이터로 상태 업데이트
    };

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase()); // 검색어 업데이트
    };

    // 검색어와 선택된 카테고리에 따라 데이터 필터링하는 함수
    const filteredPosts = lostPostData.filter(post => {
        const matchesCategory = !selectedCategory || post.category.toLowerCase() === selectedCategory;
        const matchesSearch = !searchTerm || post.title.toLowerCase().includes(searchTerm);

        // 검색어와 카테고리 모두 일치하는 경우에만 반환
        return matchesCategory && matchesSearch;
    });


    return (
        <>
            <L.LostWrapper>
                <SearchBar setSearchTerm={handleSearch} />
                <CategoryFilter handleCategoryFilter={handleCategoryFilter} handleDataUpdate={handleDataUpdate} />
                <L.Title>잃어버렸어요!
                    <L.NoticeTitle>
                        <span>UPDATE</span>
                        <Link to="/notice">공지 - 게시글 작성 방법 안내</Link>
                    </L.NoticeTitle>
                    <DateFilter />
                </L.Title>


                <L.Post_Container>
                    {loggedIn ? (
                        filteredPosts.map((post) => (

                            <LostPostCard
                                p_img={post.head_image}
                                p_id={post.id}
                                p_title={post.title}
                                p_date={post.date_select}
                                p_status={post.found_status}
                                p_lostPlace={post.location}
                                p_category={post.category}
                                p_content={post.content}
                                p_createtime={post.created_at}
                                p_updatetime={post.updated_at}
                                p_author={post.author}
                                p_comment={post.comments}
                            />
                        ))
                    ) : (
                        <h1>Please log in to view posts</h1>
                    )}



                </L.Post_Container>
            </L.LostWrapper>
        </>
    );
}

export default Lost;