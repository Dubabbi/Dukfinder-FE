import React, { useEffect, useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import * as D from "./LostDetailStyle";
import { data } from '../../postData';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LostDetailCard(props) {
    const { p_id } = useParams();
    const { post } = props;


    // const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const handleDelete = () => {
    //     deletePost(post.p_id);

    //     console.log('포스트를 삭제합니다:', post.p_id);
    //     handleClose();
    //     navigate('/lost');// 목록 페이지로 이동
    // };

    // const deletePost = (postId) => {
    //     const updatedData = data.results.filter(item => item.p_id !== postId);
    //     data.results = updatedData; // 가상의 data 객체 업데이트 (실제로는 데이터베이스 등에 반영해야 함)
    // };

    return (
        <D.CardStyle style={{ width: '65rem' }}>
            <D.YellowCardBody>
                <D.DeleteContainer>
                    <D.CardTitle>{post.title}</D.CardTitle>
                    <D.DeleteButton variant="warning" type="submit" onClick={handleShow}>삭제</D.DeleteButton>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <D.ModalTitleSize>해당 포스트를 삭제하시겠습니까?</D.ModalTitleSize>
                        </Modal.Header>
                        <Modal.Footer>
                            <D.ModalCloseButton variant="secondary" onClick={handleClose}>
                                취소
                            </D.ModalCloseButton>
                            <D.ModalButton variant="warning" onClick={handleClose}>
                                삭제하기
                            </D.ModalButton>
                        </Modal.Footer>
                    </Modal>
                </D.DeleteContainer>
                <D.SubtitleContainer className="mb-3 text-muted"><span>분실날짜:</span> {post.date_select}</D.SubtitleContainer>
                <D.SubtitleContainer className="mb-3 text-muted"><span>분실장소:</span> {post.location}</D.SubtitleContainer>
                <D.SubtitleContainer className="mb-3 text-muted"><span>상태:</span> {post.found_status}</D.SubtitleContainer>
                <D.SubtitleContainer className="mb-3 text-muted"><span>분류:</span> {post.category}</D.SubtitleContainer>
                <D.CardContent>
                    {post.content.split('\n').map((content, index) => (
                        <React.Fragment key={index}>
                            {content}
                            {index !== post.content.split('\n').length - 1 && <br />} {/* 마지막 줄에는 <br /> 추가하지 않음 */}
                        </React.Fragment>
                    ))}
                </D.CardContent>
                <D.TimeContainer className="mb-3 text-muted">{new Date(post.created_at).toLocaleDateString()}</D.TimeContainer>
            </D.YellowCardBody>
        </D.CardStyle>

    );
}

export default LostDetailCard;