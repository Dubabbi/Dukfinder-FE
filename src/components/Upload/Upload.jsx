import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as N from '../Notice/NoticeStyle';
import * as U from './UploadStyle'; 
import styled from 'styled-components';

const Upload = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // 이벤트 핸들러들
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleLocationChange = (e) => setSelectedLocation(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  // 등록 버튼 클릭 시 서버로 데이터 전송
  const handleSubmit = async () => {
    const token = localStorage.getItem('key');

    if (token) {
      try {
        // Get the corresponding location string
        const selectedLocationString = locations.find(loc => loc.id === selectedLocation)?.name || '';
        // Get the corresponding category string
        const selectedCategoryString = categories.find(cat => cat.id === selectedCategory)?.name || '';

        const response = await axios.post(
          'https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/create',
          {
            title: title,
            content: content,
            location: selectedLocationString,
            category: selectedCategoryString,
            date: selectedDate,
          },
          {
            headers: {
              Authorization: `Token ${token}`
            },
          }
        );

        console.log('글 작성 성공:', response);
        // 성공적으로 등록 후 리디렉션 또는 다른 동작 수행
      } catch (error) {
        console.error('글 작성 실패:', error);
        // 에러 처리, 메시지 표시 또는 다른 동작 수행
      }
    } else {
      console.log('토큰이 없습니다.');
      navigate('/');
    }
  };


  // 페이지 로딩 시 필요한 데이터 초기화
  useEffect(() => {
    const token = localStorage.getItem('key');

    if (token) {
      // 장소와 분류 카테고리 목록 가져오기
      axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/category/location', {
        headers: { Authorization: `Token ${token}` }
      })
        .then(response => setLocations(response.data))
        .catch(error => console.error('Error fetching locations:', error));

      axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/category/<str:category>', {
        headers: { Authorization: `Token ${token}` }
      })
        .then(response => setCategories(response.data))
        .catch(error => console.error('Error fetching categories:', error));
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <U.MainWrapper>
      <N.Section>
        <N.PageTitle>
          <N.TitleText>작성 페이지</N.TitleText>
        </N.PageTitle>
        {/* 제목, 장소, 분류, 일자를 입력하는 섹션 */}
        <U.Wrapper>
          <U.Form>
            <div>
              <U.FormGroup>
                <U.Label style={{ top: '10%' }}>제목</U.Label>
                <U.Input value={title} onChange={handleTitleChange} />
              </U.FormGroup>
            </div>
            <U.Inline>
              <div>
                <U.Label>장소</U.Label>
                <U.Select value={selectedLocation} onChange={handleLocationChange}>
                  <option value="" disabled hidden>장소를 선택하세요</option>
                    <option key={location.id} value={location.name}>정문·대학본부</option>
                    <option key={location.id} value={location.name}>후문</option>
                    <option key={location.id} value={location.name}>대강의동</option>
                    <option key={location.id} value={location.name}>차마리사기념관</option>
                    <option key={location.id} value={location.name}>학생회관</option>
                    <option key={location.id} value={location.name}>도서관·대학원</option>
                    <option key={location.id} value={location.name}>예술관</option>
                    <option key={location.id} value={location.name}>자연관</option>
                    <option key={location.id} value={location.name}>약학관</option>
                    <option key={location.id} value={location.name}>기타</option>
                </U.Select>
              </div>
              <div>
                <U.Label>분류</U.Label>
                <U.Select value={selectedCategory} onChange={handleCategoryChange}>
                  <option value="" disabled hidden>분류를 선택하세요</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </U.Select>
              </div>
              <div>
                <U.Label>일자</U.Label>
                <U.DatePickerWrapper>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                    styles={{ width: '100px;' }}
                  />
                </U.DatePickerWrapper>
              </div>
            </U.Inline>
          </U.Form>
        </U.Wrapper>
        {/* 메시지와 이미지 업로드를 입력하는 섹션 */}
        <U.Wrapper>
          <U.SecondForm onSubmit={handleSubmit}>
            <div>
              <U.Label>message</U.Label>
              <U.Textarea value={content} onChange={handleContentChange}></U.Textarea>
            </div>
            <div>
              <U.InlineImg>
                <U.Label htmlFor="image">이미지</U.Label>
                <U.ImgButton onClick={() => console.log('파일 선택')}>
                  파일선택
                </U.ImgButton>
              </U.InlineImg>
            </div>
            <U.SubmitButton type="submit" value="저장"/>
          </U.SecondForm>
        </U.Wrapper>
      </N.Section>
    </U.MainWrapper>
  );
};

export default Upload;
