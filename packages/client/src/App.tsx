import { useState, useEffect } from 'react';
import './App.css';
import { typedPromise } from './api/promise';

function App() {
  const [test, setTest] = useState('');

  useEffect(() => {
    typedPromise()
      .then((response) => {
        setTest(response.data[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (test === '') {
    return <p>Tesing App</p>;
  } else {
    return <p>{test}</p>;
  }
}

export default App;
