import React from 'react';
import IMG1 from '../../assets/IMG1.jpg';
import IMG2 from '../../assets/IMG2.png';
import IMG3 from '../../assets/IMG3.png';
import IMG4 from '../../assets/IMG4.png';
import IMG5 from '../../assets/IMG5.jfif'



import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Movies Website',
      img: IMG1,
      github: 'https://github.com/Diya-28/movies-website',
    },
    {
      id: 2,
      title: 'Facial Detection ',
      img: IMG2,
      github: 'https://github.com/Diya-28/Facial-Detection-python',
    },
    {
      id: 3,
      title: 'Chat Application',
      img: IMG3,
      github: 'https://github.com/Diya-28/Chat',
    },
    {
      id: 4,
      title: 'Excel Clone',
      img: IMG4,
      github: 'https://github.com/Diya-28/Excel-clone',
    },
    {
      id: 5,
      title: 'Job portal server',
      img: IMG5,
      github: 'https://github.com/trendytech-jobportal/jobportal-server',
    },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn">GitHub</a>
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio