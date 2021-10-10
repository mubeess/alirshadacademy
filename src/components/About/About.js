import { Typography } from '@material-ui/core';
import React,{useEffect, useState} from 'react'
import styled from 'styled-components'

const StyledAbout=styled.div`
min-height: 100vh;
width: 100%;
margin-top: 20vh;
.jumbo{
    width: 100%;
    min-height: 30vh;
    background:linear-gradient(to right,#f3f3f3,#f9f9f9);
    
    h2{
        color: black;
        font-size: 70px;
        font-weight: lighter;
        text-align: center;
        margin-top:20px;
    }
    h2:first-Letter{
        border-bottom: 1px solid blue;
    }
}
@media screen and (max-width:768px){
    margin-top: 70px;
}
`;
export default function About() {
useEffect(() => {
    window.scrollTo(0,0)
}, [])

    return (
        <StyledAbout>
            <div className='jumbo'>
            <h2>ABOUT US</h2>
            </div>
            <div className='main'>
                <Typography style={{textAlign:'justify',marginRight:'20px',marginLeft:'20px'}} variant='body1'>
                AL-IRSHAD ACADEMY MAYO-BELWA was established in the year 2010,
                 by Malam Mustapha Bala Abdullahi. It commences it's educational 
                 activities with Primary and Quranic Memorization Sections so as to
                  give our teaming children both Western and Islamic education simultaneously. 
                  After a successful academic progress, the school graduated it's first
                   pioneer students in the year 2015 and introduced the Junior secondary
                    School in 2015 to keep building on the solid foundation 
                already laid by the prudent management of the school.
                </Typography>
            </div>
        </StyledAbout>
    )
}
