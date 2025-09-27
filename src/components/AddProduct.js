import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct({ products, setProducts }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!name || !price) {
      alert('Please enter product name and price');
      return;
    }

    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      price: parseFloat(price),
      description
    };

    setProducts([...products, newProduct]);
    alert('Product added successfully!');
    navigate('/dashboard'); // Go back to dashboard
  };

  return (
    <div className="card shadow-sm p-3">
      <h3>Add Product</h3>
      <input 
        type="text" 
        placeholder="Product Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="form-control mb-2"
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        className="form-control mb-2"
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="form-control mb-2"
      />
      <button className="btn btn-success" onClick={handleAdd}>Add Product</button>
    </div>
  );
}

export default AddProduct;
