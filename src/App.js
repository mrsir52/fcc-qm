import React, { useState, useEffect } from "react";
import image from './assets/wor.jpg'
import './App.css';



function App() {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});
  

  async function fetchData() {
    const res = await fetch("https://api.quotable.io/random");
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="full-bg-size" >
      <div className="row h-100 justify-content-center align-items-center">
      <div id="quote-box">
            < h5 className='card-title' id="text">
            {data.content}
            </ h5>
            < p className='card=text' id="author">
            {data.author}
            </p>
            <a href="#" class="btn btn-primary" id="new-quote" onClick={fetchData}>New Quote</a>
            <a href="twitter.com/intent/tweet" class="btn btn-primary" id="tweet-quote" ><img src="https://fontawesome.com/icons/twitter?style=brands"></img></a>
        </div>
        
        </div>
    </div>
//     <section class="h-100">
//   <header class="container h-100">
//     <div class="d-flex align-items-center justify-content-center h-100">
//       <div class="d-flex flex-column">
//         <h1 class="text align-self-center p-2">item 1</h1>
//         <h4 class="text align-self-center p-2">item 2</h4>
//         <button class="btn btn-danger align-self-center p-2" type="button" name="button">item 3</button>
//       </div>
//     </div>
//   </header>
// </section>
  );
}

export default App;
