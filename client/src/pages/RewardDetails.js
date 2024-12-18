import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRewards } from '../services/api';

function RewardDetails() {
  const { id } = useParams();
  const [reward, setReward] = useState(null);
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [userPoints, setUserPoints] = useState(0);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!token) {
      navigate('/login'); // Redirect if not logged in
    } else {
      setUserPoints(user.points);

      // Fetch rewards to find the specific reward
      fetchRewards(token)
        .then((res) => {
          const selectedReward = res.data.find((r) => r.id === parseInt(id));
          if (selectedReward) {
            setReward(selectedReward);
            checkIfRedeemed(selectedReward.id);
          } else {
            alert('Reward not found');
            navigate('/home');
          }
        })
        .catch((err) => {
          console.error(err);
          alert('Error fetching reward details');
        });
    }
  }, [id, navigate, token, user.points]);

  const checkIfRedeemed = (rewardId) => {
    const redeemedRewards = JSON.parse(localStorage.getItem('redeemedRewards')) || [];
    if (redeemedRewards.includes(rewardId)) {
      setIsRedeemed(true); // Set as redeemed if found in redeemedRewards
    }
  };

  const handleRedeem = () => {
    if (userPoints < reward.points) return;

    // Confirmation Dialog
    const confirmRedeem = window.confirm(`Are you sure you want to redeem ${reward.name}?`);
    if (confirmRedeem) {
      // Update user's points and redeem status
      setUserPoints((prevPoints) => prevPoints - reward.points);

      // Add the reward ID to redeemed rewards in localStorage
      const updatedRedeemedRewards = JSON.parse(localStorage.getItem('redeemedRewards')) || [];
      updatedRedeemedRewards.push(reward.id);
      localStorage.setItem('redeemedRewards', JSON.stringify(updatedRedeemedRewards));

      // Update user's points in localStorage
      const updatedUser = { ...user, points: userPoints - reward.points };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      setIsRedeemed(true);
      alert('Reward redeemed successfully!');
      navigate('/home'); // Navigate back to home
    }
  };

  if (!reward) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{reward.name}</h1>
      <img src={reward.image} alt={reward.name} style={{ width: '100%', maxWidth: '300px' }} />
      <p><strong>Points Required:</strong> {reward.points}</p>
      <p><strong>Expiry Date:</strong> {reward.expiry}</p>
      <p><strong>Terms:</strong> {reward.terms}</p>

      {isRedeemed ? (
        <button disabled>Already Redeemed</button>
      ) : userPoints < reward.points ? (
        <button disabled>Insufficient Points</button>
      ) : (
        <button onClick={handleRedeem}>Redeem</button>
      )}
    </div>
  );
}

export default RewardDetails;
