// UploadStyle.jsx
import styled from 'styled-components';

export const CustomTableRow = styled.tr`
  height: 30px;
  width: 100%;
  max-width: 100%;
`;

export const CustomTableCell = styled.td`
  height: 30px; /* 원하는 높이를 지정하세요 */
  max-width: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1%;
  table{
    max-width: 100%
    width: 100%;
  }
`;


export const Form = styled.form`
  margin-top: 10%;
  width: 100%
  max-width: 100%
  justify content: space-between;
  align-items: center;
  table {
    max-width: 100%;
    width: 100%;  
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 14px;
  max-width: 100%;
  justify content: space-between;
  align-items: center;
`;

export const InlineFormGroup = styled.div`
  margin-bottom: 14px;
  max-width: 100%;
  justify content: space-between;
  // align-items: center;
  display: inline-block;
`;

export const Inline = styled.div`
  display: inline;
`;

export const Label = styled.label`
  font-size: 2rem;
  margin-bottom: 6px; 
  margin-top: 1%;
  display: block;
`;

export const Input = styled.input`
  background-color: #EEEEEE;
  border: 1px #ddd solid;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 2rem;
  width: 100%;
  max-width: 100%;
  font-family: inherit;
`;

export const Textarea = styled.textarea`
  background-color: #EEEEEE;
  border: 1px #ddd solid;
  border-radius: 5px;
  padding: 10px;
  font-size: 2rem;
  width: 100%;
  max-width: 100%;
  height: 100px;
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
line-height: 1;
font-size: 1.375rem;
background: rgba(19, 19, 19, 0.334);
color: #fff;
border-radius: 10px;
padding: 10px 20px;

&:hover {
  background: #151515ae;
  border-radius: 10px;
}
`;
