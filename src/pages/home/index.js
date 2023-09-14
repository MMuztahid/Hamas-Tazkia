import React from "react";
import { Box,  Divider } from "@mui/material";

// Import Swiper styles

import './styles.css'
import BottomBar from "../../components/bottombar/BottomBar";
import HomeSwiper from "../../components/swiperhome";



function Landing() {
  return (  
    <Box component="div" sx={{
      width: '100%',
      height: 'fit-content',
      flexGrow: '1',
    }}>
      
      <HomeSwiper/>

      
      <Divider sx={{
        marginLeft: '30px',
        marginRight: '30px'
        }}>
      </Divider>
      <div className="content-header">
        
      </div>
       
      <BottomBar/>

    </Box>
  ); 
};

export default Landing;
