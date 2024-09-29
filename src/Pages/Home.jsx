import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">Welcome to My Portfolio</h1>
      <p className="text-lg text-white leading-relaxed max-w-2xl text-center drop-shadow-md mb-4">
        I'm <span className="font-bold">Toriqul Islam Rupai</span>, a Junior Frontend Developer passionate about crafting beautiful, user-friendly web experiences.
        Take a look at my projects, explore my skills, and feel free to reach out for collaboration or opportunities. Let's create something amazing together!
      </p>
      <button  className="btn btn-primary btn-wide shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <Link to="/projects" className="text-white">Explore My Work</Link>
      </button>
    </div>
  );
}

export default Home;
