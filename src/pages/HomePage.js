import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { CircularProgress , Typography, Container, Grid, Paper, Button} from '@mui/material';
import ProductList from '../components/ProducList';
//import CategoryTreeView from '../components/CategoryTreeView';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ImageCarousel from '../components/ImageCarousel';
import NavigationBox from '../components/NavigationBox';


// Importing images from src/images folder
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';

const HomePage = () => {
  const { t, i18n } = useTranslation();  // Initialize translation
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isNewProduct,setIsNewProduct] = useState(true);
  const [basketCount, setBasketCount] = useState(0);

  const images = [image1,image2,image3,image4,image5,image6,image7];
 
  //const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
 
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // Change language
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
  }, [basketCount]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Make the request to the backend's /api/products endpoint
        const response = await axios.get('/api/products/topselling');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, []);
  
 // Fetch categories and subcategories from the backend
 useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  fetchCategories();
}, []);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    (isNewProduct) && setIsNewProduct(false);
    try {
        const response = await axios.get(`/api/products/searching?query=${searchTerm}`);
        setProducts(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
    setLoading(false);
};

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
      <div style={{margin:0, padding:0}}>
        <Header  currentBasketCount={basketCount} onSearch={handleSearch}  />
      </div>
      <div style={{margin:0, padding: 0 }}>
        <ImageCarousel images={images} interval={5000} />
      </div>
      <div style={{margin:0, padding: 0 }}>
        <NavigationBox />
      </div>
      <div>
        {(products.length>0) && <Typography variant='h5' sx={{ paddingX: 7, paddingY: 2, color: '#ff5f00', fontWeight: 'bold' }}>{t('TopSellingProducts')}</Typography>}

        {(loading) ? 
          ( <CircularProgress /> ) : ( <ProductList products={products} maxwd={200} onAddToBasket={handleAddToBasket} />)
        }

      </div>
    </div>
  );
};

export default HomePage;
