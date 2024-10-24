"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Card,
  CardContent,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const AdminPanel = () => {
  const [userType, setUserType] = useState("user"); 
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  
  
  const initialUsers = [
    { name: "pepoots", contact: "pepoots@gmail.com" },
    { name: "karl", contact: "karl@gmail.com" },
  ];
  
  const initialTrainers = [
    { name: "Trainer 1", contact: "rendon@trainer.com" },
    { name: "Trainer 2", contact: "felix2@trainer.com" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [trainers, setTrainers] = useState(initialTrainers);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAdd = () => {
    if (name && contact) {
      if (userType === "user") {
        setUsers([...users, { name, contact }]);
      } else {
        setTrainers([...trainers, { name, contact }]);
      }
      setSnackbarMessage(`Added ${userType === "user" ? "User" : "Trainer"}: ${name}`);
      setOpenSnackbar(true);
      setName("");
      setContact("");
    } else {
      setSnackbarMessage("Please fill out all fields.");
      setOpenSnackbar(true);
    }
  };

  const handleRemove = (index) => {
    if (userType === "user") {
      const removedUser = users[index].name;
      setUsers(users.filter((_, i) => i !== index));
      setSnackbarMessage(`Removed User: ${removedUser}`);
    } else {
      const removedTrainer = trainers[index].name; 
      setTrainers(trainers.filter((_, i) => i !== index));
      setSnackbarMessage(`Removed Trainer: ${removedTrainer}`);
    }
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
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
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center", mb: 4, color: "#80D0C7" }}>
        Admin Panel
      </Typography>

      <Box sx={{ mb: 4, padding: 2, borderRadius: 2, backgroundColor: "#333333" }}>
        <Typography variant="h5" sx={{ color: "#FFD700" }}>
          Add {userType === "user" ? "User" : "Trainer"}
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          label="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          variant="outlined"
          sx={{ width: "100%", mb: 2 }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#80D0C7",
            color: "#000",
            "&:hover": { backgroundColor: "#66CCB3" },
            width: "100%",
            mb: 2,
          }}
          onClick={handleAdd}
        >
          Add
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#80D0C7",
            borderColor: "#80D0C7",
            width: "100%",
          }}
          onClick={() => setUserType(userType === "user" ? "trainer" : "user")}
        >
          Switch to {userType === "user" ? "Trainer" : "User"}
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "#333333", borderRadius: "15px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: "#FFD700", mb: 2 }}>
                Users
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {users.map((user, index) => (
                  <ListItem key={index} sx={{ bgcolor: "#444444", borderRadius: 1, mb: 1 }}>
                    <ListItemText primary={user.name} secondary={user.contact} />
                    <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(index)}>
                      <DeleteIcon sx={{ color: "#FFD700" }} />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "#333333", borderRadius: "15px" }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: "#FFD700", mb: 2 }}>
                Trainers
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {trainers.map((trainer, index) => (
                  <ListItem key={index} sx={{ bgcolor: "#444444", borderRadius: 1, mb: 1 }}>
                    <ListItemText primary={trainer.name} secondary={trainer.contact} />
                    <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(index)}>
                      <DeleteIcon sx={{ color: "#FFD700" }} />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Snackbar for notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminPanel;
