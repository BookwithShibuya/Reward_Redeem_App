import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRewards } from "../services/api";
import RewardsSlider from "../components/HomeForm/RewardsSlider.js";
import "../components/HomeForm/HomePage.css";
import "../components/HomeForm/sidebar.css"; // เพิ่มการเชื่อมโยงไฟล์ CSS

function HomePage() {
  const [rewards, setRewards] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="home-page">
      <button className="menu-button" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
        )}
      </button>

      <ul className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Reward</a></li>
        <li><a href="#">Profile</a></li>
      </ul>

      <div className="min-h-screen bg-gray-50">
        <div className="text-center py-6">
          <div className="box-title-home-page">
            <h1 className="text-4xl font-bold">Welcome, {user.username}</h1>
            <h3 className="text-lg text-gray-600 mt-2">Your Points: {user.points}</h3>
          </div>
        </div>
        <RewardsSlider rewards={rewards} onRewardClick={handleRewardClick} />
      </div>
    </div>
  );
}

export default HomePage;
