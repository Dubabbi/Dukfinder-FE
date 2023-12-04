import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as N from '../Notice/NoticeStyle';
import * as U from './UploadStyle';

const VocViewWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const VocViewRow = styled.div`
  margin: 10px 0;
  display: flex;
`;

const Label = styled.label`
  margin: 10px 0;
  width: 30%;
  font-weight: bold;
`;

const Input = styled.input`
  margin: 10px 0;
  width: 70%;
`;

const Inline = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Select = styled.select`
  margin: 10px 0;
  width: 30%;
`;

const DatePickerWrapper = styled.div`
  margin: 10px 0;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  width: 100%;
`;

const ImgButton = styled.button`
  border: 0;
  padding: 10px;
  background-color: #ffd9d9;
`;

const SubmitButton = styled.button`
  border: 0;
  padding: 10px;
  background-color: #ffd9d9;
`;

const Form = styled.form`
  // Add your form styles here
`;

const FormGroup = styled.div`
  // Add your form group styles here
`;

const Section = styled.div`
  // Add your section styles here
`;

function VocForm({ onChangeTitle, onChangeLocation, onChangeCategory, onChangeContent, onSubmit }) {
  return (
    <U.Form action="#">
    <div>
        <U.FormGroup>
          <U.Label>제목(물건명)</U.Label>
          <U.Input onChange={onChangeTitle} />
        </U.FormGroup>
      </div>
      <U.Inline>
        <div>
         <U.Label>습득 장소</U.Label>
          <U.Select onChange={onChangeLocation}>
            {/* Options for location */}
            </U.Select>
        </div>
        <div>
        <U.Label>분류</U.Label>
          <U.Select onChange={onChangeCategory}>
            {/* Options for category */}
            </U.Select>
        </div>
        <div>
        <U.Label>일자</U.Label>
          <DatePickerWrapper>
            {/* DatePicker component */}
          </DatePickerWrapper>
        </div>
      </U.Inline>
      {/* Rest of the form */}
      <div>
      <U.Label>Message</U.Label>
        <Textarea onChange={onChangeContent}></Textarea>
      </div>
      <div>
        <Inline>
          <Label htmlFor="image">이미지</Label>
          <ImgButton>파일선택</ImgButton>
        </Inline>
      </div>
      <SubmitButton onClick={onSubmit}>등록</SubmitButton>
    </U.Form>
  );
}

function VocQuestion() {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [content, setContent] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts').then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/create', {
        title,
        content,
        location: selectedLocation,
        category: categoryId,
        date: selectedDate,
      });
      console.log('status:', response.status);
    } catch (error) {
      console.error('error:', error);
    }
  };
  return (
    <U.MainWrapper>
      <N.Section>
        <N.PageTitle>
          <N.TitleText>작성 페이지</N.TitleText>
        </N.PageTitle>
        <U.Wrapper>
          <U.Form action="#">
          <div>
              <U.FormGroup>
              <Label>제목(물건명)</Label>
              <Input onChange={(event) => setTitle(event.target.value)} />
              </U.FormGroup>
            </div>

        <VocForm
          onChangeTitle={(e) => setTitle(e.target.value)}
          onChangeLocation={handleLocationChange}
          onChangeCategory={handleCategoryChange}
          onChangeContent={(e) => setContent(e.target.value)}
          onSubmit={handleSubmit}
        />
        {/* Add any other components or content for the page */}
        </U.Form>
        </U.Wrapper>
      </N.Section>
    </U.MainWrapper>
  );
}

export default VocQuestion;
