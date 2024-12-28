import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import axios from '../api/axios';

const ProductForm = ({ currentProduct, onSave, categories }) => {
  const [name, setName] = useState({ en: '', ar: '' });
  const [description, setDescription] = useState({ en: '', ar: '' });
  const [basePrice, setBasePrice] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [combos, setCombos] = useState([]);
  const [newCombo, setNewCombo] = useState({
    comboName: { en: '', ar: '' },
    price: '',
    description: { en: '', ar: '' },
    image: '',
    imageFile: null,
    drinks: [],
  });
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name || { en: '', ar: '' });
      setDescription(currentProduct.description || { en: '', ar: '' });
      setBasePrice(currentProduct.basePrice || '');
      setImage(currentProduct.image || '');
      setCategoryId(currentProduct.categoryId || '');
      setCombos(currentProduct.combos || []);
      setExtras(currentProduct.extras || []);
    } else {
      resetForm();
    }
  }, [currentProduct]);

  const resetForm = () => {
    setName({ en: '', ar: '' });
    setDescription({ en: '', ar: '' });
    setBasePrice('');
    setImage('');
    setCategoryId('');
    setCombos([]);
    setExtras([]);
  };

  const handleImageUpload = async () => {
    if (!imageFile) return;

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const res = await axios.post('/api/products/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setImage(res.data.imageUrl);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const handleComboImageUpload = async (comboIndex) => {
    const combo = combos[comboIndex];
    if (!combo.imageFile) return;

    const formData = new FormData();
    formData.append('image', combo.imageFile);

    try {
      const res = await axios.post('/api/products/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const updatedCombos = [...combos];
      updatedCombos[comboIndex].image = res.data.imageUrl;
      setCombos(updatedCombos);
    } catch (error) {
      console.error('Combo image upload failed:', error);
    }
  };

  const handleAddCombo = () => {
    setCombos([...combos, newCombo]);
    setNewCombo({
      comboName: { en: '', ar: '' },
      price: '',
      description: { en: '', ar: '' },
      image: '',
      imageFile: null,
      drinks: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, description, basePrice, image, categoryId, combos, extras };
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
        onChange={(e) => setName({ ...name, en: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Name (Arabic)"
        value={name.ar}
        onChange={(e) => setName({ ...name, ar: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Description (English)"
        value={description.en}
        onChange={(e) => setDescription({ ...description, en: e.target.value })}
        fullWidth
        multiline
        rows={3}
        required
      />
      <TextField
        label="Description (Arabic)"
        value={description.ar}
        onChange={(e) => setDescription({ ...description, ar: e.target.value })}
        fullWidth
        multiline
        rows={3}
        required
      />
      <TextField
        label="Base Price"
        value={basePrice}
        onChange={(e) => setBasePrice(e.target.value)}
        fullWidth
        required
      />
      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
      <Button
        onClick={handleImageUpload}
        variant="contained"
        color="primary"
        disabled={!imageFile}
      >
        Upload Product Image
      </Button>
      <TextField
        label="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        fullWidth
        required
      />
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
          {categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.name.en}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <h4>Combos</h4>
        {combos.map((combo, index) => (
          <div key={index}>
            <TextField
              label="Combo Name (English)"
              value={combo.comboName.en}
              onChange={(e) => {
                const updatedCombos = [...combos];
                updatedCombos[index].comboName.en = e.target.value;
                setCombos(updatedCombos);
              }}
              fullWidth
              required
            />
            <TextField
              label="Combo Name (Arabic)"
              value={combo.comboName.ar}
              onChange={(e) => {
                const updatedCombos = [...combos];
                updatedCombos[index].comboName.ar = e.target.value;
                setCombos(updatedCombos);
              }}
              fullWidth
              required
            />
            <TextField
              label="Combo Description (English)"
              value={combo.description.en}
              onChange={(e) => {
                const updatedCombos = [...combos];
                updatedCombos[index].description.en = e.target.value;
                setCombos(updatedCombos);
              }}
              fullWidth
              multiline
              rows={2}
              required
            />
            <TextField
              label="Combo Description (Arabic)"
              value={combo.description.ar}
              onChange={(e) => {
                const updatedCombos = [...combos];
                updatedCombos[index].description.ar = e.target.value;
                setCombos(updatedCombos);
              }}
              fullWidth
              multiline
              rows={2}
              required
            />
            <TextField
              label="Combo Price"
              value={combo.price}
              onChange={(e) => {
                const updatedCombos = [...combos];
                updatedCombos[index].price = e.target.value;
                setCombos(updatedCombos);
              }}
              fullWidth
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const updatedCombos = [...combos];
                updatedCombos[index].imageFile = e.target.files[0];
                setCombos(updatedCombos);
              }}
            />
            <Button
              onClick={() => handleComboImageUpload(index)}
              variant="contained"
              color="primary"
              disabled={!combo.imageFile}
            >
              Upload Combo Image
            </Button>
            <TextField
              label="Combo Image URL"
              value={combo.image}
              onChange={(e) => {
                const updatedCombos = [...combos];
                updatedCombos[index].image = e.target.value;
                setCombos(updatedCombos);
              }}
              fullWidth
              required
            />
          </div>
        ))}
        <Button onClick={handleAddCombo} variant="contained" color="secondary">
          Add Combo
        </Button>
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {currentProduct ? 'Update Product' : 'Add Product'}
      </Button>
    </form>
  );
};

export default ProductForm;
