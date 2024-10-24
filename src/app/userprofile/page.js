"use client";
import React, { useState } from "react";
import {
  Box, Container, Typography, Button, Avatar, IconButton, Menu, MenuItem, Tab, Tabs, Paper, Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";

export default function UserProfile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  // Mock user data (replace with dynamic data)
  const user = {
    name: "Pepoots Karl",
    email: "Pepoots.karl@gmail.com",
    profileImage: "/images/gaw.jpg",
    coverPhoto: "https://images.unsplash.com/photo-1506956192201-3e02660d7c82",
    bio: "Fitness enthusiast and crossfire gamer and I love basketball im am mvp in powerplay when i was a kid..",
    location: "Liloan Cebu City, Philippines",
    joinedDate: "January 2023",
    fitnessGoal: "To stay active and fit by working out five times a week."
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F0F4F8", 
        color: "#333",
      }}
    >
      {/* Header Navigation Bar */}
      <Box
        sx={{
          backgroundColor: "#1C1C1C", 
          color: "white",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Logo and Title */}
        <Box display="flex" alignItems="center">
          <img
            src="/images/peakpulselogo.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
          <Typography variant="h5" fontWeight="bold">
            PEAKPULSE
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box display="flex" gap={2} alignItems="center">
          <Button
            href="/dashboard"
            variant="text"
            sx={{
              color: "white",
              "&:hover": {
                color: "#FFD700",
                textDecoration: "underline",
              },
            }}
          >
            Home
          </Button>
          <Button
            href="/aboutus"
            variant="text"
            sx={{
              color: "white",
              "&:hover": {
                color: "#FFD700",
                textDecoration: "underline",
              },
            }}
          >
            About Us
          </Button>
          <Button
            href="/trainerspage"
            variant="text"
            sx={{
              color: "white",
              "&:hover": {
                color: "#FFD700",
                textDecoration: "underline",
              },
            }}
          >
            Find Trainer
          </Button>
          <Button
            href="/gymbooking"
            variant="text"
            sx={{
              color: "white",
              "&:hover": {
                color: "#FFD700",
                textDecoration: "underline",
              },
            }}
          >
            Book
          </Button>

          {/* Settings Icon */}
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              color: "white",
              "&:hover": { color: "#FFD700" },
            }}
          >
            <SettingsIcon />
          </IconButton>

          {/* Menu for Settings */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Cover Photo */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${user.coverPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 250,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", textShadow: "1px 1px 4px #000" }}>
          {user.name}
        </Typography>
      </Box>

      {/* Profile Info Card */}
      <Container
        maxWidth="md"
        component={Paper}
        elevation={3}
        sx={{
          borderRadius: 4,
          position: "relative",
          py: 4,
          px: 3,
          textAlign: "center",
          marginTop: "-80px",
          backgroundColor: "#FFFFFF", 
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)", 
        }}
      >
        {/* Avatar and Edit Profile Button */}
        <Avatar
          src={user.profileImage}
          alt={user.name}
          sx={{ width: 150, height: 150, mb: 2, mx: "auto", boxShadow: 3, border: "4px solid #FFD700" }} // Border color matches brand theme
        />
        <Typography variant="h4" fontWeight="bold" color="#333">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body1" mt={3} fontStyle="italic" color="#666">
          {user.bio}
        </Typography>

        <Button
        href="/editprofile"
          variant="contained"
          startIcon={<EditIcon />}
          sx={{
            mt: 3,
            backgroundColor: "#FFD700", 
            color: "#333",
            "&:hover": { backgroundColor: "#FFC107" },
          }}
        >
          Edit Profile
        </Button>

        {/* Additional Profile Info */}
        <Box
          sx={{
            mt: 4,
            p: 2,
            borderRadius: 2,
            backgroundColor: "#F8F9FA", 
          }}
        >
          <Typography variant="h6" gutterBottom>
            Profile Information
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" color="#555">
              <strong>Location:</strong> {user.location}
            </Typography>
            <Typography variant="body1" color="#555">
              <strong>Joined Date:</strong> {user.joinedDate}
            </Typography>
            <Typography variant="body1" color="#555">
              <strong>Fitness Goal:</strong> {user.fitnessGoal}
            </Typography>
          </Box>
        </Box>

        {/* Navigation Tabs */}
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
          sx={{ mt: 4, backgroundColor: "#F0F4F8", borderRadius: 2 }} // Tabs with light background
        >
          <Tab label="Profile Info" />
          <Tab label="Activity History" />
          <Tab label="Settings" />
        </Tabs>
      </Container>

      {/* Tab Content */}
      <Container maxWidth="md" sx={{ mt: 4, textAlign: "left", backgroundColor: "#FFFFFF", p: 3, borderRadius: 2 }}>
        {tabIndex === 0 && (
          <Typography variant="body1" color="#333">
            Here you can find more details about your profile, including contact information, social media links, and personal preferences.
          </Typography>
        )}
        {tabIndex === 1 && (
          <Typography variant="body1" color="#333">
            Here is a history of your recent activities, such as gym bookings, completed workouts, and progress updates.
          </Typography>
        )}
        {tabIndex === 2 && (
          <Typography variant="body1" color="#333">
            Adjust your account settings, privacy preferences, and notification preferences here.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
