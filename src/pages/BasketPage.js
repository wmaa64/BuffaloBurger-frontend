import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Box, IconButton, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const BasketPage = ({maxwd}) => {
  const [basketItems, setBasketItems] = useState([]);
  const [basketTotalPrice, setBasketTotalPrice] = useState(0);

  useEffect(() => {
    const itemsInBasket = JSON.parse(localStorage.getItem('basketItems')) || [];
    console.log('Basket Items:', itemsInBasket);
    setBasketItems(itemsInBasket); // Set the basketitems of items in the basket
    calculateTotalPrice(itemsInBasket);
  }, []);

/*
  useEffect(() => {
    // Fetch basket items for the logged-in user
    const fetchBasketItems = async () => {
      try {
        const response = await axios.get(`/api/basket/${userId}`);
        setBasketItems(response.data.items);  // Updated to reflect 'items' array from basket
        calculateTotalPrice(response.data.items);
      } catch (error) {
        console.error('Error fetching basket items:', error);
      }
    };

    fetchBasketItems();
  }, [userId]);
*/

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.totalPrice, 0); // 'productId' references Product
    setBasketTotalPrice(total);
  };


  const handleRemoveItem = (id) => {
    const updatedBasket = basketItems.filter(item => item.productId != id) ;
    // Save updated basket back to localStorage
    localStorage.setItem('basketItems', JSON.stringify(updatedBasket));

    setBasketItems(updatedBasket);

    calculateTotalPrice(updatedBasket);
  };

  const handleDeleteUserBasket = () => {
        // Clear the local basket state
        localStorage.removeItem('basketItems');
        setBasketItems([]);
        setBasketTotalPrice(0);
        alert('User basket cleared successfully!');
  };

/*
  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post(`/api/orders`, {
        userId,
        products: basketItems,
        totalPrice
      });
      alert('Order Placed successefully');

      if (response.status === 201) {
        handleDeleteUserBasket(userId);
        handlePayment(response.data._id);
      }
      
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order');
    }
  };

  const handlePayment = async (orderId) => {
    try {
      const orderData = {
        userId,           // The user ID from params
        products: basketItems,  // The basket items (products and quantities)
        totalPrice        // Total price of the order
      };
  
      // Step 1: Call the backend to initiate Paymob payment
      const response = await axios.post('/api/payments/paymob', orderData);
  
      if (response.status === 200) {
        const { paymentKey } = response.data;
        
        // Step 2: Redirect user to Paymob’s payment page
        window.location.href = `https://accept.paymob.com/api/acceptance/iframes/872596?payment_token=${paymentKey}`;
      } else {
        alert('Error initiating payment.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Error initiating payment.');
    }
  };
*/  

const updateQuantity = (productId, newQuantity) => {
  const updatedBasket = basketItems.map((item) => 
    (item.productId === productId) ? { ...item, quantity: newQuantity, totalPrice: newQuantity * item.Price } : item
  );

  setBasketItems(updatedBasket);
  calculateTotalPrice(updatedBasket)
  localStorage.setItem('basketItems', JSON.stringify(updatedBasket));

};

const withOutPrice = (str) => {
  const end = str.indexOf("(");
  return str.substring(0,end);
};

  return (

  <Box sx={{ display: 'flex', flexDirection: 'row', padding: 1, gap: 1 }}>

    {/* Left Section: Grid for Basket Items */}
    <Box sx={{ flex: 4 }}>
      <Typography variant="h5" sx={{ marginBottom: '20px'}} >Your Basket</Typography>

      {/* Header Row */}
      <Grid container spacing={2} sx={{ borderBottom: '1px solid #ccc', paddingBottom: 1, marginBottom: 2 }}>

        <Grid item xs={1}>
          <Typography variant="subtitle1" fontWeight="bold">Card#</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle1" fontWeight="bold">Card</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" fontWeight="bold">Quantity</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" fontWeight="bold">Price (EGP)</Typography>
        </Grid>
      </Grid>

      {/* Basket Items */}
      {basketItems.map((item, index) => (
        <Grid container spacing={2} key={item.productId} sx={{ borderBottom: '1px solid #ccc', paddingBottom: 1, marginBottom: 2 }}>
          <Grid item xs={1}>
            <Typography variant="body2">{index + 1}</Typography>
          </Grid>
          <Grid item xs={5} >
            <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            position: 'relative'
                        }}
                        >

             <div style={{ marginRight: '20px' }}>
                <Box    
                    component="img"
                    src={item.image}
                    alt={item.productId}
                    sx={{ 
                    width: 120,
                    height: 120,
                    }}
                />
            </div>
            <div>
                <Typography variant="subtitle2" sx={{ width: '100%' , color: '#ff5f00' , fontWeight: 'bold' }} >
                  {item.name.en}</Typography>
                <Typography variant="subtitle2" sx={{ width: '100%'  }} >
                  {withOutPrice(item.combo.description.en)}</Typography>
                <Typography variant="subtitle2" sx={{ width: '100%'  }} >
                  {item.size.en}, {item.breadType.en}, {item.comboDrink? withOutPrice(item.comboDrink) : ''} 
                </Typography>
                
                {item.extras.map((extra, index) => (
                    <Typography variant="subtitle2" sx={{ width: '100%'  }} >{withOutPrice(extra)}, </Typography>
                ))}
            </div>
            </Box>
            <IconButton color="secondary" onClick={() => handleRemoveItem(item.productId)} title='Remove Item From Basket'>
              <DeleteIcon />
            </IconButton>
          </Grid>

          <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
            <IconButton
              size="small"
              color='black'
              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
              disabled={item.quantity <= 1} // Disable if quantity is 1
              sx={{
                border: '1px solid black',
                borderRadius: '50%',
                padding: 0.5,
                width: '20px',
                height: '20px',
              }}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ marginX: 2 }}>
              {item.quantity}
            </Typography>
            <IconButton
              size="small"
              color='#ff5f00'
              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
              sx={{
                border: '1px solid #ff5f00',
                borderRadius: '50%',
                padding: 0.5,
                width: '20px',
                height: '20px',
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center',}} >
            <Typography variant="subtitle2" sx={{ width: '100%'  }} >{item.totalPrice}</Typography>
          </Grid>

        </Grid>
)
      )}
    </Box>

    {/* Right Section: Total Price and Place Order */}
    <Box
        sx={{
          height: '100vh',
          flex: 1,
          border: '1px solid #ccc',
          borderRadius: 2,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant='body1' sx={{ fontWeight: 'bold' , color: '#ff5f00' , paddingX: '10px' }}>Basket Summary</Typography>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between', // Space out items to the left and right
            alignItems: 'top', // Vertically align items
            paddingY: 1,
            paddingX: 2,  
          }}
        >
            <Typography variant='body1' sx={{ fontWeight: 'bold' , color: '#ff5f00'}}>Total</Typography>
            <Typography variant='body1' sx={{ fontWeight: 'bold' , color: '#ff5f00'}}>EGP {basketTotalPrice.toFixed(2)}</Typography>
        </Box>
        
          <Button variant="contained" color="primary" title='Place Order' 
            sx={{ position: 'sticky' , bottom: '0' , width: '100%' , backgroundColor: '#ff5f00' ,
            '&:hover': {backgroundColor: '#ff5f00'}
            }} >
            Place Order
          </Button>


    </Box>
  
</Box>
  );
};

export default BasketPage;

