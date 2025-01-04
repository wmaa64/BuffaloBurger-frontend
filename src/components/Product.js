import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, IconButton, Badge } from '@mui/material';
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';
//import { useNavigate } from 'react-router-dom';

const Product = ({ product, maxwd, maxhi, onAddProductToBasket }) => {
  const [basketQuantity, setBasketQuantity] = useState(0);

  //const navigate = useNavigate();

  useEffect( () =>{ 
    const getBasketQuantity = () => {
      const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
      if (userInfo) {
        // Get the basket items from localStorage
        const basketItems = JSON.parse(localStorage.getItem('basketItems') || '[]');
        const productInBasket = basketItems.find(item => item.productId._id === product._id);
        const productQuantity = productInBasket ? productInBasket.quantity : 0;
        setBasketQuantity(productQuantity);
      }else{return};
    }
    getBasketQuantity();

  },[product._id]);

  const AddBasketQuantity = ()=>{
    onAddProductToBasket(product._id);
    setBasketQuantity(prev => prev+1);
  }
  
  return (
    <Card sx={{ width: '100%', margin: 'auto' }}>
      <Link to={`/product/${product._id}`}  >
        <CardMedia 
            component="img" 
            image={product.image}
            alt={product.name.en}
            sx={{ width: maxwd , height: maxhi , objectFit: 'cover' }}
          />
      </Link>
      <CardContent>
        <Typography variant= "subtitle2"   >{product.name.en}</Typography>
        <Typography variant= "subtitle2"   >EGP {product.basePrice}</Typography>
      </CardContent>
      <IconButton color="primary" onClick={AddBasketQuantity}>
        <Badge 
            badgeContent={basketQuantity} 
            color="secondary" 
            anchorOrigin={{vertical: 'top', horizontal: 'right' }} 
            sx={{ '& .MuiBadge-badge': { top: -15, right: -25, padding: '0 4px' } }} >
          </Badge> 
        <AddShoppingCartIcon />
      </IconButton>
    </Card>
  );
};
 
export default Product;