import { useState } from 'react';
import './Task.css';
import { SubTask } from './SubTask';

type TaskComponentProps = {
  key: Number;
  name: string;
  des: string | null;
  complete: boolean;
  subtasks: [];
};

export default function Task(props: TaskComponentProps) {
  console.log(props);
  const [checked, setChecked] = useState<boolean>(props.complete);

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
      <p className="task-line">{props.des}</p>
      <SubTask subtasks={props.subtasks} />
    </div>
  );
}
