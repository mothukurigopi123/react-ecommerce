import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username }); // Simulate login
    navigate('/products');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h2 className="mb-3 text-center">Login</h2>
        <p style={{ color: 'gray', fontStyle: 'italic' }}>
         
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Username</label>
            <input 
              type="text" 
              className="form-control" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-2">
          Don’t have an account?{' '}
          <span 
            style={{ color: "blue", cursor: "pointer" }} 
            onClick={() => navigate('/register')}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
