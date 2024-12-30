import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Container, Grid } from '@mui/material';
import Header from '../components/Header';
import NavigationBox from '../components/NavigationBox';
import ProductList from '../components/ProducList';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const [categories, setCategories] = useState([]);
  const [basketCount, setBasketCount] = useState(0);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories and their products
    const fetchCategories = async () => {
      try {
        const res = await axios.get('/api/categories/categories-with-products');
        setCategories(res.data);
      } catch (error) {
        console.error('Failed to fetch categories with products:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    // Scroll to the category if a hash is present in the URL
    if (location.hash) {
      const categoryId = location.hash.substring(1);
      const element = document.getElementById(categoryId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

 // Function to add a product to the basket
 const handleAddToBasket = async (productId) => {
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

  if (!userInfo) {
    // If the user is not logged in, navigate them to the login page
    navigate('/login');
  } else {
    try {
      const response = await axios.post('/api/basket/add', { userId: userInfo._id, productId, quantity: 1, });

      // Optionally, update basket count in localStorage or trigger UI update
      const updatedBasket = await axios.get(`/api/basket/${userInfo._id}`);
      localStorage.setItem('basketItems', JSON.stringify(updatedBasket.data.items));
      
      const basketItems = JSON.parse(localStorage.getItem('basketItems'));
      //const basketItems = localStorage.getItem('basketItems');
      setBasketCount(basketItems.length);

      alert('Product added to basket!');
    } catch (error) {
      console.error('Error adding product to basket:', error);
      alert('Failed to add product to basket.');
    }
  }
};


  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navigation Box */}
      <Box sx={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <NavigationBox />
      </Box>

      {/* Categories and Products */}
      <Container sx={{ marginTop: 2 }}>
        {categories.map((category) => (
          <Box key={category.id} id={category.name.en}  sx={{ marginBottom: 4 }}>
            <Typography variant="h4" sx={{    fontSize: {
                xs: '1.5rem', // Small screen
                sm: '2rem',   // Medium screen
                md: '3.5rem', // Large screen
              }, fontWeight: 'bold' , textAlign: 'center' ,color: '#ff5f00', marginBottom: 2 }}>
              {category.name.en}
            </Typography>
            <ProductList products={category.products} maxwd={200} onAddToBasket={handleAddToBasket} />

          </Box>
        ))}
      </Container>
    </div>
  );
};

export default MenuPage;

/*
            <Grid container spacing={2}>
              {category.products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                  <Box
                    sx={{
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      padding: '16px',
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name.en}
                      style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover',
                        marginBottom: '8px',
                      }}
                    />
                    <Typography variant="subtitle1">{product.name.en}</Typography>
                    <Typography variant="body2">{product.description.en}</Typography>
                    <Typography variant="body1" sx={{ marginTop: '8px', fontWeight: 'bold' }}>
                      ${product.basePrice}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

*/