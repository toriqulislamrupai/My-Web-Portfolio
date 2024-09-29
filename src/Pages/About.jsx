import React from 'react';

function About() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12 rounded-lg shadow-2xl">
      <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">About Me</h1>
      <p className="text-lg text-white leading-relaxed drop-shadow-sm">
        I am <span className="font-semibold">Toriqul Islam Rupai</span>, a passionate and motivated <span className="font-bold">Junior Frontend Developer</span> with a degree in Computer Science. My academic background has provided me with a strong foundation in web development principles, while hands-on experience has honed my ability to create responsive, interactive, and user-centric web applications. I am proficient in <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">JavaScript</span>, and <span className="font-semibold">React</span>, and I am enthusiastic about learning new technologies and improving my skill set.
      </p>
      <p className="text-lg text-white leading-relaxed mt-4 drop-shadow-sm">
        I have worked on various personal and team projects that demonstrate my ability to apply modern web development techniques. My design philosophy revolves around creating intuitive, user-friendly interfaces while ensuring performance optimization and cross-browser compatibility.
      </p>
    </div>
  );
}

export default About;
