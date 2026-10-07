import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { featuredProjects, projects } from '@/data';

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2>Projects</h2>

      <div className="featured">
        {featuredProjects.map((p) => (
          <article
            key={p.title}
            className={`featured__item${p.image ? ' has-image' : ''}`}
          >
            {p.image && <img src={p.image} alt={p.imageAlt} />}
            <div className="featured__body">
              <p className="eyebrow">{p.kind}</p>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="bullets">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="chips">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label} <FiExternalLink aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead">More projects</h3>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card project">
            <img src={p.image} alt="" />
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <FiGithub aria-hidden="true" /> View on GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
