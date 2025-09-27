import React, { useState } from 'react';

function ManageUsers({ users, setUsers }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  // ✅ Add user function
  const handleAddUser = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      id: users.length + 1,
      username,
    };

    setUsers([...users, newUser]); // update parent state
    setUsername('');
    setPassword('');
    setPassword2('');
  };

  // ✅ Delete user function
  const handleDeleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div>
      <h2>Manage Users</h2>

      {/* Add User Form */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-3 shadow-sm">
            <h5 className="card-title">Add New User</h5>
            <form onSubmit={handleAddUser}>
              <div className="mb-2">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input 
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input 
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={e => setPassword2(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">Add User</button>
            </form>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Existing Users</h5>
          <table className="table table-bordered table-hover mt-3">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
