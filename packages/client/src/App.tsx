import { useState, useEffect } from 'react';
import './App.css';
import { typedGet, typedGetCategories, Entry, Category } from './api/promise';
import { Task } from './Components/Task';
import TaskInput from './Components/TaskInput';
import { CategorySelector } from './Components/CategorySelector';

function App() {
  const [allTasks, setAllTasks] = useState<Entry[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState(0);
  console.log(filter);

  useEffect(() => {
    typedGet()
      .then((response) => {
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

        <CategorySelector categories={allCategories} setFilter={setFilter} />
        {filter === 0
          ? allTasks.map((spot: Entry) => {
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
            })
          : allTasks.map((spot: Entry) => {
              if (spot.category_id === filter) {
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
              }
            })}
      </div>
    );
  }
}

export default App;
