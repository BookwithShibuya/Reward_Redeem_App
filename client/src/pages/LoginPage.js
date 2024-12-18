import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import '../components/LoginForm/LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(username, password);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/home');
    } catch {
      alert('No data');
    }
  };

  return (
    <div className="login-page">
    <div className='wrapper'>
      <form action="">
      <h1>Reward Redeem</h1> 
      <div className='input-box'>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <FaUser className='icon' />
      </div>
      <div className='input-box'>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <FaLock className='icon'/>
      </div>
      <div>
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
      <div className='welcome'><h4> Welcome to Reward Redeem App</h4>
      </div>
      </form>
    </div>
    </div>
  );
}

export default LoginPage;
