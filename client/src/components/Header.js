import React from 'react';
import {Link} from 'react-router-dom';

import { makeStyles  ,useTheme} from '@material-ui/core/styles';

import {AppBar,Toolbar,Typography,IconButton,Menu,
  MenuItem,ListItemIcon,ListItemText,Divider} from '@material-ui/core';

import {DirectionsWalk,DirectionsRun,MenuOpen,AccountCircle,
  BarChart} from '@material-ui/icons';







const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  backGroundApp: {
    background: theme.palette.secondary
  }
}));


const Header = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    
  };
  
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
          anchorEl={anchorEl}

          color={theme.palette.secondary}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            color={theme.palette.secondary}
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
          <MenuItem 
            component={Link} to="/hikingStats"
            onClick={handleClose}
            >
           
              <ListItemIcon>
                <BarChart fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Hiking" />
              
          </MenuItem>
          <MenuItem
            component={Link} to="/runningStats"
            onClick={handleClose}
          >
            <ListItemIcon>
              <BarChart fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Running" />
          </MenuItem>
          <MenuItem
            component={Link} to="/climbingStats"
            onClick={handleClose}
          >
            <ListItemIcon>
              <BarChart fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Climbing" />
          </MenuItem>
        </Menu>
        <Typography background="secondary" variant="h6" className={classes.title}>
         
        </Typography>
        <ListItemIcon>
          <AccountCircle fontSize="small" />
        </ListItemIcon>
      </Toolbar>
    </AppBar>


/*
    <div className="container-fluid">
      <div className="dropdown float-left">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
          <Link className="dropdown-item" to="/climb">Climb</Link>
          <Link className="dropdown-item" to="/run">Run</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/rpi">RPi</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/">Home</Link>
        </div>
      </div>
      <button type="button" className="btn btn-info float-right">Action
      </button>      
    </div>
*/    
)
};

export default Header;

