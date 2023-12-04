import React, { useState } from 'react';
import * as L from './LostStyle';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}


function LostPostCard({ p_id, p_img, p_title, p_date, p_findPlace, p_category, p_status, p_content, p_time }) {
    const maxLength = 50; // 최대 글자수

    const truncatedContent = truncateText(p_content, maxLength);

    
    return (
            
                <L.CardStyle style={{ width: '28rem' }}>
                    <L.CardImgStyle variant="top" src={p_img} />
                    <L.YellowCardBody>
                    
                        <L.CardTitle>{p_title}</L.CardTitle>
                        
                            <L.SubtitleContainer className="mb-3 text-muted">분실날짜: {p_date}</L.SubtitleContainer>
                            <L.SubtitleContainer className="mb-3 text-muted">분실장소: {p_findPlace}</L.SubtitleContainer>
                            <L.SubtitleContainer className="mb-3 text-muted">종류: {p_category}</L.SubtitleContainer>
                            <L.SubtitleContainer className="mb-3 text-muted">{p_status}</L.SubtitleContainer>
                        
                        <L.TruncatedContent>
                            {truncatedContent}
                        </L.TruncatedContent>
                        <L.LinkTimeGroup>
                        <L.TimeContainer className="mb-3 text-muted">{new Date(p_time).toLocaleDateString()}</L.TimeContainer>
                        <L.LinkStyle className="ml-auto" as={Link} to={`./${p_id}`}>
                            자세히{'>>'}
                        </L.LinkStyle>
                        </L.LinkTimeGroup>
                    </L.YellowCardBody>
                </L.CardStyle>
            
    );
  }
  
  export default LostPostCard;