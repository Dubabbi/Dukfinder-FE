import React from 'react';
import * as N from './NavStyle';
import { Link } from 'react-router-dom';
// import { ReactComponent as DLogo } from './../../assets/image/duksunglogo.svg';

export default function Nav() {
    return(
        <>
            <N.NavWrapper>
                <Link to="/"><N.Page>home</N.Page></Link>
                <Link to="/lost"><N.Page>lost</N.Page></Link>
                <Link to="/find"><N.Page>find</N.Page></Link>
                <Link to="/notice"><N.Page>notice</N.Page></Link>
                {/* <DLogo /> */}
            </N.NavWrapper>
        </>
    )
}