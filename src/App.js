import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
   const [picData,setPicData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
    .then(res => {
      console.log(res.data)
      setPicData(res.data)
    })
    .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <h1>
        NASA <span role="img" aria-label='go!'>🚀</span>!
      </h1>
      {/* {
        picData.map(pic => {
          return <Summary key = {pic.id} 
        })
      } */}
    </div>
  );
}

export default App;
