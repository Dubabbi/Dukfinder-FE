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
    this.setState({ show: true, selectedPostId: postId }); // postId가 현재 게시물의 ID라고 가정합니다.
  };

   handleDelete = () => {
      const { selectedPostId } = this.state;
      this.props.removeComment(selectedPostId);
      this.setState({ show: false, selectedPostId: null });
   };

   componentDidUpdate(prevProps) {
    if (this.props.postId !== prevProps.postId) {
       this.props.fetchComments(this.props.postId);
    }
 }

   renderList = () => {
    const { comments } = this.props;

    // if (comments.length === 0) {
    //   return <div>No comments available.</div>; // 댓글이 없을 때의 렌더링
    // }
  
      return (
        comments.map((comment) => (
        <C.CommentListStyle key={comment.id}>
          <C.DeleteContainer>
            <Row>
              <Col>{comment.user_id}</Col>
            </Row>
            <Row>
              <Col>
                <C.DeleteButton variant="warning" type="submit" onClick={() => this.handleShow(comment.user_id)}>삭제</C.DeleteButton>
                <Modal show={this.state.show && this.state.selectedPostId === comment.user_id} onHide={this.handleClose}>
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
              <Col><span>{comment.content}</span></Col>
            </Row>
            <Row>
              <Col>{new Date(comment.created_at).toLocaleDateString()}</Col>
            </Row>
          </C.DeleteContainer>
        </C.CommentListStyle>
      ))
        )
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