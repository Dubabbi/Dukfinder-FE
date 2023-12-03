import React, {Component} from 'react';
import Comment from "../Comment/Comment";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";

class CommentMain extends Component {
    state = {
        value: '',
        list: [
            { userid: 'qwerty1', content: 'hello111111', date: new Date().getTime() },
            { userid: 'qwerty2', content: 'hello222222', date: new Date().getTime() },
            { userid: 'qwerty3', content: 'hello333333', date: new Date().getTime() }
            // 이런 댓글 데이터를 가져왔다고 가정..
        ]
    }

    addList = (content) => {
        this.setState({
            list: [
                ...this.state.list,
                {userid:'ash999898', content, date:new Date().getTime()}
            ]
        })
    }
       
    render() {
       
       return(
          <>
             <Comment>
                
                <CommentList list={this.state.list}/>
                <CommentForm addList={ this.addList }/>
             </Comment>
          </>
       )
    }
    }

 export default CommentMain;