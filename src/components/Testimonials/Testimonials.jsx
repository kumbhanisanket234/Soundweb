import React, { useState, useTransition } from 'react'
import './Testimonials.css'
import { img17, img18, img19, img20, img21, img22, img28, img30, img31 } from '../../assets'
import reviews from './reviewsarr'
import axios from 'axios'

const Testimonials = () => {

  const [revarr, setrevarr] = useState(reviews);
  const [hide, sethide] = useState("none");
  const [Add, setAdd] = useState("");
  const [name, setname] = useState("");
  const [detail, setdetail] = useState("");
  const [file, setFile] = useState();
  const [radio, setradio] = useState("");
  const [aftersubmit, setaftersubmit] = useState(0);
  const [arr, setarr] = useState({ name: "", detail: "", img: "" });
  const [a, seta] = useState("Enter All Details")

  var randomimg;


  const onSubmit = async (event) => {
    event.preventDefault();

    if (name && detail && radio) {
      const formData = new FormData(event.target);  

      console.log(formData);
      // Add the access key to the FormData object
      formData.append("access_key", "1039bbd4-7dc2-491e-8e01-38e75ce7060d");

      // Convert the FormData object to a JSON object
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      // Send the form data using fetch
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
      }
    }
  }

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }


  const handelsubmit = () => {
    if (name && detail && radio) {
      if (file) {
        setarr(
          {
            name: name,
            detail: detail,
            img: file
          }
        );
      }
      else {
        if (radio === "male") {
          randomimg = img30;
        }
        else {
          randomimg = img31;
        }

        setarr({
          name: name,
          detail: detail,
          img: randomimg
        }
        );
      }
      setname("")
      setdetail("")
      setFile("")
      sethide("none")
      setAdd("none")
      setaftersubmit(1);
    }
    else {
      alert(`${a}`)
    }

  }


  // const handelsubmit = () => {
  //   if (name && detail && radio) {
  //     if (file) {
  //       setrevarr((pre) => {
  //         return [...pre, {
  //           name: name,
  //           detail: detail,
  //           img: file
  //         }]
  //       });
  //     }
  //     else {
  //       if (radio === "male") {
  //         randomimg = img30;
  //       }
  //       else {
  //         randomimg = img31;
  //       }

  //       setrevarr((pre) => {
  //         return [...pre, {
  //           name: name,
  //           detail: detail,
  //           img: randomimg
  //         }]
  //       });
  //     }
  //     setname("")
  //     setdetail("")
  //     setFile("")
  //     sethide("none")
  //     setAdd("Add")
  //   }
  //   else {
  //     alert("Enter All Details!")
  //   }

  // }

  const handleadd = () => {

    if (hide === "none") {
      sethide("block");
      setAdd("none");
      
    }
    else {
      sethide("none");
      if (aftersubmit === 0) {
        setAdd("");
      }
    }
  }

  const back = {
    backgroundImage: `url(${img28})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderImage: 'fill 0 linear-gradient(#000, #0001)'

  }

  return (
    <section id='reviews' style={back}>
      <div className="container-fluid mt-5">
        <div className="row wrapper">
          <h2 className='mb-5'>Reviews</h2>
          {
            revarr.map((val, index) => {
              return (
                <div className="col-md-4 col-lg-4 gy-3 info-content2">
                  <img src={val.img} alt="user's pic" />
                  <div className="amount" style={{ textTransform: 'capitalize' }}>{val.name}</div>
                  <div style={{ color: 'white' }}>{val.detail}</div>
                </div>
              )
            })
          }



          <div className="col-md-4 col-lg-4 gy-3 info-content2" style={{ display: arr.name === "" ? "none" : 'block' }}>
            <img src={arr.img} alt="user's pic" />
            <div className="amount" style={{ textTransform: 'capitalize' }}>{arr.name}</div>
            <div style={{ color: 'white' }}>{arr.detail}</div>
            <i className="fa-solid fa-pen-to-square" onClick={handleadd}></i>
          </div>


          {/* <form onSubmit={onSubmit}>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
            <button type="submit">Submit Form</button>
          </form> */}



          <div className="col-md-12 gy-4 text-center ">
            <div className="container " style={{ display: hide }}>
              <div className="cardupr col-md-12 justify-content-center d-flex">
                <div className="card mt-3 revform" id='revform' style={{ width: '35rem', color: 'white', background: '#282c34', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
                  <i className="fa-solid fa-xmark position-absolute end-0 me-2 cross" onClick={handleadd}></i>
                  <div className="form-group m-4">

                    <form onSubmit={onSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className='form-control' name='name' value={name} onChange={(e) => { setname(e.target.value) }} style={{ background: '#1e2127', color: 'white', border: 'none', borderRadius: '5px' }} />

                    <label htmlFor="reviews">Reviews:</label>
                    <textarea rows="5" className='form-control' placeholder='Describe Your Experience' value={detail} name='message' onChange={(e) => { setdetail(e.target.value) }} style={{ background: '#1e2127', color: 'white', border: 'none', borderRadius: '5px' }}></textarea>

                    <div className='mt-2' style={{ position: 'relative', overflow: 'hidden', color: 'white', border: 'none', borderRadius: '5px' }}>
                      <input type="file" id="file" className='form-control mt-2' onChange={handleChange} style={{ position: 'absolute', top: 0, right: 0, opacity: 0, width: '100%', height: '100%' }} value="" />
                      <label htmlFor="file" style={{ cursor: 'pointer', display: 'inline-block', padding: '6px 12px', borderRadius: '10px', transition: 'background 0.3s' }}>
                        <i className="fas fa-upload" style={{ marginRight: '5px' }}></i> Upload Your Pic
                      </label>
                    </div>

                    <label style={{ color: 'white' }}>Gender:</label>
                    <div className="ms-2 form-check form-check-inline">
                      <input onChange={(e) => { setradio(e.target.value) }} className='form-check-input' type="radio" id="male" name='gender' value="male" style={{ background: '#1e2127', color: 'white', border: 'none', borderRadius: '5px' }} />
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input onChange={(e) => { setradio(e.target.value) }} className='form-check-input' type="radio" id="female" name='gender' value="female" style={{ background: '#1e2127', color: 'white', border: 'none', borderRadius: '5px' }} />
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="btnsubmit text-center mt-2">
                      <button className="btn btn-outline-light px-5 btns" type='submit' onClick={handelsubmit} style={{ borderRadius: '20px', border: '2px solid skyblue', transition: 'all 0.3s', boxShadow: 'none' }}>Submit</button>
                    </div>
                    </form> 
                  </div>

                </div>
              </div>
            </div>

            <br />
            <button className="btn btn-outline-light btnadd" style={{ width: '100px', boxShadow: 'none', border: '2px solid #f700ff', display: Add }} onClick={handleadd}>
              Add
            </button><br />

          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials;
