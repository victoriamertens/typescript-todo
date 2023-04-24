import { useState, useEffect } from 'react';
import './App.css';
import { typedGet, typedGetCategories, Entry } from './api/promise';
import { Task } from './Components/Task';
import TaskInput from './Components/TaskInput';

function App() {
  const [allTasks, setAllTasks] = useState<Entry[] | undefined>(undefined);
  const [allCategories, setAllCategories] = useState<Entry[] | undefined>(
    undefined
  );

  useEffect(() => {
    typedGet()
      .then((response) => {
        console.log('Tasks response:', response);
        setAllTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    typedGetCategories()
      .then((response) => {
        console.log('Categoires Response:', response);
        setAllCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allTasks === undefined) {
    return <p>No data returned</p>;
  } else {
    return (
      <div className="Tasks-Bar">
        <TaskInput />
        {allTasks.map((spot: Entry) => {
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
