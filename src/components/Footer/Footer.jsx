import * as F from './FooterStyle';
import React from "react"
import { Link} from 'react-router-dom';
import './Footer.css';
const Front = ['윤소은', '조예영', '최유리'];
const Back = ['김나영', '여현정'];


export default function Footer() {
    return(
        <div className='footer'>
            <div className='sb__footer section__padding'>
                <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>Front-end</h4>
                        <p>윤소은</p>
                        <p>조예영</p>
                        <p>최유리</p>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Back-end</h4>
                        <p>김나영</p>
                        <p>여현정</p>
                        <p></p>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Duksung Women's University</h4>
                    <div className='Social Media'>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                </div>
                <hr/>

                <div className='sb__footer-below'>
                    <div className='sb__footer-copyright'>
                    <p><em> Copyright &copy; Dukfinder 2023</em></p>
                    </div>
                </div>
    
            </div>
        </div>
    )
}