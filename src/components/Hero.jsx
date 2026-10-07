import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import cv from '@/assets/Riley-Morris-CV.pdf';
import { profile } from '@/data';

const Hero = () => (
  <section id="top" className="hero">
    <div className="container hero__inner">
      <p className="eyebrow">Software Engineer · Canada</p>
      <h1>
        Hi, I’m <span className="accent">{profile.name}</span>.
      </h1>
      <p className="hero__lead">
        I build web applications, back-end systems and AI-powered tools, and I
        like taking products from idea to something people use. Recently I’ve
        been building products like{' '}
        <a href="https://itsrevtime.com" target="_blank" rel="noreferrer">
          itsRevTime
        </a>
        .
      </p>
      <p className="hero__fun">
        Off the clock: autocross, obstacle races, basketball, hiking and travel.
      </p>
      <div className="hero__actions">
        <a href="#contact" className="btn btn--primary">
          Get in touch
        </a>
        <a href={cv} download="Riley-Morris-CV.pdf" className="btn">
          <FiDownload aria-hidden="true" /> Download CV
        </a>
        <div className="socials">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
