import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";
import logoImage from '../images/headerLogo.jpg';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box component="footer"
      sx={{
        backgroundColor: "black",
        padding: "20px 40px",
        marginTop: "auto",
        position: "relative", // Enables positioning of child element
      }}
    >
        {/* Logo Section */}
        {/* Icon */}
        <Box  component="img"
        src={logoImage}
        alt="icon"
        sx={{ width: 230 , height: 85 , marginBottom: 2}}
        />

        {/* Links and Language Section */}
        <Grid container spacing={4} sx={{ marginBottom: "8em" }}>
            {/*First Columns */}
            <Grid  item
                xs={12}
                sm={6}
                md={2}
                key={1}
                sx={{ textAlign: "left" }}
            >
                <Link to='/login'   
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Menu</Box>
                </Link>

                <Link to='/login'
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Home</Box>
                </Link>

                <Link to='/login' 
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Cart Details</Box>
                </Link>

                <Link to='/login' 
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Loyalty</Box>
                </Link>
            </Grid>

            {/*Second Columns */}
            <Grid  item
                xs={12}
                sm={6}
                md={2}
                key={1}
                sx={{ textAlign: "left" }}
            >
                <Link to='/login'   
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>About us</Box>
                </Link>

                <Link to='/login'
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Franchise Request</Box>
                </Link>

                <Link to='/login' 
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Our Branches</Box>
                </Link>

                <Link to='/login' 
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Privacy policy</Box>
                </Link>

                <Link to='/login' 
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Terms and conditions</Box>
                </Link>

            </Grid>

            {/*Third Columns */}
            <Grid  item
                xs={12}
                sm={6}
                md={2}
                key={1}
                sx={{ textAlign: "left" }}
            >
                <Link to='/login'   
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Login</Box>
                </Link>

                <Link to='/register'
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>Signup</Box>
                </Link>
            </Grid>

            {/*Fourth Columns */}
            <Grid  item
                xs={12}
                sm={6}
                md={2}
                key={1}
                sx={{ textAlign: "left" }}
            >
                <Typography 
                    variant="body1"
                    sx={{color: 'white'}}
                >
                    Talk to us
                </Typography>
                <Link to='/login' 
                    variant="h5"  
                    underline= "none" >
                    <Box sx={{margin: '0px 0px 10px 15px',backgroundColor: 'black', color: 'white', cursor: 'pointer' , fontWeight: 'bold' , '&:hover': {backgroundColor: 'black', color: '#ff5f00'}}}>19914</Box>
                </Link>

            </Grid>

        </Grid>

        <Typography
            variant="body1"
            sx={{
            position: "absolute", // Position relative to the footer box
            bottom: "20px", // Adjust the distance from the bottom
            left: "20px", // Adjust alignment relative to the container
            color: "white",
            }}
        >
            Egytian Buffalo Burger Inc.
        </Typography>        

    </Box>
  );
};

export default Footer;
