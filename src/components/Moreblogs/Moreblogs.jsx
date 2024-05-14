import React, { useEffect, useState } from 'react';
import '../Blog/Blog.css';
import { blogarrmore } from '../Blog/blogsarr';
import { Link } from 'react-router-dom';
import { img26 } from '../../assets';
import './Moreblogs.css';

function Moreblogs() {

  const [s,sets]=useState(1);
  // Initialize state for each blog post
  const [hideStates, setHideStates] = useState(blogarrmore.map(() => false));
  const [search,setsearch]=useState("");
  const [arr,setarr]=useState([]);

  const toggleHide = (index) => {
    // Toggle the hide state for the clicked index
    const newHideStates = [...hideStates];
    console.log(newHideStates);
    newHideStates[index] = !newHideStates[index];
    setHideStates(newHideStates);
  }

  const back = {
    backgroundImage: `url(${img26})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  useEffect(() => {
    const element = document.getElementById("blog");
    if (element) {
      const offsetTop = element.offsetTop; // Calculate the offsetTop of the element
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const filteredResults = blogarrmore.filter((val) =>
      val.title.toLowerCase().includes(search.toLowerCase())    
    );
    setarr(filteredResults);
    sets(1);
    // console.log(filteredResults);
    // if(filteredResults.length===0){
    //   console.log("Not Found"); 
    // }
  }, [search]);

  const handlesearch=()=>{
    if(search.length===0){
      setarr(blogarrmore);
    }
    if(search.length>=0){
      if(arr.length===0){
        console.log("not found")
        sets(0)
      }
    }
  }

  return (
    <section id='blog' style={back}>
      <div className="container mt-5 justify-content-center align-content-center">
        <h2 style={{ color: 'white' }}>Latest Posts</h2><br/>
        <div className="col-md-12 d-grid justify-content-end">
        <div className="form-group search d-flex">
          <input type="text" className='form-control' placeholder='Search' onChange={(e)=>{setsearch(e.target.value)}}/><i className="me-2 fa-solid fa-magnifying-glass" onClick={handlesearch} style={{fontSize:'1.2rem',cursor:'pointer'}}></i>
        </div>
        </div>
      
        <div className="row mt-4 justify-content-center align-content-center">
        <div className="col-md-12 text-center">
         <h1 style={{color:'white',display:s===0 ? "" : "none"}}>Not Found</h1>
        </div>
        {
          arr.map((val,index)=>(
            
            <div className="col-md-4 gy-3 " key={index}>
            
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
       
        <div className="row mt-4 justify-content-center align-content-center">
          {arr.length===0 && s===1 &&(
            blogarrmore.map((val, index) => (
              <div className="col-md-4 gy-3 " key={index}>
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
          )}
        </div>

        <div className="col-md-12 text-center">
          <Link to="/" className="btn btn-outline-light mt-4" style={{ boxShadow: 'none' }}>Back to Home</Link>
        </div>
      </div>


    </section>
  );
}

export default Moreblogs;
