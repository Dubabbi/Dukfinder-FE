import React, {Component} from 'react'
import * as C from "./CommentStyle";

class Comment extends Component {
   render() {
      return (
         <ul className = 'comment'>
           {this.props.children}
         </ul>
      )
   }
}

export default Comment