"use client";
import React, { useState } from 'react';

function Contact() {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [feedback, setfeedback] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const data = {
      email,
      pass,
      feedback
    };
    console.log(data);
    console.log(e.currentTarget.name?.valueOf);
    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    setemail('');
    setfeedback('');
    setpass('');
  };

  return (
    <div>
      <h1 className='text-center font-serif'>Contact Us Form</h1>
      
      <form onSubmit={handleSubmit}>
        <div className='text-center gap-4 ml-4'>
          <label htmlFor="email" className='font-serif font-bold mr-4'>Email :   </label>
          <input 
            value={email} 
            onChange={(e) => setemail(e.target.value)} 
            className='p-2 rounded-lg text-black' 
            type="email" 
            id="email" 
            name="name" 
          />
        </div>
        <div className='text-center m-3'>
          <label className='font-serif font-bold' htmlFor="pass">Password : </label>
          <input 
            value={pass} 
            onChange={(e) => setpass(e.target.value)} 
            className='p-2 rounded-lg text-black' 
            type="password" 
            id="pass" 
            name="password" 
          />
        </div>
        <div className='text-center m-3'>
          <label className='font-bold font-serif'>Feedback</label><br/>
          <textarea 
            value={feedback} 
            onChange={(e) => setfeedback(e.target.value)} 
            className='p-2 rounded-lg text-black' 
            name="feedback" 
            id="feedback" 
            cols={32} 
            rows={5}
          ></textarea>
        </div>
        <button 
          type="submit" 
          className='block text-center mx-auto m-5 p-2 bg-gray-500 rounded-lg px-6'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
