import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ManageUsers from './components/ManageUsers';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const [products, setProducts] = useState([
    { id: 1, name: "Apple", description: "Fresh red apple", price: 50 },
    { id: 2, name: "Banana", description: "Sweet banana", price: 20 },
    { id: 3, name: "Mango", description: "Ripe mango", price: 100 },
  ]);

  const [users, setUsers] = useState([
    { id: 1, username: 'admin' },
    { id: 2, username: 'user1' },
  ]);

  // Cart handlers
  const addToCart = (id) => {
    const prod = products.find(p => p.id === id);
    const exists = cartItems.find(c => c.id === id);
    if (exists) {
      setCartItems(cartItems.map(c => c.id === id ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCartItems([...cartItems, { ...prod, quantity: 1 }]);
    }
  };

  const increase = (id) => setCartItems(cartItems.map(c => c.id === id ? { ...c, quantity: c.quantity + 1 } : c));
  const decrease = (id) => setCartItems(cartItems.map(c => c.id === id ? { ...c, quantity: c.quantity - 1 } : c).filter(c => c.quantity > 0));
  const remove = (id) => setCartItems(cartItems.filter(c => c.id !== id));

  // Product handlers
  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const editProduct = (id) => {
    const product = products.find(p => p.id === id);
    const newName = prompt("Enter new product name:", product.name);
    const newPrice = prompt("Enter new product price:", product.price);
    const newDesc = prompt("Enter new description:", product.description);

    if (newName && newPrice) {
      setProducts(products.map(p => p.id === id ? { ...p, name: newName, price: parseFloat(newPrice), description: newDesc } : p));
    }
  };

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="container mt-4">
        <Routes>
          {/* Default landing page: Product List */}
          <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/products" element={<ProductList products={products} addToCart={addToCart} />} />

          {/* Protected Routes */}
          <Route path="/cart" element={user ? <Cart cartItems={cartItems} increase={increase} decrease={decrease} remove={remove} /> : <Navigate to="/login" />} />
          
          <Route path="/dashboard" element={
            user ? <Dashboard
              totalProducts={products.length}
              totalUsers={users.length}
              products={products}
              deleteProduct={deleteProduct}
              editProduct={editProduct}
            /> : <Navigate to="/login" />} 
          />

          <Route path="/products/add" element={user ? <AddProduct products={products} setProducts={setProducts} /> : <Navigate to="/login" />} />
          <Route path="/manage-users" element={user ? <ManageUsers users={users} setUsers={setUsers} /> : <Navigate to="/login" />} />

          {/* Login / Register */}
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
