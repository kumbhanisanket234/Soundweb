import React, { useEffect, useState } from 'react';
import { img1, img2, img3, img4, img5, img6, img27 } from '../../assets';
import './Topics.css';

const Topics = () => {
  const [curimg, setcurimg] = useState(img1);
  const imgarr = [img1, img2, img3, img4, img5, img6];
  const [ind, setind] = useState(0);

  const back = {
    backgroundImage: `url(${img27})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderImage: 'fill 0 linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))'

  }

 
  useEffect(()=>{
    const interval= setInterval(() => {
      setind(pre=>(pre+1)%imgarr.length)
    }, 1000);
    
    return ()=>clearInterval(interval);
    
  },[])

  useEffect(()=>{
    setcurimg([imgarr[ind]])
   
  },[ind])
   


  return (
    <section id='topics' className='black' style={back}>
      <div className="container justify-content-center align-items-center mt-5">
        <h2>What Will You Learn?</h2>
        <div className="row content-container">
          <div className="col-md-6">
            <ul className='topics-list'>
              <li>What are Frequencies?</li>
              <li>Using the DAW</li>
              <li>Vocals Processing</li>
              <li>Mixing</li>
              <li>Mixing Console</li>
              <li>Mastering</li>
            </ul>
          </div>
          <div className="col-md-6 topic-img">
            <img src={curimg} alt="aboutQue" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topics;
