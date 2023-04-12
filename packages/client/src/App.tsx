import { useState, useEffect } from 'react';
import './App.css';
import { typedGet, typedPost } from './api/promise';

function App() {
  const [test, setTest] = useState('');
  const name: string = 'hardcodingname';
  const description: string = 'hardcodeddescription';

  useEffect(() => {
    typedGet()
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
    return (
      <div>
        <p>{test}</p>
        <button onClick={() => typedPost(name, description)}>
          Click me to Post
        </button>
      </div>
    );
  }
}

export default App;
