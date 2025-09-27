import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {
  const [search, setSearch] = useState('');

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Welcome to Shopping!</h2>
        <input
          type="text"
          placeholder="Search products"
          className="form-control w-50"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="row">
        {filtered.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price:</strong> ₹{product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p>No products found.</p>}
      </div>
    </div>
  );
};

export default ProductList;
