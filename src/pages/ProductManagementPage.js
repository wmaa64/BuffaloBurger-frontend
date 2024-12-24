import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';

const ProductManagementPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // State to manage the current Product being edited
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Replace subcategories with categories

  // Check if the user is logged in by fetching userInfo from localStorage
  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  // Fetch products and categories on page load
  useEffect(() => {
    const fetchData = async () => {
      const productRes = await axios.get('/api/products');
      setProducts(productRes.data);
      const categoryRes = await axios.get('/api/categories'); // Fetch categories
      setCategories(categoryRes.data);
    };
    fetchData();
  }, [userInfo._id]);

  // Handle form save
  const handleFormSave = async () => {
    const res = await axios.get('/api/products');
    setProducts(res.data);
    setShowForm(false); // Hide the form after saving
    setCurrentProduct(null); // Reset currentProduct after save
  };

  // Handle add product click
  const handleAddProductClick = () => {
    setCurrentProduct(null); // Reset currentProduct when adding a new product
    setShowForm(true); // Show the form
  };

  // Handle edit product
  const handleEditProduct = (product) => {
    setCurrentProduct(product); // Populate the form with the selected product
    setShowForm(true); // Show the form
  };

  // Handle delete product
  const handleDeleteProduct = async (id) => {
    await axios.delete(`/api/products/${id}`);
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Products
      </Typography>
      <Grid container spacing={3}>
        {/* Left: Product Form */}
        <Grid item xs={4}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">
              {currentProduct ? 'Edit Product' : 'Add Product'}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProductClick}
              style={{ marginBottom: '16px' }}
            >
              Add New Product
            </Button>
            {showForm && (
              <ProductForm
                currentProduct={currentProduct}
                onSave={handleFormSave}
                categories={categories} // Pass categories to populate the dropdown
              />
            )}
          </Paper>
        </Grid>

        {/* Right: Product Table */}
        <Grid item xs={8}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <ProductTable
              products={products}
              onEditProduct={handleEditProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductManagementPage;
