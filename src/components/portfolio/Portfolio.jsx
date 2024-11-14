import React from 'react'
import './portfolio.css'
import NIH from '../../assets/NIH.png'
import graphVis from '../../assets/graphvis.png'
import recipist from '../../assets/Recipist.PNG'
import MovieRateRrr from '../../assets/MovieRateRrr.png'
import server from '../../assets/server.png'

const data = [
  { 
    id: 1,
    image: NIH,
    title: 'NIH-Chest-X-rays-Classifier',
    github: 'https://github.com/riley-collab/aps360project'
  },
  {
    id: 2,
    image: graphVis,
    title: 'Relationship Library',
    github: 'https://github.com/riley-collab/js-library-morrisr9'
  },
  {
    id: 3,
    image: recipist,
    title: 'Recipist',
    github: 'https://github.com/riley-collab/Recipist'
  },
  {
    id: 4,
    image: MovieRateRrr,
    title: 'MovieRateRrr',
    github: 'https://github.com/SanofiRileyMorris/MovieRatingReactApp'
  },
  {
    id: 5,
    image: server,
    title: 'MovieRateRrrServer',
    github: 'https://github.com/SanofiRileyMorris/NESTJS'
  },
  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Recent Projects</h2>
      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
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
