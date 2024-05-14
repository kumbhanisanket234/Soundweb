import React, { useState } from 'react';
import './Blog.css';
import blogarr from './blogsarr';
import { Link } from 'react-router-dom';
import { img25 } from '../../assets';

function Blog() {
  // Initialize state for each blog post
  const [hideStates, setHideStates] = useState(blogarr.map(() => false));

  const toggleHide = (index) => {
    // Toggle the hide state for the clicked index
    const newHideStates = [...hideStates];
    newHideStates[index] = !newHideStates[index];
    setHideStates(newHideStates);
  }

  const back = {
    backgroundImage: `url(${img25})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderImage: 'fill 0 linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
  }

  return (
    <section id='blog' style={back}>
      <div className="container mt-5 justify-content-center d-flex">
    
        <div className="row">
        <h2 style={{ color: 'black' }}>Latest Posts</h2>
          {
            blogarr.map((val, index) => (
              <div className="col-md-4 gy-3 mt-5" key={index}>
                <div className="card mx-2" style={{backgroundColor:'black',color:'white'}}> 
                  <img src={val.img} className="card-img-top blogimg" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">
                      {val.details}
                      <span style={{ display: hideStates[index] ? 'block' : 'none' }}>{val.more}</span>
                    </p>
                    <button className={hideStates[index] ? "btn btn-outline-danger" : "btn btn-outline-info"} onClick={() => toggleHide(index)} style={{ boxShadow: 'none' }}>
                      {hideStates[index] ? "Show less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link to="/moreblogs">
          <button className="btn btn-outline-light btnmore" style={{ width: '100px', boxShadow: 'none', color: 'black' }}>
            See More
          </button>
        </Link>
      </div>
    </section>

  );
}

export default Blog;
