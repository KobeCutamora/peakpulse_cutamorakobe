import React from "react";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 flex items-center px-6">
        <a href="https://www.freepik.com/free-photos-vectors/mountain-png" target="_blank" rel="noopener noreferrer">
          <img
            src="" 
            className="h-8 w-auto mr-4" // Adjust sa size
          />
        </a>
        <span className="text-3xl font-bold text-white">PEAKPULSE</span>
      </div>
      
      <div className="relative flex flex-col items-center justify-center w-full max-w-3xl bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg z-10 mt-16">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-center text-4xl font-extrabold leading-9 tracking-tight text-white">
            Welcome to PEAKPULSE
          </h2>
          <p className="text-center text-lg text-gray-400 mt-2">
            Your ultimate solution for efficient gym management and personal fitness tracking.
          </p>
        </div>

        <div className="mt-8 w-full flex flex-col items-center">
          <a
            href="/registration"
            className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-150 ease-in-out mb-4"
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            className="inline-flex items-center rounded-md bg-gray-700 px-6 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150 ease-in-out"
          >
            Learn More
          </a>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 w-full max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Why Choose PEAKPULSE?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-xs">
              <h4 className="text-xl font-semibold text-indigo-500 mb-2">Efficient Management</h4>
              <p className="text-gray-400">
                Streamline your gym operations with our comprehensive management tools.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-xs">
              <h4 className="text-xl font-semibold text-indigo-500 mb-2">Personalized Experience</h4>
              <p className="text-gray-400">
                Customize your fitness journey with tailored programs and progress tracking.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-xs">
              <h4 className="text-xl font-semibold text-indigo-500 mb-2">Real-Time Insights</h4>
              <p className="text-gray-400">
                Access real-time data and reports to make informed decisions and improve results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}