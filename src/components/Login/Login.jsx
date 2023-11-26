// Login.jsx
import React, { useEffect, useState } from 'react';
import * as L from './LoginStyle';


export default function Login () {
  return (
    <L.LoginWrapper>
    <L.Page>
      <L.TitleWrap>
          <p style={{ color: 'red'}}>🐤Duk</p><p>finder🐤에 오신 것을</p><br/>
          환영합니다!👋
        </L.TitleWrap>
        {/* 🦆 */}
    </L.Page>
    </L.LoginWrapper>
  );
};

