import { Button, Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js';
import { Menu } from '@material-ui/icons';
import Footer from './Footer';
import { Fade,Zoom } from "react-awesome-reveal";

const StyledHome=styled.div`
display: flex;
margin-top: 20vh;
position: relative;
flex-direction: column;
.school{
    height:70vh;
    width: 100%;
    background: url('irshadpic.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .overLay{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
    }
    .underLay{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        .spann{
            width:100px;
            min-height:10px;
            background-color:#E37057;
            border-radius: 10px;
            margin-top:10%;
            margin-left: 20%;
            align-self: flex-start;


        }
    }
   
}
.bodyText{
    margin-left: 20%;
    margin-right: 20%;
}


.section1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 80vh;
    background-color: #f9f9f9;
    width: 100%;
    .video{
        margin:20px;
        display: flex;
        justify-content: center;
        align-items: center;
        video{
            height: 50vh;
            width: 80%;
        }
    }
    .videoWrite{
        margin:20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}

.whyIrshad{
    min-height:120vh;
    position: relative;
    .whyText{
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background-color:transparent;
       
        .whyContainer{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 95%;
            min-height: 80vh;
            margin: 20px;
            justify-content: center;
            align-items: center;
            grid-gap: 10px;
            .whyMain{
                height: 180px;
                border-radius: 10px;
                background: rgba( 255, 255, 255, 0.45 );
                box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                backdrop-filter: blur( 4px );
                -webkit-backdrop-filter: blur( 4px );
                 border: 1px solid rgba( 255, 255, 255, 0.18 );

            }
        }
    }
    

}
.miniWrite{
    min-height: 70vh;
    display:grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    .miniImage{
        background-image: url('irshadmin.jpg');
        background-size: cover;
        width:100%;
        height:400px;
       
        
    }
    .miniWriteUp{
        width:100%;
        height:400px;
        margin-top: 50px;
    }
}
@media screen and (max-width:768px){
    margin-top: 70px;
    .bodyText{
     margin-left:10%;
     margin-right: 10%;
    }
    .bodyText1{
     margin-left:10%;
     margin-right: 10%;
    }
    .section1{
    grid-template-columns: 1fr;
}
.whyIrshad{
    min-height:250vh;
    .whyText{
        .whyContainer{
            grid-template-columns: 1fr;
            width:100%;
            margin:10px;
            min-height:200vh;
            .whyMain{
                width:90%;
            }
        }
    }
}
.miniWrite{
    grid-template-columns: 1fr;
}
}
.school{
    height: 85vh;
}

`;
export default function Home() {
    return (
       <StyledHome>
           <div className='school'>
           <div className='overLay'></div>
           <div className='underLay'>
            <div className='spann'></div>
           <Typography  className='bodyText' style={{
               color:'white',
               fontWeight:'bold'
           }} variant='h2'>
           Al-Irshad Academy, Mayo-Belwa
           </Typography>
           <Typography className='bodyText' style={{
               color:'white',
               textAlign:'justify',
            //    marginLeft:'20px',
            //    marginRight:'20px'
           }} variant='body1'>
           We strive to provide highest quality education, bridging your
            child's success with well formed infrastructure of knowledge and resources 
            and at same time shaping up there relationship with Allah.
           </Typography>
           <Zoom triggerOnce>
           <Button style={{color:'white',marginTop:'10px'}} variant='outlined' color='inherit'>Apply Now!</Button>
           </Zoom>
           </div>
           
           </div>

           <div className='section1'>
             <div className='video'>
                 <video src='irshadvid.mp4' controls autoPlay={false}></video>
             </div>

             <div className='videoWrite'>
             <Typography align='left' style={{
               color:'#161e35',
               fontWeight:'bold',
               marginLeft:'20px'
           }} variant='h4'>
           Knowledge and Fear Allah!!!
           </Typography>

           <Typography style={{
               color:'#161e35',
               textAlign:'justify',
               marginLeft:'20px',
               marginRight:'20px'
           }} variant='body1'>
           We strive to provide highest quality education, bridging your
            child's success with well formed infrastructure of knowledge and resources 
            and at same time shaping up there relationship with Allah.
           </Typography>
             </div>
           </div>
           <div className='whyIrshad'>
           <Particles params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        },
            "color": {
                "value": "black"
              }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": false,
	                "mode": "repulse"
	            }
	        }
	    }
	}} width='100%' height='100vh'>

    </Particles>
   
    <div className='whyText'>
    <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'bold',
               marginLeft:'20px',
               marginTop:'50px'
           }} variant='h4'>Why Al-Irshad Academy?</Typography>

    <div className='whyContainer'>
    <Fade triggerOnce>
     <div className='whyMain'>
         <Menu></Menu>
         <div className='mainText'>
         <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'bold',
               marginLeft:'20px',
            
           }} variant='h5'>Affordable Fess</Typography>
           <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'light',
               marginLeft:'20px',
           }} variant='body1'>Al-Irshad Academy has it's fees 
           lowered to the extent it is affordable by anyone

           </Typography>
         </div>
     </div>
     </Fade>





     <Fade triggerOnce>
     <div className='whyMain'>
         <Menu></Menu>
         <div className='mainText'>
         <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'bold',
               marginLeft:'20px',
            
           }} variant='h5'>Standard & Modernized Facilities</Typography>
           <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'light',
               marginLeft:'20px',
           }} variant='body1'>State of art facilities and modern
            equipment to train our students

           </Typography>
         </div>
     </div>
     </Fade>





    
     <Fade triggerOnce>

     <div className='whyMain'>
         <Menu></Menu>
         <div className='mainText'>
         <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'bold',
               marginLeft:'20px',
            
           }} variant='h5'>Accessibility</Typography>
           <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'light',
               marginLeft:'20px',
           }} variant='body1'>A staple of educational equality for decades, accessibility of 
           learning materials and technologies.
           </Typography>
         </div>
     </div>
     </Fade>










     <Fade triggerOnce>
     <div className='whyMain'>
         <Menu></Menu>
         <div className='mainText'>
         <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'bold',
               marginLeft:'20px',
            
           }} variant='h5'>Trained & Experienced Staff</Typography>
           <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'light',
               marginLeft:'20px',
           }} variant='body1'>Teachers are a crucial and integral to a student’s 
           development and growth.



           </Typography>
         </div>
     </div>
     </Fade>






