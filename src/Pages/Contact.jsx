import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  useEffect(() => {
    // Initialize EmailJS with your public key (optional if you're using emailjs-com)
    emailjs.init("WRLBdkavJxedZ4RyE"); // Public Key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4gytk3u', 'template_hhmve5q', form.current, 'WRLBdkavJxedZ4RyE') // Use the public key directly here
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="p-10 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="mt-4 space-y-4">
        <input 
          type="text" 
          name="user_name" 
          placeholder="Your Name" 
          className="input input-bordered w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />
        <input 
          type="email" 
          name="user_email" 
          placeholder="Your Email" 
          className="input input-bordered w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          className="textarea textarea-bordered w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        ></textarea>
        <button type="submit" className="btn btn-primary w-full py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
