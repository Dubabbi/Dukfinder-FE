import * as L from '../Login/LoginStyle';
import * as Set from './SettingStyle';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Setting() {

   
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // 로그아웃 확인 창 띄우기
        const confirmLogout = window.confirm('로그아웃 하시겠습니까?');
    
        if (confirmLogout) {
        // 로컬 스토리지에서 토큰 제거
        localStorage.removeItem('key');
        window.confirm('로그아웃 되었습니다');
    
        // "/" 페이지로 이동
        navigate('/');
        }
    };

    const handleWithdrawal = () => {
        const confirmWithdrawal = window.confirm('정말 탈퇴하시겠습니까?');
    
        if (confirmWithdrawal) {
        const token = localStorage.getItem('key');
    
        if (token) {
            axios.delete('https://port-0-dukfinder-57lz2alpp5sfxw.sel4.cloudtype.app/user/userinfo/', {
            headers: {
                Authorization: `Token ${token}` // 토큰을 헤더에 추가
            }
            })
            .then(response => {
                alert('탈퇴되었습니다.');
                localStorage.removeItem('key');
            })
            .catch(error => {
                console.error('Error withdrawing: ', error);
                alert('탈퇴에 실패했습니다.');
            });
        } else {
            alert('토큰이 없습니다. 로그인 상태를 확인해주세요.');
        }
        }
    };

    return(
        <L.LoginWrapper>
        <Set.Page>
          <L.TitleWrap>
            <p>Setting</p>
          </L.TitleWrap>
          <L.ContentWrap>
            <Set.LinkWrap onClick={handleLogout}>로그아웃</Set.LinkWrap>
          </L.ContentWrap>
          <L.ContentWrap>
            <a href="/mypage/setting/pw"><Set.LinkWrap>비밀번호 변경</Set.LinkWrap></a>
          </L.ContentWrap>
          <L.ContentWrap>
            <Set.LinkWrap onClick={handleWithdrawal}>회원탈퇴</Set.LinkWrap>
          </L.ContentWrap>
        </Set.Page>
      </L.LoginWrapper>
  );

}