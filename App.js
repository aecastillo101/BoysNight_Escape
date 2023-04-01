import './App.css';
import React, { useState, useEffect } from 'react';


// let hpDom = 96
// let hpKevin = 96
// let hpRobert = 96
// let hpJay = 96

// let domEl = document.getElementById("domEl")
// let kevinEl = document.getElementById("kevinEl")
// let robEl = document.getElementById("robEl")
// let jayEl = document.getElementById("jayEl")



// function increaseDom(){

  


// }
// function increaseJay(){



// }
// function increaseRob(){



// }
// function increaseKevin(){



// }
// function decreaseDom(){

  



// }
// function decreaseJay(){



// }
// function decreaseRob(){



// }
// function decreaseKevin(){



// }

function App() {
    let hpDom = 96;
    const domEl = document.getElementById('domEl');
    

    let hpKevin = 96;
    const kevinEl = document.getElementById('kevinEl');
    

    let hpRobert = 96;
    const robEl = document.getElementById('robEl');
   

    let hpJay = 96;
    const jayEl = document.getElementById('jayEl');
    
  
  function decreaseDom() {
    const domEl = document.getElementById('domEl');
    let hpDom = parseInt(domEl.textContent);
    hpDom--;
    domEl.textContent = hpDom;
  }
  
  function decreaseKevin() {
    const kevinEl = document.getElementById('kevinEl');
    let hpKevin = parseInt(kevinEl.textContent);
    hpKevin--;
    kevinEl.textContent = hpKevin;
  }
  
  function decreaseRob() {
    const robEl = document.getElementById('robEl');
    let hpRobert = parseInt(robEl.textContent);
    hpRobert--;
    robEl.textContent = hpRobert;
  }
  
  function decreaseJay() {
    const jayEl = document.getElementById('jayEl');
    let hpJay = parseInt(jayEl.textContent);
    hpJay--;
    jayEl.textContent = hpJay;
  }
  
  function increaseDom() {
    const domEl = document.getElementById('domEl');
    let hpDom = parseInt(domEl.textContent);
    hpDom++;
    domEl.textContent = hpDom;
  }
  
  function increaseKevin() {
    const kevinEl = document.getElementById('kevinEl');
    let hpKevin = parseInt(kevinEl.textContent);
    hpKevin++;
    kevinEl.textContent = hpKevin;
  }
  
  function increaseRob() {
    const robEl = document.getElementById('robEl');
    let hpRobert = parseInt(robEl.textContent);
    hpRobert++;
    robEl.textContent = hpRobert;
  }
  
  function increaseJay() {
    const jayEl = document.getElementById('jayEl');
    let hpJay = parseInt(jayEl.textContent);
    hpJay++;
    jayEl.textContent = hpJay;
  }

  return (
    <body>
      <div className='title'>
        <h1>Escape </h1>
        <p> A Boys Night Production </p>
      </div>
      <div 
      className='boy' 
      id='dom'>
        <h1>Dom</h1>
        <h3 id='domEl' > 96 </h3>
        <div>
          <button 
          className='minus'
          onClick={decreaseDom}>
            -
          </button>
          <button 
          className='plus'
          onClick={increaseDom}>
            +
          </button>
        </div>
      </div>
      <div 
      className='boy' 
      id='jay'>
        <h1>Jay</h1>
        <h3 id='jayEl'> 96 </h3>
        <div>
          <button className='minus'
          onClick={decreaseJay}>
            -
          </button>
          <button className='plus'
          onClick={increaseJay}>
            +
          </button>
        </div>
      </div>
      <div 
      className='boy' 
      id='rob'>
        <h1>Robert</h1>
        <h3 id='robEl'> 96 </h3>
        <div>
          <button className='minus'
          onClick={decreaseRob}>
            -
          </button>
          <button className='plus'
          onClick={increaseRob}>
            +
          </button>
        </div>
        </div>
      <div 
      className='boy' 
      id='kevin'>
        <h1>Kevin</h1>
        <h3 id='kevinEl'> 96 </h3>
        <div>
          <button className='minus'
          onClick={decreaseKevin}>
            -
          </button>
          <button className='plus'
          onClick={increaseKevin}>
            +
          </button>
        </div>
        </div>

        
    </body>
    
  );
}

export default App;