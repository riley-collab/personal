import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "./carousel.css";
import NIH from '../../assets/NIH.png'
import graphVis from '../../assets/graphvis.png'
import recipist from '../../assets/Recipist.png'
import MovieRateRrr from '../../assets/MovieRateRrr.png'
import server from '../../assets/server.png'
import RecipeAi from '../../assets/RecipeAi.png'

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
  {
    id: 6,
    image: RecipeAi,
    title: 'RecipeAi',
    github: 'https://github.com/riley-collab/ai-recipe-generator'
  },
]

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <Box sx={{ width: "30%", margin: "auto", mt: 4 }}>
        <Slider {...settings}>
          {data.map(({ id, image, title, github }) => (
            <article key={id} className="carousel__item">
              <div className="carousel__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="carousel__item-cta">
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          ))}
        </Slider>
      </Box>
    </section>
  );
};

export default Carousel;
