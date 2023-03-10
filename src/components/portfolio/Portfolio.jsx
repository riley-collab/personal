import React from 'react'
import './portfolio.css'
import NIH from '../../assets/NIH.png'
import graphVis from '../../assets/graphvis.png'
import recipist from '../../assets/Recipist.PNG'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  { 
    id: 1,
    image: NIH,
    title: 'NIH-Chest-X-rays-Classifier',
    github: 'https://github.com/riley-collab/aps360project'
    // demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data=visualization'
  },
  {
    id: 2,
    image: graphVis,
    title: 'Relationship Library',
    github: 'https://github.com/riley-collab/js-library-morrisr9'
    // demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data=visualization'
  },
  {
    id: 3,
    image: recipist,
    title: 'Recipist',
    github: 'https://github.com'
    // demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data=visualization'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>

      {/* <h5>My Recent Work</h5> */}
      <h2>Recent Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {/* <a href={github} className='btn' target='_blank'>Github</a> */}
                  <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
