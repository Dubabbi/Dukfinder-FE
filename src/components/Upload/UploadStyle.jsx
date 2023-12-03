// UploadStyle.jsx
import styled from 'styled-components';

export const MainWrapper = styled.div`
    color: black;
    max-width: 1200px;
    margin: 0px auto;
`
export const Wrapper = styled.div`
  width: 100%;
  padding: 0 1%;
`;


export const Form = styled.form`
  max-width: 100%;
  margin-top: 7%;
`;

export const SecondForm = styled.form`
  margin-top: 20px;
  max-width: 100%;
`;


export const FormGroup = styled.div`
  margin-bottom: 14px;
  max-width: 100%;
`;

export const Inline = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  div{
    display: inline-block;
  }
`;


export const InlineImg = styled.div`
  display: flex;
  width: 100%;
  div{
    display: inline-block;
  }
`;

export const Label = styled.label`
  font-size: 2rem;
  margin-top: 20px;
  display: block;
`;

export const Input = styled.input`
  background-color: #EEEEEE;
  border: 1px #ddd solid;
  height: 40px;
  border-radius: 5px;
  font-size: 2rem;
  width: 100%;
  max-width: 100%;
  font-family: inherit;
`;

export const Select = styled.select`
  background-color: #EEEEEE;
  border: 1px #ddd solid;
  height: 40px;
  border-radius: 5px;
  font-size: 2rem;
  font-family: inherit;
  width: 300px;
`;

export const Textarea = styled.textarea`
  background-color: #EEEEEE;
  margin-top: 20px;
  border: 1px #ddd solid;
  border-radius: 5px;
  padding: 10px;
  font-size: 2rem;
  width: 100%;
  height: 200px;
  font-family: inherit;
`;

export const SubmitButton = styled.input.attrs({ type: 'submit', value: '저장' })`
  border: none;
  cursor: pointer;
  line-height: 1;
  font-size: 20px;
  background: #FFE665;
  width: 20%;
  margin-left: 40%;
  color: #0d0d0d;
  border-radius: 5px;
  font-weight: bold;
  padding: 18px 32px;
  &:hover {
    background: #151515ae;
    border-radius: 5px;
    color: #eee;
  }
`;

export const ImgButton = styled.button`
border: none;
cursor: pointer;
font-size: 1.5rem;
background: rgba(19, 19, 19, 0.334);
color: #fff;
border-radius: 10px;
padding: 10px 20px;
margin-left: 20px;
margin-top: 15px;

&:hover {
  background: #151515ae;
  border-radius: 10px;
}
`;
