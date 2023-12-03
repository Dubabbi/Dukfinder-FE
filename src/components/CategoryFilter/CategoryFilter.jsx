import * as CF from './CategoryFilterStyle';
import React, { useState } from 'react';

function CategoryFilter({ handleCategoryFilter }) {
    let button = ["전체", "전자기기", "지갑/카드", "악세사리", "화장품", "기타"];

    const [btnActive, setBtnActive] = useState("");

    const toggleActive = (e) => {
        const category = e.target.value === "0" ? "" : button[e.target.value];
        setBtnActive(e.target.value);
        handleCategoryFilter(category); // 선택된 카테고리를 상위 컴포넌트로 전달
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
