import * as M from './MainStyle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function LostCard({ searchTerm }) {
    const [data, setData] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false); // 로그인 여부 상태
  
    useEffect(() => {
      const token = localStorage.getItem('key');
  
      if (token) {
        // 유저 정보를 받아오는 요청
        axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/userinfo/', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(response => {
          setLoggedIn(true); // 로그인 상태로 설정
          // 유저 정보를 통해 데이터를 받아오는 요청
          axios.get('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/lost_posts/', {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching posts: ', error);
          });
        })
        .catch(error => {
          console.error('Error fetching user info: ', error);
          setLoggedIn(false); // 로그인되지 않은 상태로 설정
        });
      } else {
        setLoggedIn(false); // 토큰이 없으면 로그인되지 않은 상태로 설정
      }
    }, []);
  
    const filteredData = searchTerm ? data.filter(item => item.title.includes(searchTerm)) : data;

    return (
      loggedIn ? (
        filteredData.map((item, index) => (
          <Link to={`/lost/${item.id}`}>
          <M.Card key={index}>
            <M.Image src={item.head_image} />
            <M.CardTitle>{item.title}</M.CardTitle>
            <M.TagWrapper>
              <M.Tag>{item.location}</M.Tag>
              <M.Tag>{item.date_select}</M.Tag>
            </M.TagWrapper>
          </M.Card>
          </Link>
        ))
      ) : (
        <p>Please log in to view posts</p>
      )
    );
  }