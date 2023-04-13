import { useState } from 'react';
import './Task.css';

type TaskComponentProps = {
  key: Number;
  name: string;
  des: string | null;
  complete: boolean;
};

export default function Task(props: TaskComponentProps) {
  const [checked, setChecked] = useState(props.complete);

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
    </div>
  );
}
