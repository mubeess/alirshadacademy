import React from 'react'
import styled from 'styled-components'
import { Fade,Zoom } from "react-awesome-reveal";
import { Button, Typography } from '@material-ui/core';
import { Facebook, Mail, Twitter, WhatsApp } from '@material-ui/icons';
const StyledFooter=styled.div`
min-height: 100vh;
background-color: black;
width: 100%;
display: flex;
flex-direction: column;
.shine{
    background-color: #152b3c;
    display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 50vh;
}
.mainFooter{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    min-height: 50vh;
    margin:auto;
    background-color: #FDF6F5;
}
@media screen and (max-width:768px){
    .mainFooter{
   grid-template-columns: 1fr;
   justify-content: center;
   align-items: center;
   img{
       margin:auto;
       margin-top: 10px;
   }
   .social{
       display:flex;
       flex-direction:row;
       margin-top: 20px;
       justify-content: center;
       align-items: center;
       a{
           margin: 20px;
       }
   }
    }
}
`;
export default function Footer() {
    return (
      <StyledFooter>
        <Fade triggerOnce>
            <div className='shine'>
                <Typography align='center' style={{color:'white'}} variant='h1'>Because you deserve to shine.</Typography>
                <Button style={{color:'white',marginTop:'10px'}} variant='outlined' color='inherit'>Apply Now!</Button>
            </div>
            <div className='mainFooter'>
            <img style={{
                 height:'300px',
                 width:'300px'
            }} src='irshadlogo.png' alt='logo'></img>

            <div className='contact'>
            <Typography align='center' variant='h4'>Contact Us</Typography>
             <Typography style={{
                 textAlign:'justify',
                 marginLeft:'10px',
                 marginRight:'10px'
             }} variant='body1'>
             Old Motor park,
             Opposite Lamido Kabbi's Mosque, Mayo-Belwa.
             </Typography>
             <Typography style={{
                 marginTop:'20px'
             }} variant='button'>
             +2347037373353
             alirshadacademy.com
             </Typography>
            </div>

            <div className='social'>
         <a href='#'><Facebook></Facebook></a>
          <a href='https://api.whatsapp.com/send?phone=+2347081948631'> <WhatsApp></WhatsApp></a>
          <a href = "mailto:alirshadacademymayobelwa@gmail.com"> <Mail></Mail></a>
            </div>
             
            </div>
        </Fade>
      </StyledFooter>
    )
}
