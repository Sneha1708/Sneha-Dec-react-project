// 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Project/Navbar";
import HomePage from "./Project/HomePage";
import SignUp from "./Project/SignUp";
import LoginPage from "./Project/LoginPage";
import { AuthProvider } from "./Project/AuthContext";
import Book from "./Project/Book";
import Sabanayagan from "./Project/Sabanayagan";
import Devil from "./Project/Devil";
import Jaibim from "./Project/Jaibim";
import Warrior from "./Project/Warrior";
import Enemy from "./Project/Enemy";
import Odavum from "./Project/Odavum";
import Doctor from "./Project/Doctor";
import Nehru from "./Project/Nehru";
import Nandivarman from "./Project/Nandivarman";
import Anbirkiniyaazh  from "./Project/Anbirkiniyaazh";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="Book" element={<Book />} />
            <Route path="Book/sabanayagan" element={<Sabanayagan />} />
            <Route path="Book/devil" element={<Devil />} />
            <Route path="Book/jaibim" element={<Jaibim />} />
            <Route path="Book/warrior" element={<Warrior/>} />
           
            <Route path="Book/enemy" element={<Enemy/>} />
            <Route path="Book/odavum" element={<Odavum/>} />
            <Route path="Book/doctor" element={<Doctor/>} />
            <Route path="Book/nehru" element={<Nehru/>} />
            <Route path="Book/nandivarman" element={<Nandivarman/>} />
            <Route path="Book/anbirkiniyaazh" element={<Anbirkiniyaazh/>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
