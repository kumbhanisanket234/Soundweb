import React from 'react';
import './Info.css';
import { img7, img8, img9, img29 } from '../../assets';
import staffarr from './staffarr';

const Info = () => {

  const back = {
    backgroundImage: `url(${img29})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderImage: 'fill 0 linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,1))'

  }

  return (
    <section id='info' className='' style={back}>
      <div className="container-fluid mt-5">
        <div className="row wrapper">
          <div className="col-md-6 col-lg-6 info-content">
            <img src={img9} alt="" />
            <div className="amount">25000+</div>
            <div className="type">students</div>
          </div>
          <div className="col-md-6 col-lg-6 info-content">
            <img src={img8} alt="" />
            <div className="amount">26 HRS</div>
            <div className="type">Video Content</div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4 staff">
        
        <div className="row wrapper">
        <h2>Staff</h2>
          {
            staffarr.map((val, index) => {
              return (
                <div className="col-md-4 col-lg-4 info-content3 gy-4" style={{textTransform:'capitalize'}}>
                  <img src={val.img} alt="staff img" />
                  <div className="name">Name: {val.name}</div>
                  <div className="age">Age: {val.age}</div>
                  <div className="course">Field: {val.field}</div>
                  <div className="exp">Experience: {val.exp}</div>

                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Info;
