import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React,{useEffect, useState} from 'react'
import styled from 'styled-components'


const StyledAbout=styled.div`
min-height: 100vh;
min-width: 100%;
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
.main{
    margin-left:15px;
    margin-right:15px;
    margin-top: 10px;
}
@media screen and (max-width:768px){
    margin-top: 70px;
}
`;
const useStyles = makeStyles({
    root: {
      marginTop:20
    },
    media: {
      height: 300,
    },
  });
export default function Gallery() {
const classes=useStyles()
useEffect(() => {
    window.scrollTo(0,0)
}, [])
    return (
        <StyledAbout>
            <div className='jumbo'>
            <h2>Gallery</h2>
            </div>
            <div className='main'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="1.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     



    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="2.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     


    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="3.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     



    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="4.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     


    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="5.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     



    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="6.jpg"
          title="Child Friendly Space"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     

       

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="7.jpg"
          title="Child Friendly Space"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     


    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="8.jpg"
          title="Child Friendly Space"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     


    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="9.jpg"
          title="Child Friendly Space"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     

                
            </div>
        </StyledAbout>
    )
}