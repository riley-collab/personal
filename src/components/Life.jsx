import {
  FaBasketballBall,
  FaFlagCheckered,
  FaMedal,
  FaMountain,
  FaPlaneDeparture,
} from 'react-icons/fa';
import { alsoInto, interests } from '@/data';

const icons = {
  racing: FaFlagCheckered,
  compete: FaMedal,
  basketball: FaBasketballBall,
  hiking: FaMountain,
  travel: FaPlaneDeparture,
};

const Life = () => (
  <section id="life" className="section section--alt">
    <div className="container">
      <h2>Off the clock</h2>
      <p className="lead">
        Code is only part of the story. These are the things that keep me
        energized, competitive and curious.
      </p>
      <div className="life">
        {interests.map(({ icon, title, text }) => {
          const Icon = icons[icon];
          return (
            <article key={title} className="card life__item">
              <span className="life__icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
      <p className="muted life__also">Also into: {alsoInto.join(' · ')}</p>
    </div>
  </section>
);

export default Life;
