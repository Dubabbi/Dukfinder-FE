import * as F from './FooterStyle';
import React from "react"


const Front = ['윤소은', '조예영', '최유리'];
const Back = ['김나영', '여현정'];



export default function Footer() {
    return (
        <>
            <F.FooterWrapper>
                <F.DevWrapper>
                    <F.Dev>Front-end</F.Dev>
                    <F.Names>
                        {Front.map((developer, index) => (
                            <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
                        ))}</F.Names>
                </F.DevWrapper>
                <F.DevWrapper>
                    <F.Dev>Back-end</F.Dev>
                    <F.Names>
                        {Back.map((developer, index) => (
                            <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
                        ))}</F.Names>
                </F.DevWrapper>


                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>


            </F.FooterWrapper>
        </>
    )
}

// export default function Footer() {
//     return (
//         <>
//             <F.FooterWrapper>
//                 <F.DevWrapper>
//                     <F.Dev>Front-end</F.Dev>
//                     <F.Names>
//                     {Front.map((developer, index) => (
//                     <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
//                     ))}</F.Names>
//                 </F.DevWrapper>
//                 <F.DevWrapper>
//                     <F.Dev>Back-end</F.Dev>
//                     <F.Names>
//                     {Back.map((developer, index) => (
//                     <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
//                     ))}</F.Names>
//                 </F.DevWrapper>
//             </F.FooterWrapper>
//         </>
//     )
// }