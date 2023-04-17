import { useState } from 'react';
import './Task.css';
import { SubTask } from './SubTask';
import { Entry } from '../api/promise';

export default function Task(props: Entry) {
  console.log(props);
  const [checked, setChecked] = useState<boolean>(props.completed);

  function onComplete() {
    console.log('in onComplete', checked);
    setChecked(!checked);
  }
  return (
    <div>
      {!checked && (
        <input
          className="task-line"
          type="checkbox"
          onClick={() => onComplete()}
        />
      )}
      {checked && (
        <input type="checkbox" defaultChecked onClick={() => onComplete()} />
      )}
      <p className="task-line">{props.name}</p>
      <p className="task-line">{props.description}</p>
      <SubTask sub_tasks={props.sub_tasks} taskId={props.id} />
    </div>
  );
}
