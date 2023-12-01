// ContactForm.js
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import * as L from '../Login/LoginStyle';
import * as M from '../Main/MainStyle';
import * as N from '../Notice/NoticeStyle';
import * as U from './UploadStyle';
import * as S from '../Signin/SigninStyle';


const ContactForm = () => {
  return (
    <M.MainWrapper>
      <N.Section>
        <N.PageTitle>
          <N.TitleText>작성 페이지</N.TitleText>
        </N.PageTitle>
        <U.Wrapper>
          <U.Form action="#">
            <table>
              <tr>
                <td colspan = '3'>
                  <U.FormGroup>
                    <U.Label htmlFor="name">Name</U.Label>
                    <U.Input type="text" id="name" name="your-name" />
                  </U.FormGroup>
                </td>
              </tr>
              <tr> 
              <td>
                    <U.Label htmlFor="email">Mail address</U.Label>
                    <U.Input type="text" id="email" name="your-email" />
              </td>
              <td>
                    <U.Label htmlFor="email">Mail address</U.Label>
                    <U.Input type="text" id="email" name="your-email" />
              </td>
              <td>
                    <U.Label htmlFor="email">Mail address</U.Label>
                    <U.Input type="text" id="email" name="your-email" />
              </td>
              </tr>
              <tr>
              <td colspan = '3'>
                    <U.Label htmlFor="message">Message</U.Label>
                    <U.Textarea type="text" id="message" name="your-message"></U.Textarea>
              </td>
              </tr>
              <tr>
              <td colspan = '3'>
                  <U.Inline>
                    <U.Label htmlFor="image">이미지</U.Label>
                    <U.ImgButton onClick>파일선택</U.ImgButton>
                  </U.Inline>
              </td>
              </tr>
            </table>
            <U.SubmitButton />
          </U.Form>
        </U.Wrapper>
      </N.Section>
    </M.MainWrapper>
  );
};

export default ContactForm;
