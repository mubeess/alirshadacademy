import { Typography } from '@material-ui/core';
import React,{useEffect, useState} from 'react'
import styled from 'styled-components'


const StyledAbout=styled.div`
min-height: 100vh;
min-width: 100%;
margin-top: 20vh;
.main{
    display: flex;
    flex-direction: column;
    height: 300px;
    background-color: #f9f9f9;
    width: 80%;
    margin:auto;
    margin-top: 10px;
    border-radius: 10px;
}
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
export default function Contact() {

useEffect(() => {
    window.scrollTo(0,0)
}, [])

    return (
        <StyledAbout>
            <div className='jumbo'>
            <h2>Contact US</h2>
            </div>
            <div className='main'>
                <Typography align='center' variant='h4'>
                The Director.
                </Typography>
                <Typography align='center' variant='h4'>
                Mal Mustapha Abdullahi
                </Typography>
                <Typography align='center' variant='h6'>
                ☛ phone:+2347037373353
                </Typography>
                
            </div>


            <div className='main'>
                <Typography align='center' variant='h4'>
                The Principal
                </Typography>
                <Typography align='center' variant='h4'>
                Mal Lawan Audu
                </Typography>
                <Typography align='center' variant='h6'>
                ☛ phone:+2348037133872
                </Typography>
                
            </div>




            <div className='main'>
                <Typography align='center' variant='h4'>
                The P.T.A Chairman
                </Typography>
                <Typography align='center' variant='h4'>
                Mal Bala Usman
                </Typography>
                <Typography align='center' variant='h6'>
                ☛ phone:+2348037593890
                </Typography>
                
            </div>


            <div className='main'>
                <Typography align='center' variant='h4'>
                The Co-ordinator
                </Typography>
                <Typography align='center' variant='h4'>
                Mal Sirajo Ahmad
                </Typography>
                <Typography align='center' variant='h6'>
                ☛ phone:+2348161131927
                </Typography>
                
            </div>

            <div className='main'>
                <Typography align='center' variant='h4'>
                The Senior Master
                </Typography>
                <Typography align='center' variant='h4'>
                Mal Sahabo Abubakar
                </Typography>
                <Typography align='center' variant='h6'>
                ☛ phone:+234812366500
                </Typography>
                
            </div>


            <div className='main'>
                <Typography align='center' variant='h4'>
                Accountant
                </Typography>
                <Typography align='center' variant='h4'>
                Zainab Muhammad
                </Typography>
                <Typography align='center' variant='h6'>
                ☛ phone:+2347065953038
                </Typography>
                
            </div>
        </StyledAbout>
    )
}