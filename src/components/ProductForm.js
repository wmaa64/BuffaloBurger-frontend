import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import axios from '../api/axios';

const ProductForm = ({ currentProduct, onSave, categories }) => {
  const [name, setName] = useState({ en: '', ar: '' });
  const [description, setDescription] = useState({ en: '', ar: '' });
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [topselling, setTopselling] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name || { en: '', ar: '' });
      setDescription(currentProduct.description || { en: '', ar: '' });
      setPrice(currentProduct.price || '');
      setImage(currentProduct.image || '');
      setCategoryId(currentProduct.categoryId || '');
      setTopselling(currentProduct.topselling || false);
    } else {
      resetForm();
    }
  }, [currentProduct]);

  const resetForm = () => {
    setName({ en: '', ar: '' });
    setDescription({ en: '', ar: '' });
    setPrice('');
    setImage('');
    setCategoryId('');
    setTopselling(false);
  };

  const handleImageUpload = async () => {
    if (!imageFile) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const res = await axios.post('/api/products/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setImage(res.data.imageUrl);
    } catch (error) {
      console.error('Image upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, description, price, image, categoryId, topselling };
    if (!currentProduct) {
      productData.createdAt = new Date();
    }

    if (currentProduct) {
      await axios.put(`/api/products/${currentProduct._id}`, productData);
    } else {
      await axios.post('/api/products', productData);
    }

    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name (English)"
        value={name.en}
        variant="filled"
        size="small"
        onChange={(e) => setName({ ...name, en: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Name (Arabic)"
        value={name.ar}
        variant="filled"
        size="small"
        onChange={(e) => setName({ ...name, ar: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Price"
        value={price}
        variant="filled"
        size="small"
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        required
      />
      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
      <Button
        onClick={handleImageUpload}
        variant="contained"
        color="primary"
        disabled={uploading || !imageFile}
        fullWidth
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </Button>
      <TextField
        label="Image URL"
        value={image}
        variant="filled"
        size="small"
        onChange={(e) => setImage(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description (English)"
        value={description.en}
        variant="filled"
        size="small"
        onChange={(e) => setDescription({ ...description, en: e.target.value })}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        label="Description (Arabic)"
        value={description.ar}
        variant="filled"
        size="small"
        onChange={(e) => setDescription({ ...description, ar: e.target.value })}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        select
        label="Category"
        value={categoryId}
        variant="filled"
        size="small"
        onChange={(e) => setCategoryId(e.target.value)}
        fullWidth
        required
      >
        {categories.map((category) => (
          <MenuItem key={category._id} value={category._id}>
            {category.name.en}
          </MenuItem>
        ))}
      </TextField>
      <FormControlLabel
        control={
          <Checkbox
            checked={topselling}
            onChange={(e) => setTopselling(e.target.checked)}
            color="primary"
          />
        }
        label="Top Selling"
      />
      <Button type="submit" variant="contained" color="secondary" fullWidth>
        {currentProduct ? 'Update Product' : 'Add Product'}
      </Button>
    </form>
  );
};

export default ProductForm;
