import React from 'react';
import '../styles/Shop.css'; // Add your styles if needed
// import'../images

function Shop() {
  return (
    <div>
      <div className="Shop">
        <img
          className="picture2"
          src="images/pexels-alteredsnaps-14043693.jpg"
          alt="Shop Baking Supplies"
        />
        <h2>Place an order</h2>
        <p>Please let us know what you would like</p>
        <a
          href="http://localhost:5050/orders/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order
        </a>
      </div>

      <div className="Shop-cake">
        <h2>Gallery</h2>
        {/* Static gallery of pictures */}
        <div className="gallery">
          <img src="images/PXL_20231021_160809326~2.jpg" alt="Cake 1" />
          <img src="images/cake2.jpg" alt="Cake 2" />
          <img src="images/cake3.jpg" alt="Cake 3" />
        </div>
      </div>
    </div>
  );
}

export default Shop;
