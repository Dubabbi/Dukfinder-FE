// CommentList.js
import React, { Component } from 'react';
import * as C from './CommentStyle';
import * as D from '../FindDetail/FindDetailStyle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false, // show 속성 초기화
      selectedPostId: null
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (postId) => {
    this.setState({ show: true, selectedPostId: postId });
  };

  handleDelete = (commentId) => {
    this.setState({ show: true, selectedPostId: commentId });
  };


  confirmDelete = () => {
    const { selectedPostId } = this.state;
    this.props.removeComment(selectedPostId);
    this.setState({ show: false, selectedPostId: null });
  };

  renderList = () => {
    const { comments } = this.props;

    if (!comments || comments.length === 0) {
      return (<>
       <C.CommentNot>댓글이 아직 없습니다. 댓글을 남겨보세요!</C.CommentNot>
    </>)
    }

    return (
      <>
        {comments.map((comment) => (
          <C.CommentListStyle key={comment.id}>
            <C.DeleteContainer>
              <C.UserRow>
                <Col>{comment.user_id}</Col>
              </C.UserRow>

              <Row>

                <Col>

                  <C.DeleteButton
                    variant="warning"
                    type="submit"
                    onClick={() => this.handleDelete(comment.id)}
                  >
                    삭제
                  </C.DeleteButton>



                  <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                  >
                    <Modal.Header closeButton>
                      <D.ModalTitleSize>댓글이 삭제되었습니다.</D.ModalTitleSize>
                    </Modal.Header>
                    <Modal.Footer>
                      <D.ModalButton variant="warning" onClick={this.confirmDelete}>
                        완료
                      </D.ModalButton>
                    </Modal.Footer>
                  </Modal>

                </Col>

              </Row>
            </C.DeleteContainer>
            <C.ContentRow>
              <Col>
                <span>{comment.content}</span>
              </Col>
            </C.ContentRow>
            <C.DateRow>
              <Col>{new Date(comment.created_at).toLocaleDateString()}</Col>
            </C.DateRow>

          </C.CommentListStyle>
        ))}
      </>
    );
  };

  render() {
    return <>{this.renderList()}</>;
  }
}

export default CommentList;
