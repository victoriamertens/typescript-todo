import { useState, useEffect } from 'react';
import './App.css';
import { typedGet, typedPost, GetResponse, Entry } from './api/promise';
import { Task } from './Components/Task';
import TaskInput from './Components/TaskInput';

function App() {
  const [test, setTest] = useState<Entry[] | undefined>(undefined);

  useEffect(() => {
    typedGet()
      .then((response) => {
        console.log('HERE:', response);
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
              description={spot.description}
              completed={spot.completed}
              sub_tasks={spot.sub_tasks}
              id={spot.id}
              category_id={spot.category_id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
