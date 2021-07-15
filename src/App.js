import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
   const [picData,setPicData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res.data)
      setPicData(res.data)
    })
    .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <p>
        NASA <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
