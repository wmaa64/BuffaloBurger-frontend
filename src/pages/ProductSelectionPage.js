import React, { useState, useEffect } from 'react';
import { Box, Grid , Typography, Button, FormControl, RadioGroup, FormControlLabel, Radio , Checkbox , CircularProgress} from '@mui/material';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const ProductSelectionPage = () => {
    const { id } = useParams(); // Get product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [basketCount, setBasketCount] = useState(0);

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBread, setSelectedBread] = useState(null);
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    setBasketCount(basketItems.length); // Set the basket count to the number of items in the basket
  }, [id]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setProduct(res.data);
        setTotal(res.data.basePrice);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product && (product.sizes?.length >0) && !selectedSize) {
      setSelectedSize(product.sizes[0]); // Set default size when the product is loaded
    }
  }, [product, selectedSize]);
  
  useEffect(() => {
    if (product && (product.breadTypes?.length >0) && !selectedBread) {
      setSelectedBread(product.breadTypes[0]); // Set default bread when the product is loaded
    }
  }, [product, selectedBread]);
  
  useEffect(() => {
    if (product && (product.combos?.length >0) && !selectedCombo) {
      setSelectedCombo(product.combos[0]); // Set default combo when the product is loaded
    }
  }, [product, selectedCombo]);
  
  if (loading) {
    return <CircularProgress />;
  }

  const handleSizeChange = (event, size) => {
    // Remove the previous size price if any
    if (selectedSize) {
      setTotal((prevTotal) => prevTotal - selectedSize.price);
    }

    // Add the new size price
    setTotal((prevTotal) => prevTotal + size.price);

    // Update selected size
    setSelectedSize(size);
  };

  const handleBreadChange = (event, bread) => {
    // Remove the previous bread price if any
    if (selectedBread) {
      setTotal((prevTotal) => prevTotal - selectedBread.price);
    }

    // Add the new size price
    setTotal((prevTotal) => prevTotal + bread.price);

    // Update selected size
    setSelectedBread(bread);
  };

  const handleComboChange = (event, combo) => {
    // Remove the previous bread price if any
    if (selectedCombo) {
      setTotal((prevTotal) => prevTotal - selectedCombo.price);
    }

    // Add the new size price
    setTotal((prevTotal) => prevTotal + combo.price);

    // Update selected size
    setSelectedDrink(null);
    setSelectedCombo(combo);
  };

  const handleExtrasChange = (event, extra) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add to selectedExtras if checked
      setSelectedExtras((prev) => [...prev, value]);
      setTotal((prev) => prev + extra.price);
    } else {
      // Remove from selectedExtras if unchecked
      setSelectedExtras((prev) => prev.filter((extra) => extra !== value));
      setTotal((prev) => prev - extra.price);
    }
  };

  const handleAddToBasket = () => {
    const selectedOptions = {
      productId: product._id,
      name:{ en: product.name.en, ar: product.name.ar},
      image: product.image,
      productType: product.productType,
      size: { en: (selectedSize? selectedSize.size.en : '')   , ar: (selectedSize? selectedSize.size.ar : '') },
      breadType: { en: (selectedBread? selectedBread.breadType.en : '' ) , ar: (selectedBread? selectedBread.breadType.ar : '') },
      combo: (selectedCombo? selectedCombo : null) ,
      comboDrink: (selectedDrink? selectedDrink : null) ,
      extras: selectedExtras,
      quantity: 1,
      Price: total,
      totalPrice: total,
    };
  
    // Retrieve existing basket items from localStorage
    const existingBasket = JSON.parse(localStorage.getItem('basketItems')) || [];
    
    // Add new item to the basket
    const updatedBasket = [...existingBasket, selectedOptions];
  
    // Save updated basket back to localStorage
    localStorage.setItem('basketItems', JSON.stringify(updatedBasket));

    setBasketCount(updatedBasket.length); // Set the basket count to the number of items in the basket
  
    alert('Item added to the basket!');
  };
  
  
  return (
<Box>
    <div style={{margin:0, padding:0}}>
        <Header  currentBasketCount={basketCount}  />
    </div>

    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', // Light gray background  #f8f9fa
        position: 'relative'
    }}
    >
        <div>
            <Box    
                component="img"
                src={product.image}
                alt={product.name.en}
                sx={{
                width: 150,
                height: 150,
                }}
            />
        </div>
        <div>
            <Typography variant="h6"     sx={{ paddingX: '20px' , color: 'white' , width: '100%' , color: '#ff5f00' , fontWeight: 'bold'}} >{product.name.en}</Typography>
            <Typography variant="body1"  sx={{ paddingX: '20px' , color: 'white' , width: '75%'  }} >{product.description.en}</Typography>
            
        </div>
    </Box>

    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}
        >
            {/* Sizes */}
            {product.sizes?.length >0 && (
                <FormControl>
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center'}} >SIZE</Typography>
                
                <RadioGroup
                    row
                    value={selectedSize ? selectedSize.size.en : '' }
                    onChange={(e) => {
                        const size = product.sizes.find((s) => s.size.en === e.target.value );
                        handleSizeChange(e,size);
                    }}
                >
                    {product.sizes.map((size, index) => (
                    <FormControlLabel
                        key={index}
                        value={size.size.en}
                        control={<Radio sx={{ color: '#ff5f00' , 
                                            '&.Mui-checked': { color: '#ff5f00'} }}  />}
                        label={ size.price>0 ? `${size.size.en} (+EGP${size.price})`: `${size.size.en}` }
                    />
                    ))}
                </RadioGroup>
                

                </FormControl>
            )}
    </Box>

    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    }}
    >

        {/* Bread Types */}
        {product.breadTypes?.length >0 && (
            <FormControl>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center'}} >Bread</Typography>
            <RadioGroup
                row
                value={selectedBread ? selectedBread.breadType.en : '' }
                onChange={(e) => {
                    const bread = product.breadTypes.find((b) => b.breadType.en === e.target.value  );
                    handleBreadChange(e, bread);
                }}
            >
                {product.breadTypes.map((bread, index) => (
                <FormControlLabel
                    key={index}
                    value={bread.breadType.en}
                    control={<Radio sx={{ color: '#ff5f00' , 
                                        '&.Mui-checked': { color: '#ff5f00'} }}  />}
                    label={ bread.price>0 ? `${bread.breadType.en} (+EGP${bread.price})`: `${bread.breadType.en}` }
                />
                ))}
            </RadioGroup>
            </FormControl>
        )}
    </Box>

    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}
        >

        {/* Combos */}
        {product.combos?.length >0 && (
            <FormControl>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center'}} >Combo Options</Typography>
            <RadioGroup
                row
                value={selectedCombo ? selectedCombo.comboName.en : '' }
                onChange={(e) => {
                    const combo = product.combos.find( (c) => c.comboName.en === e.target.value);
                    handleComboChange(e,combo);
                }}
            >
                <Grid container spacing={2} sx={{ paddingX: '10%'}} >
                    {product.combos.map((combo, index) => (
                    <Grid item xs={6} key={index}  > {/* xs={6} makes 2 items per row */}
                        <FormControlLabel
                            key={index}
                            value={combo.comboName.en}
                            control={<Radio sx={{ color: '#ff5f00' , 
                                        '&.Mui-checked': { color: '#ff5f00'} }}  />}
                            label={ 
                                <Box>
                                    <Typography variant='body1' fontWeight='bold' >{combo.comboName.en}</Typography>
                                    <Typography variant='body2' color='grey' >{`${combo.description.en}`}</Typography>
                                </Box>
                                }
                            sx={{ paddingX: '10%'}}
                        />
                        
                    </Grid>
                    ))}
                </Grid>
            </RadioGroup>
            </FormControl>
        )}
    </Box>

    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}
        >
            {/* Combo Drinks */}
            {(selectedCombo &&
                (selectedCombo.includesDrink && (
                    <FormControl>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center'}} >DRINKS</Typography>
                    
                    <RadioGroup
                        row
                        value={selectedDrink}
                        onChange={(e) => setSelectedDrink(e.target.value) }
                    >
                        { selectedCombo.drinkOptions.map((drink, index) => (
                        <FormControlLabel
                            key={index}
                            value={drink.en}
                            control={<Radio sx={{ color: '#ff5f00' , 
                                                '&.Mui-checked': { color: '#ff5f00'} }}  />}
                            label={drink.en}
                        />
                        ))}
                    </RadioGroup>
                    

                    </FormControl>
                ))
            )}
    </Box>

    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            marginBottom: '15%'
        }}
        >

        {/* Extras */}
        {product.extras?.length >0 && (
            <FormControl>
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center'}} >Extras</Typography>
                <Grid container spacing={2} sx={{ paddingX: '25%' }} >                

                    {product.extras.map((extra, index) => (
                        <Grid item xs={6} key={index}>
                            <FormControlLabel
                                key={index}
                                value={extra.extraName.en}
                                control={<Checkbox
                                    value={extra.extraName.en}
                                    onChange={(e) => handleExtrasChange(e, extra)}
                                    sx={{ color: '#ff5f00' , 
                                        '&.Mui-checked': { color: '#ff5f00'} }}  
                                />}
                                label={`${extra.extraName.en}`}
                                sx={{ paddingX: '10%'}}
                            />
                        </Grid>
                    ))}
                </Grid>
            </FormControl>
        )}
    </Box>

    <Box
          sx={{
            position: 'fixed', // Fix the position at the bottom
            bottom: 0,
            width: '100%',
            backgroundColor: 'white', // Background color to overlay content
            boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
            zIndex: 1000, // Ensure it stays on top
            padding: 2,
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Align items vertically
            gap: 2, // Space between items
          }}
    >
        <Button onClick={handleAddToBasket} variant="contained" sx={{ backgroundColor: '#ff5f00'}}   >
            Add to Basket
        </Button>
    
        <Typography variant="h6" fontWeight="bold">
            Total: EGP {total}
        </Typography>
    </Box>
    
    
</Box>
  );
};

export default ProductSelectionPage;
