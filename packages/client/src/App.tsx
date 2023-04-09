import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [test, setTest] = useState('');

  useEffect(() => {
    axios({ method: 'get', url: '/api/test' })
      .then((response) => setTest(response.data))
      .catch((err) => console.log(err));
  });

  if (test === '') {
    return <p>Tesing App</p>;
  } else {
    return <p>{test}</p>;
  }
}

export default App;
