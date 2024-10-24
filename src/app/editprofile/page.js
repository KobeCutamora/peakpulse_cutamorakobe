"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
  Paper,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function EditProfile() {
  // State for user data and profile image
  const [user, setUser] = useState({
    name: "Pepoots Karl",
    email: "Peepots.karl@gmail.com",
    profileImage: "/images/karl.jpg",
    bio: "Fitness enthusiast and crossfire gamer and I love basketball im am mvp in powerplay when i was a kid.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Updated user data:", user);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F0F4F8",
        color: "#333",
      }}
    >
      <Container
        maxWidth="md"
        component={Paper}
        elevation={3}
        sx={{
          borderRadius: 4,
          mt: 4,
          p: 4,
          textAlign: "center",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Edit Profile
        </Typography>

        {/* Profile Image Upload */}
        <Avatar
          src={user.profileImage}
          alt={user.name}
          sx={{ width: 120, height: 120, mb: 2, mx: "auto", border: "2px solid #FFD700" }} // Border color
        />
        <input
          accept="image/*"
          id="profile-image-upload"
          type="file"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <label htmlFor="profile-image-upload">
          <IconButton component="span" sx={{ mb: 2 }}>
            <PhotoCamera />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            Change Profile Image
          </Typography>
        </label>

        {/* Name Input */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />

        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />

        {/* Bio Input */}
        <TextField
          label="Bio"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="bio"
          value={user.bio}
          onChange={handleInputChange}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            mt: 2,
            backgroundColor: "#FFD700", 
            color: "#333",
            "&:hover": { backgroundColor: "#FFC107" },
          }}
        >
          Save Changes
        </Button>
      </Container>
    </Box>
  );
}
