import React from 'react';
import '../styles/Classes.css';  

function Classes() {
  return (
    <div className="Classes">
      <h2>Cake University</h2>
      <img
        className="picture4"
        src="images/pexels-tirachard-kumtanom-733856.jpg" // Original image source
        alt="Cake University"
      />
      <p>Learn how to decorate. Help grow your business and be a profitable business.</p>
      
      {/* Hyperlink to a YouTube search query */}
      <p>
        <a
          href="https://www.youtube.com/watch?v=u7di3JV_Kjw&t=19s"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"  
        >
          Learn Cake Decorate.
        </a>
      </p>
    </div>
  );
}

export default Classes;