<Fade triggerOnce>
     <div className='whyMain'>
         <Menu></Menu>
         <div className='mainText'>
         <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'bold',
               marginLeft:'20px',
            
           }} variant='h5'>Security</Typography>
           <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'light',
               marginLeft:'20px',
           }} variant='body1'>Providing a safe and secure
            environment at school is imperative to helping students 
           succeed academically, socially and emotionally.

           </Typography>
         </div>
     </div>

     </Fade>



   <Fade triggerOnce>
     <div className='whyMain'>
         <Menu></Menu>
         <div className='mainText'>
         <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'bold',
               marginLeft:'20px',
            
           }} variant='h5'>Payment Flexibility</Typography>
           <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'light',
               marginLeft:'20px',
           }} variant='body1'>Our Payments are flexible and affordable

           </Typography>
         </div>
     </div>
     </Fade>
    </div>
    </div>
    
    </div>

    <div className='miniWrite'>
    <div className='miniImage'>
    </div>
    <div className='miniWriteUp'>
           <Typography align='center' style={{
               color:'#161e35',
               fontWeight:'light',
               marginLeft:'20px',
           }} variant='h5'>
              The School was introduced and esterblished by Malam Mustapha Bala  Abdullahi, in accordance
               with the prevalence law and approval of MINISTRY OF EDUCATION Adamawa state..

           </Typography>
           <div className='stylish'></div>
    </div>
    </div>
    <Footer></Footer>
       </StyledHome>
    )
}
