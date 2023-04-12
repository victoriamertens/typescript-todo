import { useState, useEffect } from 'react';
import './App.css';
import { typedGet, typedPost, GetResponse, Entry } from './api/promise';

function App() {
  const [test, setTest] = useState<GetResponse | undefined>(undefined);
  const name: string = 'hardcodingname';
  const description: string = 'hardcodeddescription';

  useEffect(() => {
    typedGet()
      .then((response) => {
        setTest(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (test === undefined) {
    return <p>Tesing App</p>;
  } else {
    return (
      <div>
        {test.data.map((spot: Entry) => {
          return <p key={spot.id}>{JSON.stringify(spot)}</p>;
        })}

        <button onClick={() => typedPost(name, description)}>
          Click me to Post
        </button>
      </div>
    );
  }
}

export default App;
