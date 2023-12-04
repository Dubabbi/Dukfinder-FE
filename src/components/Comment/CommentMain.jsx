import React, {Component} from 'react';
import Comment from "../Comment/Comment";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";

class CommentMain extends Component {
    state = {
        value: '',
        list: [
            { id: 1, userid: 'qwerty1', content: 'hello111111', date: new Date().getTime() },
            { id: 2, userid: 'qwerty2', content: 'hello222222', date: new Date().getTime() },
            { id: 3, userid: 'qwerty3', content: 'hello333333', date: new Date().getTime() }
            // 이런 댓글 데이터를 가져왔다고 가정..
        ]
    }

    removeComment = id => {
        const updatedList = this.state.list.filter(comment => comment.id !== id);
        this.setState({ list: updatedList });
    }

    addList = (content) => {
        const newComment = {
            id: this.state.list.length + 1,
            userid: 'ash999898',
            content,
            date: new Date().getTime()
        };
        this.setState(prevState => ({
            list: [...prevState.list, newComment]
        }));
    }
       
    render() {
        const { postId } = this.props;
        
       return(
          <>
             <Comment>
                
                <CommentList list={this.state.list} removeComment={this.removeComment}/>
                <CommentForm addList={ this.addList }/>
             </Comment>
          </>
       )
    }
    }

 export default CommentMain;