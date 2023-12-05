// CommentList.js
import React, { Component } from 'react';
import * as C from './CommentStyle';
import * as D from '../FindDetail/FindDetailStyle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

class CommentList extends Component {
  

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
    const { comments } = this.props;

    if (!comments || comments.length === 0) {
      return <div>No comments available for this post.</div>;
    }

    return (
      <ul>
        {comments.map((comment) => (
          <C.CommentListStyle key={comment.id}>
            <C.DeleteContainer>
              <Row>
                <Col>{comment.user_id}</Col>
              </Row>
              <Row>
                <Col>
                  <C.DeleteButton
                    variant="warning"
                    type="submit"
                    onClick={() => this.handleShow(comment.user_id)}
                  >
                    삭제
                  </C.DeleteButton>
                  <Modal
                    show={this.state.show && this.state.selectedPostId === comment.user_id}
                    onHide={this.handleClose}
                  >
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
                <Col>
                  <span>{comment.content}</span>
                </Col>
              </Row>
              <Row>
                <Col>{new Date(comment.created_at).toLocaleDateString()}</Col>
              </Row>
            </C.DeleteContainer>
          </C.CommentListStyle>
        ))}
      </ul>
    );
  };

  render() {
    return <>{this.renderList()}</>;
  }
}

export default CommentList;
