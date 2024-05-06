import React from 'react';
import '../styles/Reviews.css'; // Add your styles if needed
import { Link } from 'react-router-dom';

function Reviews() {
  return (
    <div className="reviews">
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns. Please leave us a message.</p>
      {/* <img className="picture3" src="images/pexels-markus-winkler-18512872.jpg" alt="Customer Review" /> */}
      
      {/* This paragraph has two separate links: one for internal routing and one for an external URL */}
      <p>
        {/* React Router Link for internal navigation */}
        {/* <Link to="/write-a-review">Write a review</Link> */}

        {/* External link to another URL */}
        <a href="http://localhost:5050/contacts/new" target="_blank" rel="noopener noreferrer">
          Contact Us
        </a>
      </p>
    </div>
  );
}

export default Reviews;
