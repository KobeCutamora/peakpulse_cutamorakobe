"use client";

import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Grid, Card, Menu, MenuItem } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';

const RhemaFitnessProfile = () => {
  const images = [
    "/images/rhema4.jpg",
    "/images/rhema2.jpg",
    "/images/rhema3.jpg",
    "/images/rhema1.jpg",
   
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const gymDetails = {
    name: "Rhema Fitness Gym",
    tagline: "Your Local Fitness Hub",
    location: "Marigondon Lapu-Lapu City, Cebu",
    operatingHours: "6am-10pm",
    contact: "09885463728",
    equipment: [
      "Treadmills",
      "Free Weights",
      "Ellipticals",
      "Resistance Machines",
    ],
    amenities: [
      "Locker Rooms",
      
      "Personal Training Services",
      "Group Classes",
      "Nutrition Counseling",
    ],
    price: "",
    description:
      "Rhema Fitness Gym offers a welcoming environment with a variety of equipment and services to help you achieve your fitness goals. Join us today!",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        backgroundImage: 'url("/images/futuristic-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        color: "#E0E0E0",
        position: "relative",
      }}
    >
      {/* Fixed Header */}
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
          <Link href="/dashboard" passHref>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'yellow', color: 'yellow' } }}
            >
              Home
            </Button>
          </Link>
          <Link href="/aboutus" passHref>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'yellow', color: 'yellow' } }}
            >
              ABOUT US
            </Button>
          </Link>
          <Link href="/trainerspage" passHref>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'yellow', color: 'yellow' } }}
            >
              FIND TRAINER
            </Button>
          </Link>
          <Link href="/gymbooking" passHref>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'yellow', color: 'yellow' } }}
            >
              BOOK
            </Button>
          </Link>

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

      {/* Gym Logo and Title */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, pt: 20 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FitnessCenterIcon sx={{ fontSize: 50, color: "#FFD700" }} />
          <Typography variant="h3" sx={{ color: "#80D0C7", fontWeight: "bold", ml: 2 }}>
            {gymDetails.name}
          </Typography>
        </Box>
      </Box>

      {/* Tagline */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h6" sx={{ color: "#80D0C7" }}>
          {gymDetails.tagline}
        </Typography>
      </Box>

      {/* Image Slider Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              backgroundColor: "#333333",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.7)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
                width: "100%",
              }}
            >
              <IconButton
                sx={{ position: "absolute", left: -30, color: "#FFD700" }}
                onClick={handlePrevious}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <img
                src={images[currentImageIndex]}
                alt={`Lapu-Lapu Fitness - ${currentImageIndex + 1}`}
                style={{
                  width: "50%", 
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.7)",
                }}
              />
              <IconButton
                sx={{ position: "absolute", right: -30, color: "#FFD700" }}
                onClick={handleNext}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>

            {/* Gym Information */}
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textAlign: "center", color: "#80D0C7" }}>
              Gym Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#FFD700" }}>
                  <LocationOnIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Location:
                </Typography>
                <Typography variant="body2" sx={{ color: "#E0E0E0" }}>{gymDetails.location}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#FFD700" }}>
                  <AccessTimeIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Operating Hours:
                </Typography>
                <Typography variant="body2" sx={{ color: "#E0E0E0" }}>{gymDetails.operatingHours}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#FFD700" }}>
                  <CallIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Contact:
                </Typography>
                <Typography variant="body2" sx={{ color: "#E0E0E0" }}>{gymDetails.contact}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#FFD700" }}>
                  <AttachMoneyIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Monthly Price:
                </Typography>
                <Typography variant="body2" sx={{ color: "#E0E0E0" }}>{gymDetails.price}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#FFD700" }}>
                  <DescriptionIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Description:
                </Typography>
                <Typography variant="body2" sx={{ color: "#E0E0E0" }}>{gymDetails.description}</Typography>
              </Grid>
            </Grid>

            {/* Equipment and Amenities Side by Side */}
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFD700" }}>
                  Equipment
                </Typography>
                <ul style={{ color: "#E0E0E0" }}>
                  {gymDetails.equipment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFD700" }}>
                  Amenities
                </Typography>
                <ul style={{ color: "#E0E0E0" }}>
                  {gymDetails.amenities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Grid>
            </Grid>

            {/* Booking Button */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Link href="/gymbooking" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#FFD700",
                    '&:hover': { backgroundColor: '#FFC107' },
                    color: "#000",
                  }}
                >
                  Book a Session
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RhemaFitnessProfile;
