import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Policy.css';

const Policy = () => {
  return (
    <div className="privacy-policy">
      <Navbar />
      <div className="content">
        <div className="header">
          <h1>Privacy Policy</h1>
        </div>
        <div className="policy-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum quam sit amet neque eleifend, nec molestie eros maximus. Proin aliquam dui ac urna fringilla, nec malesuada justo ultricies. Sed sed nisi vitae est convallis sollicitudin. Nulla facilisi. Suspendisse potenti. Fusce vehicula efficitur ligula, ac lacinia neque consequat eu. Donec et justo eget lorem malesuada lacinia. Curabitur porttitor lacus nec enim tincidunt lacinia. Vestibulum vitae risus lacinia, congue arcu et, bibendum nulla. Phasellus non arcu diam. Donec consectetur velit sit amet mauris varius, sed tempor arcu malesuada.
          </p>
          {/* Add more policy content here */}
          <Link to="/" className="btn btn-outline-dark" style={{boxShadow:'none'}}>Back to Home</Link>

        </div>
      </div>
    </div>
  );
}

export default Policy;
