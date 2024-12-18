import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRewards } from "../services/api";
import RewardsSlider from "../components/HomeForm/RewardsSlider.js";
import "../components/HomeForm/HomePage.css";

function HomePage() {
  const [rewards, setRewards] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");
    fetchRewards(token).then((res) => setRewards(res.data));
  }, [navigate, token]);

  const handleRewardClick = (id) => {
    navigate(`/reward/${id}`);
  };

  return (
    <div className="home-page">
    <div className="min-h-screen bg-gray-50">
      <div className="text-center py-6">
        <div className="box-title-home-page">
        <h1 className="text-4xl font-bold">Welcome, {user.username}</h1>
        <h3 className="text-lg text-gray-600 mt-2">Your Points: {user.points}</h3></div>
      </div>
      <RewardsSlider rewards={rewards} onRewardClick={handleRewardClick} />
    </div>
    </div>
  );
}

export default HomePage;
