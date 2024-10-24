"use client";

import React, { useState } from "react";
import { Button, Rating, IconButton, Menu, MenuItem } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TrainersPage() {
  // State for menu handling
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };//

  const trainers = [
    {
      name: "Karl Machu Linao",
      specialty: "Strength and Conditioning",
      description:
        "POWERPLAY MVP, Karl specializes in strength training and conditioning for all fitness levels.",
      image: "/images/rendon.jpg",
      rating: 4.5,
    },
    {
      name: "Crist Briand",
      specialty: "Yoga and Flexibility",
      description: "Weight lifting",
      image: "/images/felix.jpg",
      rating: 4.0,
    },
    {
      name: "Do Requinto",
      specialty: "Nutrition and Weight Loss",
      description:
        "Do provides personalized nutrition plans to complement your fitness journey and help you achieve weight loss goals.",
      image: "/images/mike.jpg",
      rating: 4.8,
    },
  ];

  return (
    <main
      className="relative min-h-screen text-white p-8"
      style={{
        backgroundImage: 'url("images/homebg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-80 flex items-center justify-between px-8 z-10">
        <div className="flex items-center">
          <img
            src="/images/peakpulselogo.png"
            alt="PEAKPULSE Logo"
            className="h-8 w-auto mr-3"
          />
          <span className="text-3xl font-semibold text-white">PEAKPULSE</span>
        </div>
        <div className="flex space-x-4 items-center">
          <Button
            href="/dashboard"
            variant="outlined"
            color="inherit"
            sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'yellow', color: 'yellow' } }}
          >
            Home
          </Button>
          <Button
            href="/aboutus"
            variant="outlined"
            color="inherit"
            sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'yellow', color: 'yellow' } }}
          >
            ABOUT US
          </Button>
          <Button
            href="/trainerspage"
            variant="outlined"
            color="inherit"
            sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'yellow', color: 'yellow' } }}
          >
            FIND TRAINER
          </Button>
          <Button
            href="/gymbooking"
            variant="outlined"
            color="inherit"
            sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'yellow', color: 'yellow' } }}
          >
            BOOK
          </Button>

          {/* Settings Icon */}
          <IconButton
            onClick={handleMenuOpen}
            sx={{ color: 'white', '&:hover': { color: '#FFD700' } }}
          >
            <SettingsIcon />
          </IconButton>

          {/* Settings */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
          </Menu>
        </div>
      </div>

      {}
      <div className="flex flex-col items-center mt-16 pt-8">
        <h1 className="text-5xl font-bold mb-10">Trainers/Gym Coaches</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-2xl transition-transform transform hover:scale-105"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} 
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="h-56 w-full object-cover rounded-lg mb-5"
            />
            <h2 className="text-2xl font-bold text-yellow-500">{trainer.name}</h2>
            <p className="text-gray-400 text-sm italic">{trainer.specialty}</p>
            <p className="mt-3 text-gray-300 text-center">{trainer.description}</p>
            <Rating
              name={`trainer-rating-${index}`}
              value={trainer.rating}
              precision={0.5}
              readOnly
              sx={{ mt: 2 }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
