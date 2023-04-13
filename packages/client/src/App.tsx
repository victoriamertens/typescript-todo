import { useState, useEffect } from 'react';
import './App.css';
import { typedGet, typedPost, GetResponse, Entry } from './api/promise';
import Task from './Components/Task';

function App() {
  const [test, setTest] = useState<Entry[] | undefined>(undefined);
  const name: string = 'hardcodingname';
  const description: string = 'hardcodeddescription';

  useEffect(() => {
    typedGet()
      .then((response) => {
        setTest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (test === undefined) {
    return <p>No data returned</p>;
  } else {
    return (
      <div>
        {test.map((spot: Entry) => {
          return (
            <Task
              key={spot.id}
              name={spot.name}
              des={spot.description}
              complete={spot.completed}
            />
          );
        })}

        <button onClick={() => typedPost(name, description)}>
          Click me to Post
        </button>
      </div>
    );
  }
}

export default App;
