// Upload.jsx
import styled from 'styled-components';
import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as N from '../Notice/NoticeStyle';
import * as U from './UploadStyle';

const Upload = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const datePickerStyles = {
    // Adjust the width and height as needed
    width: '200px', // Set the desired width
    height: '200px', // Set the desired height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
                <U.Label style={{ top: '10%' }}>제목</U.Label>
                <U.Input type="text" id="name" name="your-name" />
              </U.FormGroup>
            </div>
            <U.Inline>
              <div>
                <U.Label>장소</U.Label>
                <U.Select value={selectedLocation} onChange={handleLocationChange}>
                  <option value="" disabled hidden>장소를 선택하세요</option>
                  <option value="인사대">인사대</option>
                  <option value="자연대">자연대</option>
                </U.Select>
              </div>
              <div>
                <U.Label>분류</U.Label>
                <U.Select value={selectedLocation} onChange={handleLocationChange}>
                  <option value="" disabled hidden></option>
                  <option value="전자기기">전자기기</option>
                  <option value="지갑">지갑</option>
                </U.Select>
              </div>
              <div>
                <U.Label>일자</U.Label>
                <U.DatePickerWrapper>
                  <U.DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                    styles={{ width: '100px;'}}
                  />
                </U.DatePickerWrapper>
              </div>
            </U.Inline>
          </U.Form>
        </U.Wrapper>
        <U.Wrapper>
          <U.SecondForm>
            <div>
              <U.Label htmlFor="message">Message</U.Label>
              <U.Textarea type="text" id="message" name="your-message"></U.Textarea>
            </div>
            <div>
              <U.InlineImg>
                <U.Label htmlFor="image">이미지</U.Label>
                <U.ImgButton onClick>파일선택</U.ImgButton>
              </U.InlineImg>
            </div>
            <U.SubmitButton />
          </U.SecondForm>
        </U.Wrapper>
      </N.Section>
    </U.MainWrapper>
  );
};

export default Upload;
