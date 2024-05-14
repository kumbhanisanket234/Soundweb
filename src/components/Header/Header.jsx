// import React from 'react';
// import './Header.css';
// import Navbar from '../Navbar/Navbar';
// import { img23 } from '../../assets';

// const Header = () => {
//   return (
//     <header id='header'>
//       <div className="container">
//         <Navbar />
//         <div className="row headphone " style={{ backgroundImage: `url(${img23})`}}>
//           <div className="col-md-6 ctaupr">

//               <div className="cta">
//                 <p className="course-name">Sound Design MasterClass</p>
//                 <h1>Learn the Art of Sound Design</h1>
//                 <a href="#" className="btn btn-primary demo-btn">Demo Lesson</a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { img23,img24 } from '../../assets';

const Header = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img23})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const back={
    backgroundImage: `url(${img24})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // borderImage:'fill 0 linear-gradient(#0001, #000)'
    //this is comment for chaman
  }

  return (
    <header id='header' style={back}>
      <div className="container" >
        <Navbar />
        <div className="row" >
          <div className="col-md-12 justify-content-center align-content-center headphone" style={backgroundStyle}>
            <div className="col-md-6 col-lg-7 ctaupr">
                <div className="cta">
                  <p className="course-name">Sound Design MasterClass</p>
                  <h1>Learn the Art of Sound Design</h1>
                  <a href="https://www.youtube.com/@SanketKumbhani" title='Access Playlist' target="_blank" className="btn btn-outline-dark demo-btn" style={{boxShadow:'none'}}>Demo Lesson</a>
                </div>
            </div>
          </div>
         
        </div>
      </div>
    </header>
  );
}

export default Header;
