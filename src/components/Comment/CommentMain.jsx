import React, { Component } from 'react';
import Comment from "../Comment/Comment";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";
import axios from 'axios';

class CommentMain extends Component {
    state = {
        comments: [],
        value: '',
    };

    componentDidMount() {
        this.fetchComments(this.props.postId);
    }

    fetchComments = (postId) => {
        console.log('fetchComments 함수 호출됨');

        axios
            .get(`/find_posts/${postId}/comment/`)
            .then((response) => {
                console.log(response.data); // 데이터 확인
                this.setState({ comments: response.data });
            })
            .catch((error) => {
                console.error('Error fetching comments:', error);
            });
    };

    removeComment = (id) => {
        const updatedComments = this.state.comments.filter(comment => comment.id !== id);
        this.setState({ comments: updatedComments });
        // 댓글 삭제 API 호출을 추가할 수 있습니다.
    };

    addComment = (content) => {
        const { postId } = this.props;
        const newComment = {
            user_id: 0, // 사용자 ID
            post_id: postId, // 포스트 ID
            content: content,
            created_at: new Date().toISOString(), // 현재 날짜 및 시간
            updated_at: new Date().toISOString(),
            replys: [], // 답글 데이터 (필요한 경우 추가)
        };

        axios.post(`/find_posts/${postId}/comment/`, newComment)
            .then(response => {
                // 성공적으로 댓글이 추가되면 서버에서 응답받은 데이터로 state 업데이트
                this.setState(prevState => ({
                    comments: [...prevState.comments, response.data],
                }));
            })
            .catch(error => {
                console.error('Error adding comment:', error);
            });
    };


    render() {
        const { postId } = this.props;
        const { comments } = this.state;

        return (
            <>
                <Comment>

                    <CommentList comments={comments} removeComment={this.removeComment} postId={postId} />
                    <CommentForm addComment={this.addComment} />
                </Comment>
            </>
        )
    }
}

export default CommentMain;
