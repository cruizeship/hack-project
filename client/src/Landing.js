import React from 'react'
import './Landing.css'
import Options from './Options'
import {useEffect, useState} from "react";

function Landing() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleButtonClick = () => {
      console.log(inputValue);
      // You can also add further processing here
    };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Options />
    </div>
  );
}

export default Landing;
