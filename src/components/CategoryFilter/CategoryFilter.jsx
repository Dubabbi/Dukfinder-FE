import * as CF from './CategoryFilterStyle';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryFilter({ handleCategoryFilter, handleDataUpdate }) {
    let button = ["전체", "전자기기", "지갑,카드", "악세사리", "화장품", "기타"];

    const [btnActive, setBtnActive] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('key');

        if (token) {
            axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/userinfo/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            .then(response => {
                setIsLoggedIn(true);
                console.log("로그인되었습니다.")
                
            })
            .catch(error => {
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

        const token = localStorage.getItem('key');

        if (isLoggedIn) {
            axios.get(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/category/${category}`, {
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
