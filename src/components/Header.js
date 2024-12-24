import React, { useState, useEffect } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { AppBar, Toolbar, IconButton, Typography, Badge, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link, json, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslation } from 'react-i18next';
import { Language as LanguageIcon } from '@mui/icons-material';
import Flag from 'react-world-flags';
import logoImage from '../images/headerLogo.jpg';

const Header = ({ currentBasketCount, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [basketCount, setBasketCount] = useState(currentBasketCount || 0);
    const { t, i18n } = useTranslation(); // Initialize useTranslation
    const isMenuOpen = Boolean(anchorEl);
    const theme = useTheme();
    const navigate = useNavigate();

    // Function to handle language change
    const handleLanguageChange = (lng) => {
      i18n.changeLanguage(lng); // Change the language
  };
        
    // Check if the user is logged in by fetching userInfo from localStorage
    const userInfo = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) : null ;

     
    // Fetch the basket count when user logs in
    useEffect(() => {
      const basketItems = JSON.parse(localStorage.getItem('basketItems'));
      if (userInfo && basketItems) {
        setBasketCount(basketItems.length);
      }
    }, []);

 
    useEffect(() =>{
      if (currentBasketCount!== undefined){
        setBasketCount(currentBasketCount);
      }
    },[currentBasketCount]);

    const handleLogout = () => {
      localStorage.removeItem('userInfo') ;
      localStorage.removeItem('basketItems'); // Clear basket on logout
      setBasketCount(0);
      navigate('/login');
    }      


    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      </Menu>
    );
  
    const handleSearch_ = ()=>{
        onSearch(searchTerm);
    }

    const goToBasket = () => {
      if (userInfo){ 
        navigate(`/basket/${userInfo._id}`); // Navigate to the basket page
      }
    };    

    return (
        <AppBar position="static" style={{margin:0, padding:0, backgroundColor: "black" }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Left Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton color="inherit" onClick={() => handleLanguageChange(i18n.language === 'en' ? 'ar' : 'en')}>
                {i18n.language === 'en' ? 
                  (
                    <Box display="flex" alignItems="center">
                      <Flag code="EG" style={{ width: 25, height: 20, marginLeft: 4, marginRight: 4  }} />
                      <Typography variant="body2">AR</Typography>
                    </Box>
                  ) : (
                    <Box display="flex" alignItems="center">
                      <Flag code="US" style={{ width: 25, height: 20, marginLeft: 4, marginRight: 4 }} />
                      <Typography variant="body2">EN</Typography>
                    </Box>
                  )}
              </IconButton>

              {/* Shopping Basket Icon */}
              <IconButton color="inherit" onClick={goToBasket} >
                <Badge badgeContent={basketCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>

            {/* Center Section */}
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
              {/* Icon */}
              <Box
                component="img"
                src={logoImage}
                alt="icon"
                sx={{ width: 200 , height: 60 }}
              />
            </Typography>

            {/* Right Section */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                {userInfo ? (
                <Box display='flex' gap={2}>
                  <Typography variant="h6" style={{ minWidth: '30vh' }} >
                      <span>Welcome, {userInfo.name} </span>
                  </Typography>

                  {/* check is seller to display Seller DashBoard */}
                  {(userInfo.isSeller) && 
                      <Link to='/dashboard' >
                        <Box sx={{padding: '8px',backgroundColor: '#f0f0f0',borderRadius: '4px','&:hover': {backgroundColor: '#e0e0e0'}}}>DashBoard</Box>
                      </Link>
                  }

                  <Link to='#' onClick={handleLogout} >
                    <Box sx={{padding: '8px',backgroundColor: '#f0f0f0',borderRadius: '4px','&:hover': {backgroundColor: '#e0e0e0'}}}>Logout</Box>
                  </Link>
                </Box>
                  
              ) : (
                <Box  display='flex' gap={2} >
                  <Link to='/register'>
                    <Box sx={{padding: '8px',backgroundColor: 'black', color: 'white', fontWeight:'bold', '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>{t('register')}</Box>
                  </Link>
                  <Link to='/login' >
                    <Box sx={{padding: '8px',backgroundColor: 'black',color: 'white', fontWeight: 'bold','&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>{t('login')}</Box>
                  </Link>
                </Box>
              )}
            </Box>

        </Toolbar>
        {renderMenu}
      </AppBar>
    );
};

export default Header;
