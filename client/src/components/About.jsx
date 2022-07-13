import React from 'react';
import '../assets/css/About.css';

function About() {
  return (
    <div className='kss-about-wrapper container'>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              KRISHAK SEVA SANSTHAN
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>Krishak Seva Sansthan</strong> is a non-profit organization established in January 20**. It is working towards the modern and natural techniques that can help rural farmers gain more profits from thier fields.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Who is the founder of Krishak Seva Sansthan ?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <strong>Mr. Umesh Kumar Prajapati</strong> is the founder of Krishak Seva Sansthan. He started this initiative in August 20** but due to some circumstances the date of launch was postponed. And Finally in January 20**, he established this NGO to help and reach to poor farmers over the country. He is also a lecturer in Bageshwari Mahavidyalya Diha Azamgarh Uttar Pradesh.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Why Krishak Seva Sansthan ?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>Lorem, ipsum.</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi minus id, in dolorem, odio ducimus quibusdam dolorum rerum dolore quaerat, provident a deleniti non? Iste assumenda inventore eligendi iure veritatis?
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;