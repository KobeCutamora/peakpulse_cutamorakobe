"use client";
import React, { useState } from "react";
import { Button, Box, Container, Typography, Grid, Card, CardContent, IconButton, Menu, MenuItem, Divider, Link } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function AboutUs() {
  // State for the settings menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("images/homebg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        p: 3,
      }}
    >
      {/* Header with Logo, PEAKPULSE text, Buttons, and Settings Icon */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '48px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
        }}
      >
        <Box display="flex" alignItems="center">
          <img
            src="/images/peakpulselogo.png"
            alt="Logo"
            style={{ height: '32px', marginRight: '16px' }}
          />
          <Typography variant="h4" fontWeight="bold">PEAKPULSE</Typography>
        </Box>

        <Box display="flex" gap={2} alignItems="center">
          <Button
            href="/dashboard"
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'yellow',
                color: 'yellow',
              },
            }}
          >
            Home
          </Button>
          <Button
            href="/aboutus"
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'yellow',
                color: 'yellow',
              },
            }}
          >
            ABOUT US
          </Button>
          <Button
            href="/trainerspage"
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'yellow',
                color: 'yellow',
              },
            }}
          >
            FIND TRAINER
          </Button>
          <Button
            href="/gymbooking"
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'yellow',
                color: 'yellow',
              },
            }}
          >
            BOOK
          </Button>

          {/* Settings Icon */}
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              color: 'white',
              '&:hover': { color: '#FFD700' },
            }}
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
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background
                color: 'white', // White text color
              },
            }}
          >
            <MenuItem onClick={handleMenuClose} sx={{ color: 'gray' }}>View Profile</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ color: 'gray' }}>Log Out</MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* About Us Section */}
      <Container maxWidth="lg" sx={{ mt: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '16px', p: 5 }}>
        {/* Introduction */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" sx={{ color: '#FFD700' }}>About Us</Typography>
          <Divider sx={{ borderColor: '#FFD700', mt: 2, mb: 4, mx: 'auto', width: '20%' }} />
          <Typography variant="body1">
            Welcome to <span style={{ color: '#FFD700' }}>PEAKPULSE</span>, your premier destination for fitness and health. 
            We are a dedicated team of fitness enthusiasts, passionate about helping individuals find the best gym for their fitness goals.
          </Typography>
        </Box>

        {/* Mission and Vision Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#FFD700', mb: 2 }}>Our Mission</Typography>
            <Typography variant="body1">
              Our mission is to empower our users with the tools, resources, and motivation they need to transform their fitness journey.
              We aim to provide cutting-edge technology and expert guidance to make fitness accessible and enjoyable for everyone.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#FFD700', mb: 2 }}>Our Vision</Typography>
            <Typography variant="body1">
              We envision a world where everyone has the opportunity to live a healthier, more active lifestyle. PEAKPULSE strives to be the leading platform for fitness, connecting people to the best gyms, trainers, and health resources.
            </Typography>
          </Grid>
        </Grid>

        {/* Meet the Team Section */}
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
              
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box
        component="footer"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          textAlign: 'center',
          p: 3,
          mt: 5,
          width: '100%',
          position: 'relative',
          bottom: 0,
        }}
      >
        {/* Contact Information */}
        <Typography variant="h5" fontWeight="bold" sx={{ color: '#FFD700', mb: 2 }}>Contact Us</Typography>
        <Box display="flex" justifyContent="center" gap={4} mb={2}>
          <Box display="flex" alignItems="center">
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body1">contact@peakpulse.com</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body1">+63 123 4567 890</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body1"> Lapu-Lapu City, Cebu</Typography>
          </Box>
        </Box>

        {/* Social Media Icons */}
        <Box display="flex" justifyContent="center" gap={2} mb={3}>
          <Link href="https://facebook.com" target="_blank">
            <FacebookIcon sx={{ color: 'white', '&:hover': { color: '#1877f2' } }} />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <InstagramIcon sx={{ color: 'white', '&:hover': { color: '#e1306c' } }} />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <TwitterIcon sx={{ color: 'white', '&:hover': { color: '#1da1f2' } }} />
          </Link>
        </Box>

        {/* Copyright Information */}
        <Typography variant="body2" color="gray">
          © 2024 PEAKPULSE. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
