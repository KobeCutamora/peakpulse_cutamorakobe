"use client";
import React, { useState } from "react";
import { Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl, Box } from "@mui/material";

export default function BookGym() {
  const [selectedGym, setSelectedGym] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [sessionType, setSessionType] = useState("");

  const gyms = [
    "NAS Fitness Center",
    "Anytime Fitness Lapu-lapu",
    "ALT Fitness Gym",
    "RHEMA Fitness Gym",
    "Lapu-lapu Fitness Gym",
    "Cool Down Fitness Gym",
  ];

  const sessionTypes = [
    "Personal Training",
    "Group Class",
    "Open Gym",
    "Yoga Session",
    "Spin Class",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Gym:", selectedGym);
    console.log("Date:", bookingDate);
    console.log("Time:", bookingTime);
    console.log("Contact Info:", contactInfo);
    console.log("Session Type:", sessionType);
  };

  return (
    <main
      className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
      style={{
        backgroundImage:
          'url("https://images.wallpaperscraft.com/image/single/gym_dumbbells_inventory_219519_1920x1080.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <div className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-80 flex items-center justify-between px-8 z-10">
        <div className="flex items-center">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/449538551_1354203282206045_4156492920424956918_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeG-Pgrnd8Hto_mDjX6V_j4R65Qjdsg-cXrrlCN2yD5xeoLYJu9ZVoTFVatJox873LKo1l1WlMCb8tGDS-Pa578x&_nc_ohc=myir-1nFT9YQ7kNvgGFr-fV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEmMujmJrAgwoy0Mt_jzLXQLQ_EyhFG84TGQcq9VI4pfg&oe=6700E808"
            alt="PEAKPULSE Logo"
            className="h-8 w-auto mr-3"
          />
          <Typography variant="h5" component="span" sx={{ fontWeight: 'bold', color: 'white' }}>
            PEAKPULSE
          </Typography>
        </div>

        {/* Navigation Buttons */}
        <Box display="flex" gap={2}>
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
            href="/bookgym"
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
        </Box>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-8 lg:px-16">
        <Typography variant="h1" component="h1" align="center" sx={{ fontWeight: 'bold', mb: 4, fontSize: '2rem' }}>
          Book Your Gym Session
        </Typography>

        <div className="max-w-lg mx-auto bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg" style={{ backdropFilter: 'blur(10px)' }}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="gym-label">Select Gym</InputLabel>
              <Select
                labelId="gym-label"
                value={selectedGym}
                onChange={(e) => setSelectedGym(e.target.value)}
                label="Select Gym"
                required
              >
                {gyms.map((gym, index) => (
                  <MenuItem key={index} value={gym}>
                    {gym}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel id="session-label">Session Type</InputLabel>
              <Select
                labelId="session-label"
                value={sessionType}
                onChange={(e) => setSessionType(e.target.value)}
                label="Session Type"
                required
              >
                {sessionTypes.map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              type="date"
              label="Booking Date"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
            />

            <TextField
              type="time"
              label="Booking Time"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={bookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
              required
            />

            <TextField
              label="Contact Information"
              variant="outlined"
              fullWidth
              margin="normal"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit Booking
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
