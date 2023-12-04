import * as D from "./LostDetailStyle";
import { data } from '../../postData';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LostDetailCard from './LostDetailCard';
import Image from 'react-bootstrap/Image';
import CommentMain from "../Comment/CommentMain";


function LostDetail(props) {
    const { p_id } = useParams();
    const post = data.results.find(post => post.p_id === p_id);
   
    return (
        <>  
            <D.FindDetailWrapper smallSize>

                <D.Title>분실물 상세정보</D.Title>
                <D.PathContainer>
                    <D.PathItem href="#">Home</D.PathItem>
                    <D.PathItem href="../Lost">
                        잃어버렸어요!
                    </D.PathItem>
                    <D.PathItem active>분실물 상세정보</D.PathItem>
                </D.PathContainer>

                <D.DetailContainer>
                    <D.ImageSize src={post.p_img} fluid smallSize/> 
                    <LostDetailCard post={post}/>
                </D.DetailContainer>
                <D.line></D.line>
                <CommentMain postId={p_id}/>
                <D.ButtonContainer>
                    <D.ButtonStyle variant="warning" type="submit" as={Link} to={`../find`}>목록으로</D.ButtonStyle>
                </D.ButtonContainer>
            </D.FindDetailWrapper>
        </>
    );
}

export default LostDetail;