import React from 'react';
import '../assets/css/Home.css';
import car1 from '../assets/media/carousel1.jpg';
import car2 from '../assets/media/carousel2.jpg';
import car3 from '../assets/media/carousel3.jpg';
import avatar from '../assets/media/avatar.png';

export default function Home() {
  return (
    <main>

      <div className="kss-parenthero row">
        <div id="carouselExampleIndicators" className="kss-righthero carousel slide col-md-8" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={car1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={car2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={car3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="kss-lefthero col-md-4">
          <div className="kss-herocard">
            <img src={avatar} alt=''/>
            <div>
            <h4>Name</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aliquam!</p>
            </div>
          </div>
          <div className="kss-herocard">
            <img src={avatar} alt=''/>
            <div>
            <h4>Name</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aliquam!</p>
            </div>
          </div>
          <div className="kss-herocard">
            <img src={avatar} alt=''/>
            <div>
            <h4>Name</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aliquam!</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
