import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../styles/Contact.css';

function Contact() {
  const recaptchaRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    if (!captchaValue) {
      setCaptchaError(true);
      toast.error('Please verify you are not a robot');
      return;
    }

    setCaptchaError(false);

    try {
      const res = await fetch('https://portfolio-backend-nequ.onrender.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
});

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || 'Server error');
      }

      toast.success('Your message has been sent');
      setForm({ name: '', email: '', phone: '', message: '' });
      setCaptchaValue(null);
      recaptchaRef.current?.reset();
    } catch (err) {
      toast.error(err.message || 'Failed to send message');
    }
  };

  return (
    <div className='contact'>
      <div className='work'>
        <h1>Let's work together</h1>
        <p>Ready to launch your next project? Get in touch via email below.</p>
        <h6><i className="fa-solid fa-envelope"></i> youssef.hmaidi.work@gmail.com</h6>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Contact <span>Me!</span></h2>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <div className="phone-container">
          <PhoneInput
            country={'us'} 
            value={form.phone}
            onChange={phone => setForm({ ...form, phone })}
            enableSearch={true}      
            disableCountryCode={false} 
            countryCodeEditable={false} 
            inputProps={{
              name: 'phone',
              required: true,
              placeholder: 'Phone number',
            }}
            inputStyle={{ width: '100%' }}
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <div className={`recaptcha-wrapper ${captchaError ? 'recaptcha-error' : ''}`}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeLXu8rAAAAAOoW_3AnJvKpvTPcI6POGdKp6Cs2"
            onChange={token => {
              setCaptchaValue(token);
              setCaptchaError(false);
            }}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
