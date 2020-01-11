import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { withStyles} from '@material-ui/core/styles';

import {AppBar, Avatar, Toolbar,Typography,IconButton,Menu,
  MenuItem,ListItemIcon,ListItemText,Divider , Link as MyLink} from '@material-ui/core';

import {DirectionsWalk,DirectionsRun,MenuOpen,AccountCircle, ExitToApp,
  BarChart} from '@material-ui/icons';







const styles = theme => ({
  root: {
    flexGrow: 1, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  collor:{
    color: theme.palette.secondary
  }
});


class Header extends Component {
  state = {
    anchorEl: null
  }
  renderContentLogin(){
    switch(this.props.auth){
      case null:
        return 'Still wait';
      case false:
        return (
          <div>
            <ListItemIcon>
              <MyLink href="/auth/google"  color="inherit">
                <AccountCircle fontSize="small" />
              </MyLink>  
            </ListItemIcon>
          </div>
        ) 
      default:
        return (
          <MenuItem>
            <Avatar alt="Remy Sharp" src={this.renderLinkAvatar()}  fontSize="small" />
            <IconButton>
              <MyLink href="/api/logout"  color="inherit">
                <ExitToApp fontSize="small" />
              </MyLink>  
            </IconButton>
          </MenuItem>
        ) 
    }
  }
  renderLinkAvatar(){
    return !this.props.auth ? '' : this.props.auth.googleAvatar
  }

  renderRouteStat(){
    if(this.props.auth){
      if(this.props.auth.googleId==='105991526101585050980'){
        return(
        <div>
          <MenuItem 
            component={Link} to="/hikingStats"
            //onClick={handleClose}
            >
           
              <ListItemIcon>
                <BarChart fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Hiking" />
              
          </MenuItem>
          <MenuItem
            component={Link} to="/runningStats"
            //onClick={handleClose}
          >
            <ListItemIcon>
              <BarChart fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Running" />
          </MenuItem>
          <MenuItem
            component={Link} to="/climbingStats"
            //onClick={handleClose}
          >
            <ListItemIcon>
              <BarChart fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Climbing" />
          </MenuItem>
        </div>
        )
      }
    }
  }

  render(){
  const { classes } = this.props;
  

  const handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  const handleClose = () => {
    this.setState({anchorEl: null});
    
  };

  console.log(this.props)

  
  return(
    
    <AppBar position="static" >
      <Toolbar>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          
        >
        <MenuOpen />
        </IconButton>
        <Menu
          id="customized-menu"
          anchorEl={this.state.anchorEl}

          color={classes.collor}
          open={Boolean(this.state.anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            color={classes.collor}
            component={Link} to="/hiking"
            onClick={handleClose}
          >
            <ListItemIcon>
              <DirectionsWalk fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Hiking" />
          </MenuItem>
          <MenuItem
            component={Link} to="/running"
            onClick={handleClose}
          >
            <ListItemIcon>
              <DirectionsRun fontSize="small"/>
            </ListItemIcon>
            <ListItemText primary="Running" />
          </MenuItem>
          <Divider/>
          {this.renderRouteStat()}
        </Menu>
        <Typography background="secondary" variant="h6" className={classes.title}>
        hitaom
        </Typography>
        
        
          
          {this.renderContentLogin()}
          
          
      </Toolbar>
    </AppBar>

  
)
}
};

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
//export default connect()(withStyles(styles)(Header))
