import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import { testy } from './api/test';

function App() {
  const [test, setTest] = useState('');

  useEffect(() => {
    testy()
      .then((response) => {
        setTest(response.data[0].name);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios({ method: 'get', url: '/api/test' })
    //   .then((response) => {
    //     let data: string = response.data[0].name;
    //     console.log('Response', response.data);
    //     setTest(data);
    //   })
    //   .catch((err) => console.log(err));
  });

  if (test === '') {
    return <p>Tesing App</p>;
  } else {
    return <p>{test}</p>;
  }
}

export default App;
