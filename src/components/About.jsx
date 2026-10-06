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
        loading="lazy"
      />
      <div>
        <h2>About</h2>
        <p>
          I’m a software engineer based in Canada who likes taking a product
          from idea to something people actually use. I’ve spent the last{' '}
          {years} years building web applications, back-end systems and data
          workflows across healthtech, high-frequency trading and enterprise
          software.
        </p>
        <p>
          Currently I’m at Avanade, working on the Microsoft Fabric UX project,
          where I ship user-facing features, take on-call, and have built AI
          agents and Copilot-driven workflows that save the team time. Before
          that I built GenAI and ML tooling for Sanofi’s AI Center of
          Excellence.
        </p>
        <p>
          Outside of work I code side projects, and I’m into hiking, cars,
          racing, volleyball, basketball and video games.
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
