import * as CF from './CategoryFilterStyle';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryFilter({ handleCategoryFilter, handleDataUpdate }) {
    let button = ["전체", "전자기기", "지갑/카드", "악세사리", "화장품", "기타"];

    const [btnActive, setBtnActive] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 여기서 토큰을 가져오고, 로그인 상태를 확인하는 로직을 구현해야 합니다.
        const token = localStorage.getItem('authToken');

        if (token) {
            // 서버로 토큰을 보내어 유효성을 검사하고 로그인 상태를 판단할 수 있는 엔드포인트를 호출합니다.
            axios.post('http://127.0.0.1:8000/auth/check', { token })
                .then(response => {
                    // 유효한 토큰인 경우
                    setIsLoggedIn(true);
                })
                .catch(error => {
                    // 토큰이 유효하지 않은 경우
                    setIsLoggedIn(false);
                    console.error('Invalid token:', error);
                });
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const toggleActive = (e) => {
        const category = e.target.value === "0" ? "" : button[e.target.value];
        setBtnActive(e.target.value);
        handleCategoryFilter(category);

        const token = localStorage.getItem('authToken');

        if (isLoggedIn) {
            axios.get(`http://127.0.0.1:8000/find_posts/category/${category}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    handleDataUpdate(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        } else {
            // 로그인 페이지로 리디렉션 또는 인증 프로세스 구현 로직
        }
    };

    return (
        <CF.ButtonGroup>
            {button.map((item, idx) => (
                <CF.FilterButton
                    key={idx}
                    value={idx}
                    className={`btn${idx == btnActive ? " active" : ""}`}
                    onClick={toggleActive}
                >
                    {item}
                </CF.FilterButton>
            ))}
        </CF.ButtonGroup>
    )
}

export default CategoryFilter;
