import React, { Component } from 'react';
import Comment from "../Comment/Comment";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";
import axios from 'axios';


class CommentMain extends Component {

    state = {
        comments: [],
        value: '',
        loggedIn: false, // 로그인 상태를 추가합니다.
    };

    componentDidMount() {
        this.checkLoginStatus();
    }

    checkLoginStatus = () => {
        const token = localStorage.getItem('key');

        if (token) {
            // 로그인 상태를 확인합니다.
            axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/userinfo/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
                .then(response => {
                    // 로그인 상태 변경에 따라 댓글을 가져옵니다.
                    this.setState({ loggedIn: true }, () => {
                        this.fetchComments(this.props.postId);
                    });
                })
                .catch(error => {
                    console.error('Invalid token:', error);
                    this.setState({ loggedIn: false });
                });
        } else {
            this.setState({ loggedIn: false });
        }
    };


    fetchComments = (postId) => {
        axios.get(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/${postId}/comment/`)
            .then((response) => {
                const comments = Array.isArray(response.data.comments) ? response.data.comments : [];
                this.setState({ comments });
                console.log(response.data);
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
        const { postId, loggedIn } = this.props;
    
        if (loggedIn) {
            const newComment = {
                user_id: 1, // 사용자 ID
                post_id: postId, // 포스트 ID
                content: content,
                created_at: new Date().toISOString(), // 현재 날짜 및 시간
                updated_at: new Date().toISOString(),
                replys: [], // 답글 데이터 (필요한 경우 추가)
            };
    
            axios.post(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/${postId}/comment/`, newComment)
                .then(response => {
                    // 성공적으로 댓글이 추가되면 서버에서 응답받은 데이터로 state 업데이트
                    this.setState(prevState => ({
                        comments: [...prevState.comments, response.data],
                    }));
                })
                .catch(error => {
                    console.error('Error adding comment:', error);
                });
        } else {
            // 로그인되지 않은 경우, 여기에 처리할 내용을 추가할 수 있습니다.
            console.log('로그인이 필요합니다.');
            // 예를 들어, 사용자에게 로그인을 유도하는 모달창을 띄우거나 리디렉션을 할 수 있습니다.
        }
    };
    

render() {
    const { postId, comments, loggedIn } = this.props;
    return (
        <>
            {loggedIn ? ( // 로그인 상태를 확인하여 조건부로 컴포넌트를 렌더링합니다.
                <>
                    <CommentList comments={comments} fetchComments={this.fetchComments} removeComment={this.removeComment} postId={postId} />
                    <CommentForm addComment={this.addComment} />
                </>
            ) : (
                <h1>Please log in to view comments</h1>
            )}
        </>
    )
}
}

export default CommentMain;
