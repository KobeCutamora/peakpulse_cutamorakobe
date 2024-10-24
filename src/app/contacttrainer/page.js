import React from "react";
import { Button, TextField, Typography } from "@mui/material";

export default function ChatWithTrainer() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white"
      style={{
        backgroundImage: 'url("images/chatbg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header with Logo and PEAKPULSE text */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 bg-opacity-80 flex items-center px-6">
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/449538551_1354203282206045_4156492920424956918_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeG-Pgrnd8Hto_mDjX6V_j4R65Qjdsg-cXrrlCN2yD5xeoLYJu9ZVoTFVatJox873LKo1l1WlMCb8tGDS-Pa578x&_nc_ohc=myir-1nFT9YQ7kNvgGFr-fV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEmMujmJrAgwoy0Mt_jzLXQLQ_EyhFG84TGQcq9VI4pfg&oe=6700E808"
          className="h-8 w-auto mr-4" // Adjust size of logo
          alt="Logo"
        />
        <span className="text-3xl font-bold text-white">PEAKPULSE</span>
      </div>

      {/* Chat Interface */}
      <div className="flex flex-col w-full max-w-md bg-black bg-opacity-70 p-8 rounded-lg shadow-lg z-10 mt-16">
        <Typography variant="h5" component="h1" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
          Chat with Your Trainer
        </Typography>
        
        <div className="flex flex-col flex-grow bg-gray-800 p-4 rounded-lg mb-4 h-80 overflow-auto">
          {/* Chat messages will go here */}
          <div className="flex flex-col space-y-2">
            <div className="bg-gray-700 p-2 rounded-lg">
              <Typography variant="body1">Trainer: Hi! How can I assist you today?</Typography>
            </div>
            <div className="bg-gray-600 p-2 rounded-lg self-end">
              <Typography variant="body1">You: I have a question about my workout plan.</Typography>
            </div>
            {/* Add more messages here */}
          </div>
        </div>

        <form className="flex items-center">
          <TextField
            variant="outlined"
            placeholder="Type your message..."
            fullWidth
            sx={{ marginRight: 1, bgcolor: 'white', color: 'black' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#4f46e5',
              '&:hover': { backgroundColor: '#4338ca' },
            }}
          >
            Send
          </Button>
        </form>
      </div>
    </main>
  );
}
