import * as U from './UploadStyle';
import * as N from '../Notice/NoticeStyle';
import DatePicker from 'react-datepicker';
import './Upload.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FiCalendar } from 'react-icons/fi';

const placesList = [
  "정문·대학본부", "후문", "인문사회관", "대강의동", "차마리사기념관",
  "학생회관", "도서관·대학원", "예술관", "자연관", "약학관", "기타"
];

const categoriesList = [
  "전자기기", "지갑,카드", "악세사리", "화장품", "기타"
];

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div className='input-group'>
    <input type='text' className='form-control' value={value} onClick={onClick} readOnly ref={ref} />
    <U.Inline>
      <div className='input-group-append'>
        <span className='input-group-text'>
          <FaCalendarAlt />
        </span>
      </div>
    </U.Inline>
  </div>
));

const PostCreationPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  // const [loggedIn, setLoggedIn] = useState(false);
  const [findPostData, setFindPostData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = async () => {

    const token = localStorage.getItem('key');

    if (token) {
      try {

        const newPost = {
          title: title,
          content: content,
          date_select: selectedDate,
          category: selectedCategory,
          LostAndFound: null, // 해당 필드는 공란으로 처리
          location: selectedPlace
        };

        const response = await axios.post(
          'https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/create/',
          newPost,
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        );

        // 요청 성공 시 실행되는 로직 (예: 페이지 이동 등)
        console.log('포스트가 등록되었습니다.', response.data);
        navigate('../find');

        console.log(response.data);


      } catch (error) {
        // 요청 실패 시 실행되는 로직
        console.error('포스트 등록 실패:', error);
      }
    } else {
      console.log('토큰이 없습니다. 로그인이 필요합니다.');
      // 토큰이 없는 경우 처리
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };


  return (
    <U.MainWrapper>
      <N.Section>
        <N.PageTitle>
          <N.TitleText>습득물 작성 페이지</N.TitleText>
        </N.PageTitle>
        {/* 제목, 장소, 분류, 일자를 입력하는 섹션 */}
        <U.Wrapper>
          <U.Form>
            <div>
              <U.FormGroup>
                <U.Label style={{ top: '10%' }}>제목</U.Label>
                <U.Input
                  type="text"
                  placeholder="습득한 물건명"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} />
              </U.FormGroup>
            </div>
            <U.Inline>
              <div>
                <U.Label>장소</U.Label>
                <U.Select value={selectedPlace} onChange={(e) => setSelectedPlace(e.target.value)}>
                  <option value="" disabled hidden>장소를 선택하세요</option>
                  {placesList.map((place, index) => (
                    <option key={index} value={place}>{place}</option>
                  ))}
                </U.Select>
              </div>
              <div>
                <U.Label>분류</U.Label>
                <U.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="" disabled hidden>습득물 분류</option>
                  {categoriesList.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </U.Select>
              </div>
              <div>
                <U.Label>일자</U.Label>
                {/* customInput 컴포넌트 사용 */}
                <U.DatePickerWrapper>
                 
                  <label htmlFor="datePicker">
                     날짜 선택:
                  </label>
                   <U.DateCalendar
                    type="date"
                    id="datePicker"
                    value={selectedDate}
                    onChange={handleDateChange}
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
              <U.Textarea value={content} onChange={(e) => setContent(e.target.value)}></U.Textarea>
            </div>
            <div>
              <U.InlineImg>
                <U.Label>이미지</U.Label>
                <U.ImgButton>
                  <input
                    value={selectedFile}
                    type="file"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      console.log('Selected File:', file);
                      setSelectedFile(file);
                    }}
                  />
                  파일선택
                </U.ImgButton>
              </U.InlineImg>
            </div>
            <U.SubmitButton type="submit" value="저장" />
            
          </U.SecondForm>
        </U.Wrapper>
      </N.Section>
    </U.MainWrapper>
  );
};

export default PostCreationPage;

//     <div>
//       <label>제목:</label>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

//       <label>장소 선택:</label>
//       <select value={selectedPlace} onChange={(e) => setSelectedPlace(e.target.value)}>
//         <option value="">장소 선택</option>
//         {placesList.map((place, index) => (
//           <option key={index} value={place}>{place}</option>
//         ))}
//       </select>

//       <label>분류 선택:</label>
//       <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
//         <option value="">분류 선택</option>
//         {categoriesList.map((category, index) => (
//           <option key={index} value={category}>{category}</option>
//         ))}
//       </select>

//       {/* 달력 선택 기능은 DatePicker 등의 라이브러리를 사용하여 구현 가능합니다. */}
//       {/* 이미지 업로드 기능도 다양한 라이브러리를 활용하여 구현할 수 있습니다. */}

//       <label>일자 선택:</label>
//       <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

//       <label>본문 작성:</label>
//       <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>

//       <button onClick={handleSubmit}>저장</button>
//     </div>
//   );