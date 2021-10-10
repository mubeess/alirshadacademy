import { Drawer, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/MenuOutlined'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { CloseOutlined,HistoryOutlined,HomeOutlined, Image, MailOutline } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
const StyledNav=styled.nav`
position: fixed;
height: 20vh;
width: 100%;
top: 0;
display: flex;
align-items: center;
z-index: 100;
background: rgba( 255, 255, 255, 0.55 );
                box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                backdrop-filter: blur( 4px );
                -webkit-backdrop-filter: blur( 4px );
                 border: 1px solid rgba( 255, 255, 255, 0.18 );
img{
    height: 100px;
    width: 100px;
    margin-left: 20px;
}
.listItems{
 margin-left: 50%;
 li{
     display: inline;
     margin:20px;
 }
}

.menu{
    display: none;
}

@media screen and (max-width:768px){
img{
    height: 50px;
    width: 50px;
}
.logo-text{
    display: none;
}
.listItems{
    display: none;
}
.menu{
    display: block;
    margin-left: 60%;
}
.mobileList{
   width:400px;
   background-color: white;
}
height: 70px;

}

`;
 function Nav(props) {
    const [open,setOpen]=useState(false)
    return (
    <StyledNav>
        <img src='irshadlogo.png' alt='logo'></img>
        <Typography className='logo-text' variant='button'>
            Al-Irshad Academy
        </Typography>
        <ul className='listItems'>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Gallery</a></li>
            <li><a>Contact</a></li>
        </ul>
    <IconButton onClick={()=>{
        setOpen(true)
    
    }} className='menu' aria-label="delete">
       <Menu></Menu> 
    </IconButton>

    <Drawer style={{
        width:'400px'
    }}
            anchor='right'
            open={open}
          >
        <div className='mobileList'>
           <CloseOutlined onClick={()=>{
              setOpen(false)
          }} style={{color:'black',marginLeft:'70%'}}></CloseOutlined>
          <Divider></Divider>
          <List component="nav" aria-label="main mailbox folders">
        <ListItem onClick={()=>{
            setOpen(false)
            props.history.push('/')
        }} button>
          <ListItemIcon>
             <HomeOutlined></HomeOutlined>
         </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>



      <List component="nav" aria-label="main mailbox folders">
        <ListItem onClick={()=>{
            props.history.push('/about')
            setOpen(false)

        }} button>
          <ListItemIcon>
             <HistoryOutlined></HistoryOutlined>
         </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>





      <List component="nav" aria-label="main mailbox folders">
        <ListItem onClick={()=>{
            props.history.push('/gallery')
            setOpen(false)

        }} button>
          <ListItemIcon>
             <Image></Image>
         </ListItemIcon>
          <ListItemText primary="Gallery" />
        </ListItem>
      </List>




      <List component="nav" aria-label="main mailbox folders">
        <ListItem onClick={()=>{
            props.history.push('/contact')
            setOpen(false)

        }} button>
          <ListItemIcon>
             <MailOutline></MailOutline>
         </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      </div>
          </Drawer>
    </StyledNav>
    )
}

export default withRouter(Nav)