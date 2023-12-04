import React, { Component } from 'react'
import * as C from "./CommentStyle";
import * as D from "../FindDetail/FindDetailStyle";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import CommentMain from './CommentMain';

class CommentList extends Component {

   constructor(props) {
      super(props);
      this.state = {
         show: false,
         selectedPostId: null // to store the selected post ID for deletion
      };
   }

   handleClose = () => {
      this.setState({ show: false });
   };

   handleShow = (postId) => {
      this.setState({ show: true, selectedPostId: postId });
   };

   handleDelete = () => {
      const { selectedPostId } = this.state;
      this.props.removeComment(selectedPostId);
      this.setState({ show: false, selectedPostId: null });
   };

   renderList = () => {
      const { postId, comments } = this.props;
      const postComments = comments.filter((comment) => comment.post_id === postId);
  
      return postComments.map((v, k) => (
        <C.CommentListStyle key={v.user_id}>
          <C.DeleteContainer>
            <Row>
              <Col>{v.user_id}</Col>
            </Row>
            <Row>
              <Col>
                <C.DeleteButton variant="warning" type="submit" onClick={() => this.handleShow(v.user_id)}>삭제</C.DeleteButton>
                <Modal show={this.state.show && this.state.selectedPostId === v.user_id} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <D.ModalTitleSize>댓글이 삭제되었습니다.</D.ModalTitleSize>
                  </Modal.Header>
                  <Modal.Footer>
                    <D.ModalButton variant="warning" onClick={this.handleDelete}>
                      완료
                    </D.ModalButton>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
            <Row>
              <Col><span>{v.content}</span></Col>
            </Row>
            <Row>
              <Col>{new Date(v.created_at).toLocaleDateString()}</Col>
            </Row>
          </C.DeleteContainer>
        </C.CommentListStyle>
      ));
    };
  

   render() {
      return (
         <ul>
           {this.renderList()}{/* 이 부분을 수정 */}
       </ul>
      )
   }
}

export default CommentList