import { jobs, earlier } from '@/data';

const Experience = () => (
  <section id="experience" className="section section--alt">
    <div className="container">
      <h2>Experience</h2>
      <ol className="timeline">
        {jobs.map((job) => (
          <li key={job.company} className="timeline__item">
            <div className="timeline__head">
              <h3>
                {job.title} <span className="muted">at</span> {job.company}
              </h3>
              <p className="muted">
                {job.dates} · {job.context}
              </p>
            </div>
            <ul className="bullets">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="subhead">Earlier</h3>
      <div className="earlier">
        {earlier.map((e) => (
          <article key={e.company} className="card">
            <h4>{e.title}</h4>
            <p className="muted">
              {e.company} · {e.dates}
            </p>
            <p>{e.summary}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
