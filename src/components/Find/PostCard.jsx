import React, { useState } from 'react';
import * as F from './FindStyle';
import { Link } from 'react-router-dom';


function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}


function PostCard({ p_id, p_img, p_title, p_date, p_findPlace, p_keepPlace, p_category, p_content, p_createtime}) {
    const maxLength = 50; // 최대 글자수
    const truncatedContent = truncateText(p_content, maxLength);

    

    return (
            
                <F.CardStyle style={{ width: '28rem' }}>
                    <F.CardImgStyle variant="top" src={p_img} />
                    <F.YellowCardBody>
                    
                        <F.CardTitle>{p_title}</F.CardTitle>
                            <F.SubtitleContainer className="mb-3 text-muted">습득날짜: {p_date}</F.SubtitleContainer>
                            <F.SubtitleContainer className="mb-3 text-muted">습득장소: {p_findPlace}</F.SubtitleContainer>
                            <F.SubtitleContainer className="mb-3 text-muted">보관장소: {p_keepPlace}</F.SubtitleContainer>                        
                            <F.SubtitleContainer className="mb-3 text-muted">분류: {p_category}</F.SubtitleContainer>                        
                        <F.TruncatedContent>
                            {truncatedContent}
                        </F.TruncatedContent>
                        <F.LinkTimeGroup>
                        <F.TimeContainer className="mb-3 text-muted">{new Date(p_createtime).toLocaleDateString()}</F.TimeContainer>
                        <F.LinkStyle className="ml-auto"  as={Link} to={`./${p_id}`}>
                            자세히{'>>'}
                        </F.LinkStyle>
                        </F.LinkTimeGroup>
                    </F.YellowCardBody>
                </F.CardStyle>
            
    );
  }
  
  export default PostCard;