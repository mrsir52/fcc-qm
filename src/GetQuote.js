// import React from 'react'

// export default function GetQuote() {
//     const response = await fetch('http://example.com/movies.json');
//     const myJson = await response.json();
//     console.log(JSON.stringify(myJson));
//     return (
//         <div>
            
//         </div>
//     )
// }


import React, { useState, useEffect } from "react";

const GetQuote = () => {
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
    <div>
      <span id="text">{data.content}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
      
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
      </div>
    </div>
  );
};
export default GetQuote;