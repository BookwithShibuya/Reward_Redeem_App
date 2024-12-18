import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRewards } from '../services/api';

function HomePage() {
  const [rewards, setRewards] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/login');
    fetchRewards(token).then((res) => setRewards(res.data));
  }, [navigate, token]);

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <h3>Your Points: {user.points}</h3>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {rewards.map((reward) => (
          <div key={reward.id} style={{ margin: '10px', cursor: 'pointer' }} onClick={() => navigate(`/reward/${reward.id}`)}>
            <img src={reward.image} alt={reward.name} width="150" />
            <h4>{reward.name}</h4>
            <p>{reward.points} points</p>
            <p>Expires: {reward.expiry}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
