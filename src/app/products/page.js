"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const GymMerchandise = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const products = [
    {
      id: 1,
      name: "Gym T-Shirt",
      price: "₱1000",
      image: "/images/shirt.jpg",
      sold: 150, // Added number of sold items
    },
    {
      id: 2,
      name: "QuickDry Gym Shorts",
      price: "₱1,200",
      image: "/images/shorts.webp",
      sold: 85, // Added number of sold items
    },
    {
      id: 3,
      name: "Whey Protein Powder",
      price: "₱2,300",
      image: "/images/whey.jpg",
      sold: 60, //  of sold items
    },
    {
      id: 4,
      name: "Resistance Bands",
      price: "₱1,200",
      image: "/images/resistance.jpg",
      sold: 200, //number of sold items
    },
  ];

  return (
    <Box>
      {/* Fixed Header */}
      <AppBar position="fixed" sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 10 }}>
        <Toolbar>
          <Box display="flex" alignItems="center">
            <img
              src="/images/peakpulselogo.png"
              alt="PEAKPULSE Logo"
              style={{ height: "40px", marginRight: "16px" }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#FFFFFF" }}>
              PEAKPULSE
            </Typography>
          </Box>

          <Box display="flex" gap={2} alignItems="center" sx={{ marginLeft: "auto" }}>
            <Button
              href="/dashboard"
              variant="outlined"
              color="inherit"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': { borderColor: 'yellow', color: 'yellow' },
              }}
            >
              Home
            </Button>
            <Button
              href="/aboutus"
              variant="outlined"
              color="inherit"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': { borderColor: 'yellow', color: 'yellow' },
              }}
            >
              ABOUT US
            </Button>
            <Button
              href="/trainerspage"
              variant="outlined"
              color="inherit"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': { borderColor: 'yellow', color: 'yellow' },
              }}
            >
              FIND TRAINER
            </Button>
            <Button
              href="/gymbooking"
              variant="outlined"
              color="inherit"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': { borderColor: 'yellow', color: 'yellow' },
              }}
            >
              BOOK
            </Button>
            <IconButton onClick={handleMenuOpen} sx={{ color: 'white', '&:hover': { color: '#FFD700' } }}>
              <SettingsIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#1a1a1a",
          backgroundImage: 'url("/images/futuristic-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px 20px", 
          color: "#E0E0E0",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", mb: 2, color: "#80D0C7" }}>
          Gym Merchandise
        </Typography>
        {/* Note about product availability */}
        <Typography variant="body1" sx={{ textAlign: "center", mb: 4, color: "#E0E0E0" }}>
          Please note: The following products are only available at our personal gym and cannot be purchased online.
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  backgroundColor: "#333333",
                  borderRadius: "15px",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.7)",
                  height: "350px", //same consistent height for all cards
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: "200px", // height for images
                    width: "100%", // image takes full card width
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    objectFit: "cover", //  images maintain aspect ratio
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "150px", // Adjust content height
                  }}
                >
                  <Typography variant="h5" component="div" sx={{ color: "#FFD700" }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ color: "#E0E0E0" }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#FFD700", mt: 1 }}>
                    {product.price}
                  </Typography>
                  {/* Displaying how many sold */}
                  <Typography variant="body2" sx={{ color: "#66CCB3", mt: 1 }}>
                    {product.sold} sold
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default GymMerchandise;
