import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="header">
<div className="siteName">
    <h1>TVMave</h1>
</div>

</div>

<AppBar position="static" >
<Toolbar >
  <Typography variant="subtitle1" color="inherit" style={{flex:1}} align="center">
    See Your Favorite TV Shows and Movies
  </Typography>
</Toolbar>
</AppBar>
            </React.Fragment>
        );
    }
}


export default Header;

