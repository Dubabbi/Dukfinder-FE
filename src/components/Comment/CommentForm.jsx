import * as C from "./CommentStyle";
import React, {Component} from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CommentForm extends Component  {

   state = {
      value: ''
   };

   handleChange = e => {
      const value = e.target.value
      this.setState({
         value,
      });

   };

   handleSubmit = e => {
      e.preventDefault()
      if (this.state.value.trim() === '') {
         return; // 빈 값은 추가하지 않음
       }
      this.props.addList(this.state.value)
      this.setState({
         value:''
      });
   };

   render() {
      return (
         <C.Search_Container onSubmit={this.handleSubmit}>
            <C.StyledForm>
                  <Form.Control type="text"
                     placeholder='댓글을 작성하세요' size="lg" onChange={this.handleChange} value={this.state.value}/>
                  <C.StyledButton type="submit" variant="none"><FaPaperPlane size={20} /></C.StyledButton>
            </C.StyledForm>
         </C.Search_Container>
      )
   }
}

export default CommentForm