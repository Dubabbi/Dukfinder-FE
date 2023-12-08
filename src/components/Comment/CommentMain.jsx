import React, { Component } from 'react';
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";
import axios from 'axios';


class CommentMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],// 댓글 데이터로 초기 상태 설정
            loggedIn: false // 로그인 여부 상태
        };
    }

    componentDidMount() {
        const { postId, path } = this.props;
        const token = localStorage.getItem('key');

        if (token) {
            this.setState({ loggedIn: true });
            this.fetchComments(postId, token, path);
            this.removeComment(postId, path);
        }
    }
    removeComment = async (id) => {
        const { postId, path } = this.props;
        const token = localStorage.getItem('key');
        if (token) {
            try {
                await axios.delete(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/${path}/${postId}/comment/${id}/`, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
                
                const updatedComments = this.state.comments.filter(comment => comment.id !== id);
                this.setState({ comments: updatedComments });
                console.log('댓글이 삭제되었습니다.');
            } catch (error) {
                console.error('Error removing comment:', error);
            }
        } else {
            console.log('토큰이 없습니다. 로그인이 필요합니다.');
            // 토큰이 없는 경우 처리
        }
    };

    fetchComments = (postId, token, path) => {
        axios.get(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/${path}/${postId}/comment/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then(response => {
            const comments = Array.isArray(response.data) ? response.data : [];
            this.setState({ comments });
            console.log('댓글을 불러왔습니다.');
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
        });
    };

   

  

    addComment = async (content) => {
        const { postId } = this.props;
        const { path } = this.props;
        const token = localStorage.getItem('key');
    
        if (token) {
            try {
                const newComment = {
                    post_id: postId, // 포스트 ID
                    content: content,
                    created_at: new Date().toISOString(), // 현재 날짜 및 시간
                };
    
                const response = await axios.post(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/${path}/${postId}/comment/`, newComment, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
    
                // comments 상태 업데이트
                const updatedComments = [...this.state.comments, response.data];
                this.setState({ comments: updatedComments });
                console.log('Updated Comments:', this.state.comments);
            } catch (error) {
                console.error('Error adding comment:', error);
            }
        } else {
            console.log('토큰이 없습니다. 로그인이 필요합니다.');
            // 토큰이 없는 경우 처리
        }
    };

    render() {

        const { postId } = this.props;
        const { comments } = this.state;


        return (
            <>
                {
                    <>
                        <CommentList comments={comments} removeComment={this.removeComment} postId={postId} />
                        <CommentForm addComment={this.addComment} />
                    </>
                }
            </>
        )
    }
}

export default CommentMain;
