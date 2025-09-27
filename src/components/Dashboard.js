import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ totalProducts, totalUsers, products, editProduct, deleteProduct }) {
  return (
    <div>
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row mb-4">
        {/* Total Products Card */}
        <div className="col-md-6">
          <div className="card text-white bg-primary mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Products</h5>
              <p className="card-text display-5">{totalProducts}</p>
              <Link to="/products/add" className="btn btn-light btn-sm">Add Product</Link>
            </div>
          </div>
        </div>

        {/* Total Users Card */}
        <div className="col-md-6">
          <div className="card text-white bg-info mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text display-5">{totalUsers}</p>
              <Link to="/manage-users" className="btn btn-light btn-sm">Manage Users</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title">Products</h5>
            <Link to="/products/add" className="btn btn-success btn-sm">Add Product</Link>
          </div>

          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price (₹)</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>₹{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-1" onClick={() => editProduct(product.id)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
