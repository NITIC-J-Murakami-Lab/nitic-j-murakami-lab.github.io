import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to our application! We are dedicated to providing the best user
        experience.
      </p>
    </div>
  );
};

export default Home;
