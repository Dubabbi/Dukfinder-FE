// Upload.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import './Upload.css'
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCalendarAlt} from 'react-icons/fa';
import * as U from './UploadStyle'; 
import * as N from '../Notice/NoticeStyle'; 
import styled from 'styled-components';
import { setDate } from 'date-fns';

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


export default function Upload() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleLocationChange = (e) => setSelectedLocation(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const [selectedDate, setSelectedDate] = useState(null);



  // 등록 버튼 클릭 시 서버로 데이터 전송
  const handleSubmit = async () => {
    const token = localStorage.getItem('key');
  
    if (token) {
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('location', selectedLocation);
        formData.append('category', selectedCategory);
        formData.append('date', selectedDate);
        formData.append('file', selectedFile); // Append the selected file
  
        const response = await axios.post(
          'https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/create',
          formData,
          {
            headers: {
              Authorization: `Token ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
  
        console.log('글 작성 성공:', response);
        // Additional logic after successful submission
      } catch (error) {
        console.error('글 작성 실패:', error);
        // Handle error, show message, or perform other actions
      }
    } else {
      console.log('토큰이 없습니다.');
      navigate('/');
    }
  };
  

  useEffect(() => {
    const token = localStorage.getItem('key');
    console.log('토큰 값:', token);

    if (token) {
      axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/userinfo/', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(response => {
        setLoggedIn(true);

        axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/category/{category}', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(response => {
          setFindPostData(response.data);
          console.log('카테고리를 불러왔습니다.');
          console.log([response.data]);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
      })
      .catch(error => {
        setLoggedIn(false);
        console.error('Invalid token:', error);
        navigate.push('/'); // Redirect to the login page if token is invalid
      });
    } else {
      setLoggedIn(false);
      // navigate.push('/'); // Redirect to the login page if token is not present
    }
  }, [navigate]);
  const [findPostData, setFindPostData] = useState([]);

  const locations = findPostData.map((location) => (
      <option key={location.id}>
      {location.name}
    </option>
  ));

  const categories = findPostData.map((category) => (
    <option key={category.id}>
    {category.name}
  </option>
));



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
                <U.Input 
                type="text"
                placeholder="습득한 물건명"
                value={title} 
                onChange={handleTitleChange} />
              </U.FormGroup>
            </div>
            <U.Inline>
              <div>
                <U.Label>장소</U.Label>
                <U.Select value={selectedLocation} onChange={handleLocationChange}>
                  <option value="" disabled hidden>장소를 선택하세요</option>
                  <select id="categoryDropdown">
                  <option value="전자기기">전자기기</option>
                  <option value="지갑,카드">지갑,카드</option>
                  <option value="악세사리">악세사리</option>
                  <option value="화장품">화장품</option>
                  <option value="기타">기타</option>
                  </select>
                </U.Select>
              </div>
              <div>
                <U.Label>분류</U.Label>
                <U.Select value={selectedCategory} onChange={handleCategoryChange}>
                  <option value="" disabled hidden>습득물 분류</option>
                    <option>
                      {categories}
                    </option>
                </U.Select>
              </div>
              <div>
                <U.Label>일자</U.Label>
                {/* customInput 컴포넌트 사용 */}
                <U.DatePickerWrapper>
                <div className='App'>
      <DatePicker selected={selectedDate} onChange={date => setDate(date)}/>
    </div>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  customInput={<CustomInput />}/>
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
    <U.Label>이미지</U.Label>
    <U.ImgButton>
      <input
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
            <U.SubmitButton type="submit" value="저장"/>
          </U.SecondForm>
        </U.Wrapper>
      </N.Section>
    </U.MainWrapper>
  );
};


// {/* <U.MainWrapper>
//       <N.Section>
//         <N.PageTitle>
//           <N.TitleText>작성 페이지</N.TitleText>
//         </N.PageTitle>
//         {/* 제목, 장소, 분류, 일자를 입력하는 섹션 */}
//         <U.Wrapper>
//           <U.Form>
//             <div>
//               <U.FormGroup>
//                 <U.Label style={{ top: '10%' }}>제목</U.Label>
//                 <U.Input 
//                 type="text"
//                 placeholder="습득한 물건명"
//                 value={title} 
//                 onChange={(e) => setTitle(e.target.value)} />
//               </U.FormGroup>
//             </div>
//             <U.Inline>
//               <div>
//                 <U.Label>장소</U.Label>
//                 <U.Select value={selectedPlace} onChange={(e) => setSelectedPlace(e.target.value)}>
//                   <option value="" disabled hidden>장소를 선택하세요</option>
//                   {placesList.map((place, index) => (
//                   <option key={index} value={place}>{place}</option>
//                   ))}
//                 </U.Select>
//               </div>
//               <div>
//                 <U.Label>분류</U.Label>
//                 <U.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
//                   <option value="" disabled hidden>습득물 분류</option>
//                   {categoriesList.map((category, index) => (
//                     <option key={index} value={category}>{category}</option>
//                   ))}
//                 </U.Select>
//               </div>
//               <div>
//                 <U.Label>일자</U.Label>
//                 {/* customInput 컴포넌트 사용 */}
//                 <U.DatePickerWrapper>
//                 <div className='App'>
//       <DatePicker selected={selectedDate} onChange={date => setDate(date)}/>
//     </div>
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={(date) => setSelectedDate(date)}
//                   customInput={<CustomInput />}/>
//                 </U.DatePickerWrapper>
//               </div>
//             </U.Inline>
//           </U.Form>
//         </U.Wrapper>
//         {/* 메시지와 이미지 업로드를 입력하는 섹션 */}
//         <U.Wrapper>
//           <U.SecondForm onSubmit={handleSubmit}>
//             <div>
//               <U.Label>message</U.Label>
//               <U.Textarea value={content} onChange={(e) => setContent(e.target.value)}></U.Textarea>
//             </div>
//             <div>
//             <U.InlineImg>
//     <U.Label>이미지</U.Label>
//     <U.ImgButton>
//       <input
//         type="file"
//         style={{ display: 'none' }}
//         onChange={(e) => {
//           const file = e.target.files[0];
//           console.log('Selected File:', file);
//           setSelectedFile(file);
//         }}
//   />
//   파일선택
// </U.ImgButton>

//   </U.InlineImg>


//             </div>
//             <U.SubmitButton type="submit" value="저장" onClick={handleSubmit}/>
//           </U.SecondForm>
//         </U.Wrapper>
//       </N.Section>
//     </U.MainWrapper>
//   ); */}