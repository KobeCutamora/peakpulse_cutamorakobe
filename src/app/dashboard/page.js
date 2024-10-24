"use client";
import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings'; 

const gyms = [
  {
    id: 1,
    name: "ALT Fitness Gym",
    address: "Lapu-Lapu City, Cebu",
    availableSlots: 10,
    
    image: "/images/altgym.jpg",
    link: "/altgymprofile", 
  },
  {
    id: 2,
    name: "Anytime Fitness",
    address: "Pueblo De Oro Lapu-lapu City, Cebu",
    availableSlots: 5,
   
    image: "/images/anytimefitness.jpg",
    link: "/anytimefitness", 
  },
  {
    id: 3,
    name: "NAST Fitness",
    address: "Mactan Lapu-lapu City, Cebu",
    availableSlots: 3,
   
    image: "/images/nastfitness.jpg",
    link: "/nastfitness",
  },
  {
    id: 4,
    name: "Lapu-lapu Fitness Gym",
    address: "Paseo de amores, gun.ob Lapu-lapu City, Cebu",
    availableSlots: 3,
    
    image: "/images/lapulapufitness.jpg",
    link: "/lapulapufitness",
  },
  {
    id: 5,
    name: "Cooldown Fitness Gym",
    address: "Soong Lapu-lapu City, Cebu",
    availableSlots: 3,
   
    image: "/images/cooldownfitness.jpg",
    link: "/cooldownfitness", 
  },
  {
    id: 6,
    name: "Rhema Fitness Gym",
    address: "Marigondon Lapu-lapu City, Cebu",
    availableSlots: 3,
   
    image: "/images/rhema.jpg",
    link: "/rhemafitness",
  },
];

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null); 
  const open = Boolean(anchorEl);

  // Handle opening of menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing of menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      className="dashboard-container"
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("images/homebg.jpg")',
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        color: "white",
        backdropFilter: "blur(5px)",
        position: "relative",
      }}
    >
      {}
      <Box
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          display: "flex",
          alignItems: "center",
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

            {/* Menu for Settings */}
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
      </Box>

      {/* Header */}
      <Box sx={{ mb: 4, textAlign: "center", mt: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#FFD700" }}>
          Find the best Gym for you!
        </Typography>
        <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
          Choose your gym and book a session today!
        </Typography>
      </Box>

      {/* Gyms Grid */}
      <Grid container spacing={4}>
        {gyms.map((gym) => (
          <Grid item xs={12} sm={6} md={4} key={gym.id}>
            <Card
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src={gym.image}
                alt={gym.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {gym.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 2 }}>
                  {gym.address}
                </Typography>
                <Typography variant="body2">
                  Available Slots: {gym.availableSlots}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  monthly: {gym.price}
                </Typography>
                <Button
                  href={gym.link} 
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    backgroundColor: "#4f46e5",
                    "&:hover": { backgroundColor: "#4338ca" },
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
