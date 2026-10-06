import { profile } from '@/data';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <small>
        © {new Date().getFullYear()} {profile.name}
      </small>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
