import * as D from "./FindDetailStyle";
import { data } from '../../postData';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FindDetailCard from './FindDetailCard';
import Airpod from '../../Img/airpod.jpg';
import Image from 'react-bootstrap/Image';
import CommentMain from "../Comment/CommentMain";

import { Link } from 'react-router-dom';

function FindDetail(props) {
    const { p_id } = useParams();
    const post = data.results.find(post => post.p_id === p_id);
    
    
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
                    <D.ImageSize src={Airpod} fluid smallSize/> 
                    <FindDetailCard />
                </D.DetailContainer>
                <D.line></D.line>
                <CommentMain />
                <D.ButtonContainer>
                    <D.ButtonStyle variant="warning" type="submit" as={Link} to={`../find`}>목록으로</D.ButtonStyle>
                </D.ButtonContainer>
            </D.FindDetailWrapper>
        </>
    );
}

export default FindDetail;