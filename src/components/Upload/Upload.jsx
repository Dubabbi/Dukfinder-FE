import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
 const navigate= useNavigate();

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

        axios.post('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/create', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(response => {
          setFindPostData(response.data);
          console.log('포스트를 불러왔습니다.');
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


  const handleSubmit = async () => {
    const token = localStorage.getItem('key');
    console.log('토큰 값:', token);

    if (token) {
      try {
        const response = await axios.post(
          'https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/find_posts/create',
          {
            title: document.getElementById('name').value,
            content: document.getElementById('message').value,
            location: selectedLocation,
            category: document.getElementById('category').value,
            date: selectedDate,
          },
          {
            headers: {
              Authorization: `Token ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('글 작성 성공:', response);
        // Redirect or perform any other actions after successful submission
      } catch (error) {
        console.error('글 작성 실패:', error);
        // Handle error, show message, or perform other actions
      }
    } else {
      // Handle the case where the token is not present
      console.log('토큰이 없습니다.');
      navigate('/'); // Redirect to the login page if token is not present
    }
  };

  return (
    <U.MainWrapper>
      <N.Section>
        <N.PageTitle>
          <N.TitleText>작성 페이지</N.TitleText>
        </N.PageTitle>
        <U.Wrapper>
          <U.Form>
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
                  <option value="" disabled hidden>
                    장소를 선택하세요
                  </option>
                  <option value="인사대">인사대</option>
                  <option value="자연대">자연대</option>
                </U.Select>
              </div>
              <div>
                <U.Label>분류</U.Label>
                <U.Select id="category">
                  <option value="" disabled hidden></option>
                  <option value="전자기기">전자기기</option>
                  <option value="지갑">지갑</option>
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
        <U.Wrapper>
          <U.SecondForm>
            <div>
              <U.Label htmlFor="message">Message</U.Label>
              <U.Textarea id="message" name="your-message"></U.Textarea>
            </div>
            <div>
              <U.InlineImg>
                <U.Label htmlFor="image">이미지</U.Label>
                <U.ImgButton onClick={() => console.log('파일 선택')}>
                  파일선택
                </U.ImgButton>
              </U.InlineImg>
            </div>
            <U.SubmitButton onClick={handleSubmit}>등록</U.SubmitButton>
          </U.SecondForm>
        </U.Wrapper>
      </N.Section>
    </U.MainWrapper>
  );
};

export default Upload;
