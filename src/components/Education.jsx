import { education } from '@/data';

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <h2>Education</h2>
      <article className="card">
        <h3>{education.degree}</h3>
        <p className="muted">
          {education.school} · {education.date}
        </p>
        <p>{education.details}</p>
      </article>
    </div>
  </section>
);

export default Education;
