/* import logo from './logo.svg';
import './App.css';

function App() {
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <a href="#">Pharmacy</a>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search Products" />
            <button>Search</button>
          </div>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Pharmacy</h1>
          <p>Your health is our top priority</p>
        </div>
      </section>
      <section className="featured-products">
        <div className="product-container">
          <h2>Featured Products</h2>
          <div className="products">
            <div className="product">
              <div className="product-image">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                />
              </div>
              <div className="product-info">
                <h3>Product Name</h3>
                <p>Product Description</p>
                <button>Add to Cart</button>
              </div>
            </div>
            <div className="product">
              <div className="product-image">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                />
              </div>
              <div className="product-info">
                <h3>Product Name</h3>
                <p>Product Description</p>
                <button>Add to Cart</button>
              </div>
            </div>
            <div className="product">
              <div className="product-image">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                />
              </div>
              <div className="product-info">
                <h3>Product Name</h3>
                <p>Product Description</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
           you will find every drug you need just ask.
          </p>
        </div>
      </section>
    </div>
   );
 }
 export default App;