import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import Header from '../components/Header';
import axios from '../api/axios';



const CheckoutPage = () => {
  const [basketItems, setBasketItems] = useState(
    JSON.parse(localStorage.getItem('basketItems')) || []
  );
    
    const [basketCount, setBasketCount] = useState(
    JSON.parse(localStorage.getItem('basketItems'))?.length || 0
  );
    const [orderTotalPrice, setOrderTotalPrice] = useState(0);

  // Contact Information State
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  // Address Information State
  const [addressInfo, setAddressInfo] = useState({
    city: '',
    area: '',
    streetAddress: '',
    buildingNumber: '',
    apartmentNumber: '',
    floorNumber: '',
    extraDetails: '',
  });

  useEffect(() => {
    if (basketCount>0){
        // Calculate total price for the order
        setOrderTotalPrice( basketItems.reduce((total, item) => total + item.totalPrice, 0));
    }
  }, [])

  // Handlers for Input Changes
  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  // Handle Place Order
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const orderDetails = {
      contactInfo,
      addressInfo,
      basketItems: basketItems.map((item) => ({
        productId: item.productId,
        name: item.name,
        image: item.image,
        productType: item.productType,
        size: item.size,
        breadType: item.breadType,
        combo: item.combo,
        comboDrink: item.comboDrink,
        extras: item.extras,
        quantity: item.quantity,
        price: item.Price, // Single unit price
        totalPrice: item.totalPrice, // Quantity-adjusted price
      })),
      orderTotalPrice: orderTotalPrice,
      status: 'pending',
    };

    try {
        const response = await axios.post('/api/orders', orderDetails);

        //extract the order _id from the response
        const orderId = response.data._id;
        
        alert(`Order placed successfully! Order ID: ${orderId} , Please Save it`);
        alert(`Order Details Sended to your Email, Please Check your Spam, and Mark it as Not Spam`);

        localStorage.removeItem('basketItems'); // Clear the basket
        setBasketItems([]); // Update state
        setBasketCount(0);
      } catch (error) {
        console.error('Error placing order:', error);
        alert('Failed to place order.');
      }
  };

  return (
    <Box>
      {/* Header Component */}
      <Header currentBasketCount={basketCount} />

      {/* Contact Information Section */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Contact Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={contactInfo.fullName}
              onChange={handleContactChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleContactChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={contactInfo.email}
              onChange={handleContactChange}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Address Information Section */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Address Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={addressInfo.city}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Area"
              name="area"
              value={addressInfo.area}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Street Address"
              name="streetAddress"
              value={addressInfo.streetAddress}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Building Number"
              name="buildingNumber"
              value={addressInfo.buildingNumber}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Apartment Number"
              name="apartmentNumber"
              value={addressInfo.apartmentNumber}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Floor Number"
              name="floorNumber"
              value={addressInfo.floorNumber}
              onChange={handleAddressChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Extra Details"
              name="extraDetails"
              value={addressInfo.extraDetails}
              onChange={handleAddressChange}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Place Order Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          padding: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaceOrder}
          sx={{ backgroundColor: '#ff5f00' }}
        >
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
