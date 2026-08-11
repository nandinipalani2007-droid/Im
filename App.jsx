import React, { useState } from "react";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="landing-page background-image">
      {!showProducts ? (
        <>
          <h1>Paradise Nursery</h1>
          <p>Bring Nature Home</p>

          <button onClick={handleGetStarted}>
            Get Started
          </button>
        </>
      ) : (
        <div className="product-list">
          <h2>Our Plants</h2>
          <p>Explore our beautiful collection of plants.</p>
        </div>
      )}
    </div>
  );
}

export default App;
