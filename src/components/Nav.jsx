import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { profile } from '@/data';

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

const readStoredTheme = () => document.documentElement.dataset.theme || 'dark';

const Nav = () => {
  const [theme, setTheme] = useState(readStoredTheme);
  const [active, setActive] = useState('');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable (private mode); theme just won't persist */
    }
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          {profile.name}
        </a>
        <nav aria-label="Primary">
          <ul className="nav__links">
            {links.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="icon-btn"
          onClick={() => setTheme(next)}
          aria-label={`Switch to ${next} mode`}
          title={`Switch to ${next} mode`}
        >
          {theme === 'dark' ? (
            <FiSun aria-hidden="true" />
          ) : (
            <FiMoon aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Nav;
