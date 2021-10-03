import React from 'react';
import './assets/css/App.css';
import Card from './components/cards';
import './assets/css/cards.css';

function App() {
  return (
    <div className="container">
      
      <div class="left">
        <h1>Categories</h1><br/>
        
        <div>
           <a class="categories" href="www.#"><h3>All</h3></a>
           <a class="categories" href="www.#"><h3>Men</h3></a>
           <a class="categories" href="www.#"><h3>Home Accessories</h3></a>
           <a class="categories" href="www.#"><h3>Luggage</h3></a>
           <a class="categories" href="www.#"><h3>Outdoor Shoes</h3></a>
           <a class="categories" href="www.#"><h3>Kids & Baby</h3></a>
           <a class="categories" href="www.#"><h3>Camping & Hiking</h3></a>
           <a class="categories" href="www.#"><h3>Water Sports</h3></a>
           <a class="categories" href="www.#"><h3>Audio & Hifi</h3></a>
           <a class="categories" href="www.#"><h3>Water Sports</h3></a>
           <a class="categories" href="www.#"><h3>Toys & Games</h3></a>
           <a class="categories" href="www.#"><h3>Water Sports</h3></a>
        </div>
      </div>

      <div class="right">
        <div class="header">

          <div class="new">
            <h1>NEW</h1>
          </div>

          <div class="home">
            <b><p><a class="home" href="www.a">Home</a></p></b>
            <b><p><a class="home" href="www.a">About</a></p></b>
            <b><p><a class="home" href="www.a">Contact</a></p></b>
            <b><p><a class="home" href="www.a">FAQ</a></p></b>
            <b><p><a class="home" href="www.a">Login</a></p></b>
            </div>
        </div>

        <div class="content">
          <div class="up">
          <Card/>
          <Card/>
          <Card/>
          </div>
          <div class="up">
          <Card/>
          <Card/>
          <Card/>
          </div>
        </div>
        <br/>
      </div>

    </div>
    
  );
}

export default App;
