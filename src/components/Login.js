import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      onLogin(); // Call login function from props
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h2>Admin Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
