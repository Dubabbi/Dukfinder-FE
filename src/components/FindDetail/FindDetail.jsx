import * as D from "./FindDetailStyle";
import { data } from '../../postData';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FindDetailCard from './FindDetailCard';
import CommentMain from "../Comment/CommentMain";
import axios from 'axios';
import { Link } from 'react-router-dom';

function FindDetail(props) {
    const { p_id } = useParams();
    // const post = data.results.find(post => post.p_id === p_id);
    const [post, setPost] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fetchData = async (token) => {
        try {
            const response = await axios.get(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/${p_id}/`, {
                headers: {
                    Authorization: `Bearer ${token}` // 여기에 인증 토큰을 넣어주세요
                    // 만약 API가 다른 인증 방식을 요구한다면 해당 방식으로 헤더를 설정해야 합니다
                }
            });
            setPost(response.data); // 장고 API에서 받은 데이터를 상태로 설정
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true); // 토큰이 있으면 로그인된 상태로 설정
            fetchData(token);
        }
    }, [p_id]);

   

    if (!post) {
        return <div>Loading...</div>; // 데이터가 로딩 중일 때 표시할 내용
    }

    if (!isLoggedIn) {
        return <Redirect to="../login" />; // 로그인되지 않았다면 로그인 페이지로 리다이렉트
    }
    return (
        <>
            <D.FindDetailWrapper smallSize>

                <D.Title>습득물 상세정보</D.Title>
                <D.PathContainer>
                    <D.PathItem href="#">Home</D.PathItem>
                    <D.PathItem href="../Find">
                        주인을 찾아요!
                    </D.PathItem>
                    <D.PathItem active>습득물 상세정보</D.PathItem>
                </D.PathContainer>

                <D.DetailContainer>
                    <D.ImageSize src={post.head_image} fluid smallSize />
                    <FindDetailCard post={post} />
                </D.DetailContainer>
                <D.line></D.line>
                <CommentMain postId={p_id} />
                <D.ButtonContainer>
                    <D.ButtonStyle variant="warning" type="submit" as={Link} to={`../find`}>목록으로</D.ButtonStyle>
                </D.ButtonContainer>
            </D.FindDetailWrapper>
        </>
    );
}

export default FindDetail;