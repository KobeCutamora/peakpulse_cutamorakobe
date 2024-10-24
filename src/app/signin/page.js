import React from "react";
import { Button, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white"
      style={{
        backgroundImage: 'url("images/homebg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo and PEAKPULSE text */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 bg-opacity-80 flex items-center px-6">
        <img
          src="/images/peakpulselogo.png" 
          className="h-8 w-auto mr-4" 
          alt="Logo"
        />
        <Typography
          variant="h5" 
          component="span"
          sx={{ color: 'white', fontWeight: 'bold' }}
        >
          PEAKPULSE
        </Typography>
      </div>

      {/* Sign-in Form */}
      <div className="flex w-full max-w-md mt-16">
        <div className="flex flex-col w-full bg-black bg-opacity-60 p-8 rounded-lg shadow-lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ color: 'white', mb: 3, fontWeight: 'bold' }}
          >
            SIGN IN
          </Typography>

          <form action="#" method="POST" className="space-y-6">
            <div>
              <Typography
                variant="body1"
                component="label"
                htmlFor="email"
                sx={{ color: 'gray.300', mb: 1 }}
              >
                Email
              </Typography>
              <TextField
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                fullWidth
                variant="filled"
                size="small"
                InputProps={{
                  style: {
                    color: 'white',
                    backgroundColor: '#333',
                    height: '40px', 
                    padding: '0 10px', 
                    fontSize: '1rem', 
                  },
                }}
                InputLabelProps={{
                  style: { color: 'gray', fontSize: '1rem' },
                }}
                sx={{ mb: 2 }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Typography
                  variant="body1"
                  component="label"
                  htmlFor="password"
                  sx={{ color: 'gray.300' }}
                >
                  Password
                </Typography>
                <a
                  href="#"
                  className="font-semibold text-indigo-500 hover:text-indigo-400"
                >
                  Forgot password?
                </a>
              </div>
              <TextField
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                fullWidth
                variant="filled"
                size="small"
                InputProps={{
                  style: {
                    color: 'white',
                    backgroundColor: '#333',
                    height: '40px', 
                    padding: '0 10px', 
                    fontSize: '1rem', 
                  },
                }}
                InputLabelProps={{
                  style: { color: 'gray', fontSize: '1rem' },
                }}
                sx={{ mb: 2 }}
              />
            </div>

            <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  py: '10px', 
                  fontWeight: 'bold',
                  backgroundColor: '#4f46e5',
                  fontSize: '1rem', 
                  '&:hover': { backgroundColor: '#4338ca' },
                }}
              >
                Sign in
              </Button>
            </div>
          </form>

          <Typography
            variant="body2"
            align="center"
            sx={{ color: 'gray.400', mt: 4 }}
          >
            Not a member?{" "}
            <a
              href="/registration"
              className="font-semibold text-indigo-500 hover:text-indigo-400"
            >
              Start the free 14-day trial
            </a>
          </Typography>
        </div>
      </div>
    </main>
  );
}
