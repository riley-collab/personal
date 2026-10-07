import profileImg from '@/assets/profile.jpg';
import { profile } from '@/data';

const years = new Date().getFullYear() - profile.careerStart;

const stats = [
  [`${years}+`, 'years in software'],
  ['19,000+', 'users reached by features I shipped on Microsoft Fabric'],
  ['10,000+', 'employees using the search app I built at Sanofi'],
];

const About = () => (
  <section id="about" className="section">
    <div className="container about">
      <img
        className="about__photo"
        src={profileImg}
        alt="Portrait of Riley Morris smiling, leaning on a railing"
        width="360"
        height="450"
      />
      <div>
        <h2>About</h2>
        <p>
          I’m a software engineer based in Canada who likes taking a product
          from idea to something people actually use. I’ve spent the last{' '}
          {years} years building web applications, back-end systems and data
          workflows across healthtech, high-frequency trading and enterprise
          software. I studied Electrical &amp; Computer Engineering at the
          University of Toronto.
        </p>
        <p>
          Recently I’ve been building user-facing features for enterprise
          products, taking on-call, and creating AI agents and Copilot-driven
          workflows that save teams time. Before that I built GenAI and ML
          tooling for Sanofi’s AI Center of Excellence.
        </p>
        <p>
          Away from the keyboard you’ll usually find me at a racetrack, on a
          trail or on the court. <a href="#life">More on that below.</a>
        </p>
        <dl className="stats">
          {stats.map(([n, label]) => (
            <div key={label}>
              <dt>{n}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default About;
