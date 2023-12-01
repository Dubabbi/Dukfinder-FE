import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import * as D from "./LostDetailStyle";
import { data } from '../../postData';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LostDetailCard(props) {
    const { p_id } = useParams();
    const post = data.results.find(post => post.p_id === p_id);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <D.CardStyle style={{ width: '65rem' }}>
            <D.YellowCardBody>
                <D.DeleteContainer>
                    <D.CardTitle>{post.p_title}</D.CardTitle>
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
                <D.SubtitleContainer className="mb-3 text-muted"><span>분실날짜:</span> {post.p_date}</D.SubtitleContainer>
                <D.SubtitleContainer className="mb-3 text-muted"><span>분실장소:</span> {post.p_findPlace}</D.SubtitleContainer>
                <D.SubtitleContainer className="mb-3 text-muted"><span>상태:</span> {post.p_status}</D.SubtitleContainer>
                <D.SubtitleContainer className="mb-3 text-muted"><span>분류:</span> {post.p_category}</D.SubtitleContainer>
                <D.CardContent>
                    {post.p_content.split('\n').map((content, index) => (
                        <React.Fragment key={index}>
                            {content}
                            {index !== post.p_content.split('\n').length - 1 && <br />} {/* 마지막 줄에는 <br /> 추가하지 않음 */}
                        </React.Fragment>
                    ))}
                </D.CardContent>
                <D.TimeContainer className="mb-3 text-muted">{new Date(post.p_time).toLocaleDateString()}</D.TimeContainer>
            </D.YellowCardBody>
        </D.CardStyle>

    );
}

export default LostDetailCard;