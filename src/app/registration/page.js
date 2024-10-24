import React from "react";
import { Button } from "@mui/material";

export default function Registration() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white"
      style={{
        backgroundImage: 'url("images/regisbg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header with Logo and PEAKPULSE text */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 bg-opacity-80 flex items-center px-6">
        <img
          src="/images/peakpulselogo.png" 
          className="h-8 w-auto mr-4" 
          alt="Logo"
        />
        <span className="text-3xl font-bold text-white">PEAKPULSE</span>
      </div>

      {/* Registration Form */}
      <div className="flex w-full max-w-md bg-black bg-opacity-70 p-8 rounded-lg shadow-lg z-10 mt-16">
        <div className="w-full">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-white">
              Create Your Account
            </h2>
          </div>

          <div className="mt-8 w-full">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium leading-6 text-gray-300"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-2 px-4 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-300"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2 px-4 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-300"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-2 px-4 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-300"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-2 px-4 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontWeight: 'bold',
                    backgroundColor: '#4f46e5', 
                    '&:hover': { backgroundColor: '#4338ca' }, 
                  }}
                >
                  Register
                </Button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/signin" className="font-semibold text-indigo-500 hover:text-indigo-400">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
