import React from 'react';
import * as N from './NavStyle';
// import { ReactComponent as DLogo } from './../../assets/image/duksunglogo.svg';

export default function Nav() {
    return(
        <>
            <N.NavWrapper>
                <N.Page>home</N.Page>
                <N.Page>lost</N.Page>
                <N.Page>find</N.Page>
                <N.Page>notice</N.Page>
                {/* <DLogo /> */}
            </N.NavWrapper>
        </>
    )
}