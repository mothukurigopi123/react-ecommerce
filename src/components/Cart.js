import React from 'react';

const Cart = ({ cartItems, increase, decrease, remove }) => {
  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
              <th>Total (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="btn btn-success btn-sm me-1" onClick={() => increase(item.id)}>+</button>
                  <button className="btn btn-warning btn-sm me-1" onClick={() => decrease(item.id)}>-</button>
                  <button className="btn btn-danger btn-sm" onClick={() => remove(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty!</p>
      )}
      <h4>Total: ₹{total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
