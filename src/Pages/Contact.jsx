import React from 'react';

function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <form className="mt-4 space-y-4">
        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
        <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
        <textarea placeholder="Your Message" className="textarea textarea-bordered w-full"></textarea>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;
