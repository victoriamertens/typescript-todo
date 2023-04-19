import { useState } from 'react';
import './Task.css';
import { SubTaskList } from './SubTaskList';
import { Entry, typedPutTask, PutResponse } from '../api/promise';
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
  const [showSubTasks, setShowSubTasks] = useState<boolean>(false);

  async function onComplete() {
    console.log('in onComplete', checked);
    let { response }: PutResponse = await typedPutTask(id, !completed);
    console.log('IN TASK:', response);
    let status = response.status;
    if (status === 200) {
      console.log('Reloaded');
      window.location.reload();
    } else if (status === 500) {
      console.log('ERROR in onComplete:', status);
      alert('Updating task failed, try again.');
      window.location.reload();
    }
  }

  function changeShowSubTasks() {
    setShowSubTasks(!showSubTasks);
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
      {showSubTasks && (
        <button onClick={() => changeShowSubTasks()}>Hide Sub-Tasks</button>
      )}
      {!showSubTasks && (
        <button onClick={() => changeShowSubTasks()}>Show Sub-Tasks</button>
      )}

      {showSubTasks && <SubTaskList sub_tasks={sub_tasks} taskId={id} />}
    </div>
  );
};
