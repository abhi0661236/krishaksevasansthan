import React from 'react';
import '../assets/css/Home.css';
import car1 from '../assets/media/carousel1.jpg';
import car2 from '../assets/media/carousel2.jpg';
import car3 from '../assets/media/carousel3.jpg';
import avatar from '../assets/media/avatar.png';
import Vermicompost from '../assets/media/vermicompost.jpeg';

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
            <img src={avatar} alt='' />
            <div>

              <h4>Umesh Kumar Prajapati</h4>
              <p>Lecturer, Bageswari ITI</p>
            </div>
          </div>
          <div className="kss-herocard">
            <img src={avatar} alt='' />
            <div>
              <h4>Name</h4>
              <p>Repellendus, aliquam!</p>
            </div>
          </div>
          <div className="kss-herocard">
            <img src={avatar} alt='' />
            <div>
              <h4>Name</h4>
              <p>Lorem ipsum aliquam!</p>
            </div>
          </div>
        </div>
      </div>


      <section className='kss-about'>
        <div className="kss-sec-title">
          <h4>Who We Are ?</h4>
        </div>
        <div className="kss-about-info">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit eius esse. Sunt provident cum earum, officia beatae ut corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolore assumenda eos consectetur iusto et neque ipsa eius nostrum, odio non rerum dicta consequatur ut explicabo fugit, similique culpa iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptate rerum libero recusandae, nisi sunt qui maiores eaque atque sequi velit ratione fugiat eius. Molestias quae suscipit deleniti unde ipsum.
          </p>
        </div>
      </section>
      <section className='kss-mission'>
        <div className="kss-sec-title">
          <h4>Our Mission</h4>
        </div>
        <div className="kss-mission-card1">
          <h5>Vermi Composting</h5>
          <p style={{color: '#5c5c5c'}}>Vermicompost (vermi-compost) is the product of the decomposition process using various species of worms, usually red wigglers, white worms, and other earthworms, to create a mixture of decomposing vegetable or food waste, bedding materials, and vermicast. This process is called vermicomposting.
          </p>
        </div>
        <div className="kss-mission-card2">
          <img src={Vermicompost} alt="" />
        </div>

      </section>

    </main>
  )
}
