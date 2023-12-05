import React, { Component } from 'react';
import Comment from "../Comment/Comment";
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
        const { postId } = this.props;
        const token = localStorage.getItem('key'); // 로컬 스토리지에서 토큰 가져오기
    
        if (token) {
          this.setState({ loggedIn: true });
          this.fetchComments(postId, token); // 토큰을 이용하여 댓글 가져오기
        }
      }
    
      
      fetchComments = (postId, token) => {
        axios.get(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/${postId}/comment/`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(response => {
          const comments = Array.isArray(response.data.comments) ? response.data.comments.filter(comment => comment.post_id === postId) : [];
          this.setState({ comments });
          console.log('댓글을 불러왔습니다.');
          console.log(comments);
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
      };
    

    removeComment = (id) => {
        const updatedComments = this.state.comments.filter(comment => comment.id !== id);
        this.setState({ comments: updatedComments });
        // 댓글 삭제 API 호출을 추가할 수 있습니다.
    };

    addComment = async (content) => {
    const { postId, loggedIn } = this.props;

    if (loggedIn) {
      try {
        const newComment = {
          user_id: 1, // 사용자 ID
          post_id: postId, // 포스트 ID
          content: content,
          created_at: new Date().toISOString(), // 현재 날짜 및 시간
          updated_at: new Date().toISOString(),
          replys: [], // 답글 데이터 (필요한 경우 추가)
        };
        const response = await axios.post(`https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/${postId}/comment/`, newComment);

        // comments 상태 업데이트
        this.setState(prevState => ({
          comments: [...prevState.comments, response.data],
        }));
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    } else {
      console.log('로그인이 필요합니다.');
      // 로그인되지 않은 경우 처리
    }
  };

    render() {
        
          const { postId, loggedIn } = this.props;
        const { comments } = this.state;
        

        return (
            <>
                {loggedIn ? (
                    <>
                        <CommentList  comments={comments} removeComment={this.removeComment} postId={postId} />
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
