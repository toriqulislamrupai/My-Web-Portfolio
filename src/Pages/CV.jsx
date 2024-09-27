import React from 'react';

function CV() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">My CV</h1>
      <p className="mt-4 text-lg">Download my CV from here:</p>
      <a href="cv-link.pdf" className="btn btn-primary mt-4">Download CV</a>
    </div>
  );
}

export default CV;
