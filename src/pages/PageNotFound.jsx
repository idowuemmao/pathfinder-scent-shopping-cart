import React from "react";

export default function PageNotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-8 gap-20">
      <h1 className="text-5xl font-bold text-center">
        Sorry, the page you were looking for was not found
      </h1>
      <button
        to="/"
        className="bg-black text-center text-white p-4 px-10 rounded-lg text-4xl lg:text-7xl mb-10"
      >
        Return to Home
      </button>
    </div>
  );
}
