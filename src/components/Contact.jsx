import { useRef, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { profile } from '@/data';

const {
  VITE_EMAILJS_SERVICE_ID: serviceId,
  VITE_EMAILJS_TEMPLATE_ID: templateId,
} = import.meta.env;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const formEnabled = Boolean(serviceId && templateId && publicKey);

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey,
      });
      form.current.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <div>
          <h2>Get in touch</h2>
          <p>
            I’m always happy to talk about interesting projects, engineering
            roles or just software. The quickest way to reach me is by email.
          </p>
          <ul className="contact__links">
            <li>
              <a href={`mailto:${profile.email}`}>
                <FiMail aria-hidden="true" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> GitHub
              </a>
            </li>
          </ul>
        </div>

        {formEnabled && (
          <form ref={form} onSubmit={sendEmail} className="form">
            <label>
              Name
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="6" required />
            </label>
            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p role="status" className="form__status">
              {status === 'sent' && 'Thanks! Your message was sent.'}
              {status === 'error' &&
                `Something went wrong. Please email me at ${profile.email}.`}
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
