import { skills } from '@/data';

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map(({ group, items }) => (
          <div key={group} className="card">
            <h3>{group}</h3>
            <ul className="chips">
              {items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
