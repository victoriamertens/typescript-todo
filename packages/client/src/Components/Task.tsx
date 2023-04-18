import { useState } from 'react';
import './Task.css';
import { SubTask } from './SubTask';
import { Entry } from '../api/promise';
import { FC } from 'react';

export const Task: FC<Entry> = ({
  name,
  id,
  description,
  completed,
  category_id,
  sub_tasks,
}) => {
  const [checked, setChecked] = useState<boolean>(completed);

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
      <p className="task-line">{name}</p>
      <p className="task-line">{description}</p>
      <SubTask sub_tasks={sub_tasks} taskId={id} />
    </div>
  );
};
