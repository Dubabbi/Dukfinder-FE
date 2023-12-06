import * as My from './MypageStyle';
import MyFindCard from './MyFindCards';
import MyLostCard from './MyLostCards';
import * as M from './../Main/MainStyle';
import Avvvatars from 'avvvatars-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyPage() {
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
            setData(response.data);})
        .catch(error => {
          console.error('Error fetching user info: ', error);
          setLoggedIn(false); // 로그인되지 않은 상태로 설정
        });
      } else {
        setLoggedIn(false); // 토큰이 없으면 로그인되지 않은 상태로 설정
      }
    }, []);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const sizeInVW = 10; // 원하는 크기를 vw 단위로 지정
    const sizeInPixels = (windowWidth * sizeInVW) / 100;
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
            <My.BackYellow>
                <Link to="/mypage/setting"><My.Setting /></Link>
                <My.ProfileWrapper>
                    <My.ProfilePic><Avvvatars value={data.username} size={sizeInPixels} style="shape"/></My.ProfilePic>
                    <My.Nickname>{data.username}</My.Nickname>
                    <My.Email>{data.email}</My.Email>
                </My.ProfileWrapper>
                <My.CardWrapper>
                    <M.SubTitleWrapper>
                        <M.SubTitle>주인을 찾아요!</M.SubTitle>
                        <M.SubTitle>잃어버렸어요!</M.SubTitle>
                    </M.SubTitleWrapper>
                    <M.SubWrapper>
                        <M.CardWrapper>
                            <MyFindCard />
                        </M.CardWrapper>
                        <M.CardWrapper>
                            <MyLostCard />
                        </M.CardWrapper>
                    </M.SubWrapper>
                </My.CardWrapper>
            </My.BackYellow>
        </>
    )
}