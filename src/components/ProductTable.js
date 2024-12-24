import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductTable = ({ products, onEditProduct, onDeleteProduct }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name (English)</TableCell>
            <TableCell>Name (Arabic)</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Top Selling</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product.name.en}</TableCell>
              <TableCell>{product.name.ar}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.topselling ? 'Yes' : 'No'}</TableCell>
              <TableCell>{product.categoryId?.name.en}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEditProduct(product)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDeleteProduct(product._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
