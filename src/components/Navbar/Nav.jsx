import React from 'react';
import * as N from './NavStyle';
import { Link } from 'react-router-dom';
import DLogo from './../../assets/image/duksunglogo.svg';
import Logo from './../../assets/icon/duklogo.svg';
import Avvvatars from 'avvvatars-react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Nav() {
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
    
    return(
        <>
            <N.NavWrapper>
                <N.Header>
                  <N.Duck src={Logo}/>
                  <N.Title>Dukfinder</N.Title>
                </N.Header>
              <N.LinkWrapper>
                <Link to="/main"><N.Page>home</N.Page></Link>
                <Link to="/find"><N.Page>find</N.Page></Link>
                <Link to="/lost"><N.Page>lost</N.Page></Link>
                <Link to="/notice"><N.Page>notice</N.Page></Link>
                <Link to="https://www.duksung.ac.kr/main.do"><N.Logo src={DLogo}/></Link>
                <Link to="/mypage"><N.Avatar><Avvvatars value={data.username} style="shape" size={40}/></N.Avatar></Link>
              </N.LinkWrapper>
            </N.NavWrapper>
        </>
    )
}