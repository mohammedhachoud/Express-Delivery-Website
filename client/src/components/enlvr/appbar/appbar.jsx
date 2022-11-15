import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate} from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import './appbarstyle.css';
const pages = ['Products', 'en livraison', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard'];

const ResponsiveAppBar = () => {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
      <div className='kolch'>
    <div className="nav-bar">
    <i className='bx bx-menu sidebarOpen' ></i>
    <span className="logo navLogo"><a href="#">Express</a></span>

    <div className="menu">
        <div className="logo-toggle">
            <span className="logo"><a href="#">CodingLab</a></span>
            <i className='bx bx-x siderbarClose'></i>
        </div>

        <ul className="nav-links">
            <li><a href='/userboard'>My Parcels</a></li>
            <li><a href="/add">Add</a></li>
            <li><a href="/enlivraison">In delivery</a></li>
            <li><a onClick={logout}>Logout</a></li>
            <li><a href="#">Prices</a></li>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
        </ul>
       
    </div>

    
</div>
</div>
  );
};
export default ResponsiveAppBar;