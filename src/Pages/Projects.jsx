import React from 'react';

function Projects() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">My Projects</h1>
      <ul className="space-y-4">
        <li className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-600">Exciting Music Player</h2>
          <p className="text-gray-700">A fully interactive music player with a visually engaging interface, allowing users to play, pause, and skip through tracks.</p>
          <a href=" https://benevolent-pixie-e4a0bc.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
            View Project
          </a>
        </li>
        <li className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-600">Cool Calculator</h2>
          <p className="text-gray-700">A beautifully designed calculator with basic arithmetic functions, crafted using Tailwind CSS for a modern UI.</p>
          <a href=" https://effortless-mousse-95f705.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
            View Project
          </a>
        </li>
        <li className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-600">Amazing Image Gallery</h2>
          <p className="text-gray-700">Check out my Amazing Image Gallery—a dynamic and engaging experience featuring animated hover effects, a lightbox with captions, and more. Explore the gallery here.</p>
          <a href=" https://comforting-madeleine-e0a5fa.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
            View Project
          </a>
        </li>
        <li className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-600">Summer SALE</h2>
          <p className="text-gray-700">Introducing my Summer Sale project—a vibrant and interactive web interface that captures the excitement of a seasonal sale! Take a look at the details here.</p>
          <a href=" https://roaring-chimera-3b4f39.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
            View Project
          </a>
        </li>
        <li className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-600">PH Tube</h2>
          <p className="text-gray-700">Discover Phtube—a photo-sharing platform with unique features like seamless navigation, image filters, and smooth user experience. Explore the project here.</p>
          <a href=" https://amazing-panda-ed0dcb.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
            View Project
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
