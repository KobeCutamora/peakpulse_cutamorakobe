"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CommentIcon from "@mui/icons-material/Comment";
import { useRouter } from "next/navigation";

const ReportPage = () => {
  const [comment, setComment] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle comment submission logic here
    setOpenSnackbar(true);
    setComment(""); 
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1a1a1a",
        padding: "20px",
        color: "#E0E0E0",
      }}
    >
      {/* PeakPulse logo and navigation buttons */}
      <AppBar position="static" sx={{ backgroundColor: "#222222", mb: 4 }}>
        <Toolbar>
          <Box display="flex" alignItems="center">
            <img
              src="/images/peakpulselogo.png"
              alt="Logo"
              style={{ height: "40px", marginRight: "16px" }}
            />
            <Typography variant="h5" fontWeight="bold" sx={{ color: "white" }}>
              PEAKPULSE
            </Typography>
          </Box>

          {/* Navigation Buttons */}
          <Box display="flex" gap={2} alignItems="center" sx={{ marginLeft: "auto" }}>
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
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Report/Comment Section */}
      <Typography variant="h3" sx={{ textAlign: "center", mb: 2, color: "#80D0C7" }}>
        Report or Comment
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
        Please provide your feedback, report an issue, or share your comments
        regarding your experience with PeakPulse. Your input helps us improve!
      </Typography>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto" }}>
        <TextField
          label="Your Comment or Report"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={comment}
          onChange={handleCommentChange}
          sx={{ mb: 2, backgroundColor: "#333333" }}
          InputProps={{
            startAdornment: (
              <CommentIcon sx={{ color: "#80D0C7", mr: 1 }} />
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#80D0C7",
            color: "#000",
            "&:hover": { backgroundColor: "#66CCB3" },
            width: "100%",
          }}
        >
          Submit
        </Button>
      </form>

      {/* Snackbar Notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Your report/comment has been submitted! Thank you for your feedback."
      />
    </Box>
  );
};

export default ReportPage;
