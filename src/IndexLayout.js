import React from 'react';
import './IndexLayout.css'; // Ensure this file exists and is named correctly

const IndexLayout = () => {
  return (
    <div>
      <h2>Select Your Layout</h2>
      <div className="container">
        <div className="image-container" data-text="Combination">
          <a href="./BOQ/indexBOQ.html">
            <img src="./images/Combination.2a9f876caf5f775d9087.jpg" alt="Image 1" />
          </a>
        </div>
        <div className="image-container" data-text="Coworking">
          <a href="./BOQ/indexBOQ.html">
            <img src="./images/Coworking.74e92a69fdb3e29e43b9.jpg" alt="Image 2" />
          </a>
        </div>
        <div className="image-container" data-text="Minimal">
          <a href="./BOQ/indexBOQ.html">
            <img src="./images/Minimal.6070a8a8ec2ed28895e4.jpg" alt="Image 3" />
          </a>
        </div>
        <div className="image-container" data-text="Open Plan">
          <a href="./BOQ/indexBOQ.html">
            <img src="./image/Open Plan.77a43648aa1d556dca34.jpg" alt="Image 4" />
          </a>
        </div>
      </div>
      <a className="button" href="./BOQ/indexBOQ.html">Next</a>
    </div>
  );
};

export default IndexLayout;