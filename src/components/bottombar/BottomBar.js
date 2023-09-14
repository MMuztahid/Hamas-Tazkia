import * as React from "react";
import {Slide, AppBar, Toolbar, useScrollTrigger, CssBaseline} from'@mui/material';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="up" in={trigger}{...!trigger} >
        {children}
      </Slide>
    );
  }
  
  
function BottomBar(props){
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
              <AppBar  color="primary" sx={{ 
                  top: 'auto', 
                  bottom: 0 ,
                  width:'100%',
                  height:'10vh'
              }}>
                <Toolbar></Toolbar>
              </AppBar>
            </HideOnScroll>
    </React.Fragment>

    );
};
export default BottomBar;