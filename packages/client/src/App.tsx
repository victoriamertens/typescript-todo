import { useState, useEffect } from 'react';
import './App.css';
import { typedGet, typedPost, GetResponse, Entry } from './api/promise';
import Task from './Components/Task';
import TaskInput from './Components/TaskInput';

function App() {
  const [test, setTest] = useState<Entry[] | undefined>(undefined);

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
        <TaskInput />
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
      </div>
    );
  }
}

export default App;
