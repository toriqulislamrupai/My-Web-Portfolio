import React from 'react';

function CV() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">My CV</h1>
      <p className="mt-4 text-lg text-gray-700 text-center">
        Download my CV from here:
      </p>
      <div className="flex items-center mt-4">
        <a 
          href="https://drive.google.com/file/d/1SQFdDxfEbXw2hMweZRy-Z52bj3jd8u5H/view?usp=sharingF"          className="btn btn-primary px-6 py-2 transition-transform transform hover:scale-105"
        >
          Download CV
        </a>
        <span className="ml-4 text-gray-500"> (PDF Document)</span>
      </div>
      <div className="mt-6 w-full max-w-md">
        <div className="border-b border-gray-300"></div>
      </div>
    </div>
  );
}

export default CV;
