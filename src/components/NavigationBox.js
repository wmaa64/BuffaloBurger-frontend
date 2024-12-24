import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';

// Importing images from src/images folder
import offersImg from '../images/offers.jpg';
import burgerImg from '../images/burger.jpg';
import chickenImg from '../images/chicken.jpg';
import ketoImg from '../images/kito.jpg';
import appetizersImg from '../images/appetizers.jpg';
import saucesImg from '../images/sauces.jpg';
import kidsmealImg from '../images/kidsmeal.jpg';
import dessertImg from '../images/dessert.jpg';
import drinksImg from '../images/drinks.jpg';

const NavigationBox = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        padding: 1,
        backgroundColor: 'black', // Light gray background  #f8f9fa
        borderRadius: 2,
      }}
    >
        {/* Offers */}
        <IconButton
            onClick={() => handleNavigation('/login')}
        >
            <Box    
                component="img"
                src={offersImg}
                alt='Offers'
                sx={{
                width: 80,
                height: 80,
                }}
            />
        </IconButton>

       {/* burger */}
       <IconButton
            onClick={() => handleNavigation('/login')}
        >
            <Box    
                component="img"
                src={burgerImg}
                alt='Offers'
                sx={{
                width: 80,
                height: 80,
                }}
            />
        </IconButton>

       {/* chicken */}
       <IconButton
            onClick={() => handleNavigation('/login')}
        >
            <Box    
                component="img"
                src={chickenImg}
                alt='Offers'
                sx={{
                width: 80,
                height: 80,
                }}
            />
        </IconButton>

       {/* keto */}
       <IconButton
            onClick={() => handleNavigation('/login')}
        >
            <Box   
                component="img"
                src={ketoImg}
                alt='Offers'
                sx={{
                width: 80,
                height: 80,
                }}
            />
        </IconButton>

       {/* appetizers */}
       <IconButton
            onClick={() => handleNavigation('/login')}
        >
            <Box  
                component="img"
                src={appetizersImg}
                alt='Offers'
                sx={{
                width: 80,
                height: 80,
                }}
            />
        </IconButton>

       {/* sauces */}
       <IconButton
            onClick={() => handleNavigation('/login')}
        >
            <Box  
                component="img"
                src={saucesImg}
                alt='Offers'
                sx={{
                width: 80,
                height: 80,
                }}
            />
        </IconButton>

       {/* kidsmeal */}
       <IconButton
            onClick={() => handleNavigation('/login')}
        >
            <Box  
                component="img"
                src={kidsmealImg}
                alt='Offers'
                sx={{
                width: 80,
                height: 80,
                }}
            />
        </IconButton>

       {/* dessert */}
       <IconButton
            onClick={() => handleNavigation('/login')}
        >
            <Box  
                component="img"
                src={dessertImg}
                alt='Offers'
                sx={{
                width: 80,
                height: 80,
                }}
            />
        </IconButton>

       {/* drinks */}
       <IconButton
            onClick={() => handleNavigation('/login')}
        >
            <Box  
                component="img"
                src={drinksImg}
                alt='Offers'
                sx={{
                width: 80,
                height: 80,
                }}
            />
        </IconButton>


    </Box>
  );
};

export default NavigationBox;
