import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== password2) {
      alert("Passwords do not match");
      return;
    }
    navigate('/login');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h2 className="mb-3 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><input type="text" className="form-control" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required/></div>
          <div className="mb-3"><input type="password" className="form-control" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/></div>
          <div className="mb-3"><input type="password" className="form-control" placeholder="Confirm Password" value={password2} onChange={e=>setPassword2(e.target.value)} required/></div>
          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
