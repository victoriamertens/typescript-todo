import { useState } from 'react';
import './Task.css';
import { SubTaskList } from './SubTaskList';
import { Entry, typedPutTask, PutResponse } from '../api/promise';
import { FC } from 'react';
import { DropDownSVG } from '../assets/DropDownSVG';

export const Task: FC<Entry> = ({
  name,
  id,
  description,
  completed,
  category_id,
  sub_tasks,
}) => {
  const [viewDescription, setviewDescription] = useState<boolean>(false);
  const [showSubTasks, setShowSubTasks] = useState<boolean>(false);

  async function onComplete() {
    let response = await typedPutTask(id, !completed);
    let status = response.status;

    if (status === 200) {
      window.location.reload();
    } else if (status === 500) {
      alert('Updating task failed, try again.');
      window.location.reload();
    }
  }

  function changeShowSubTasks() {
    setShowSubTasks(!showSubTasks);
  }
  return (
    <div>
      <div className="task-item">
        <input
          id={name}
          className="task-checkbox"
          type="checkbox"
          defaultChecked={completed}
          onClick={() => onComplete()}
        />
        <label htmlFor={name}>{name}</label>
        <div id="dropdown-div">
          <button
            id="drop-down"
            onClick={() => {
              setviewDescription(!viewDescription);
            }}
          >
            <DropDownSVG />
          </button>
        </div>
      </div>
      <>
        {viewDescription && (
          <div>
            <p> Description: {description}</p>
            {showSubTasks && (
              <button onClick={() => changeShowSubTasks()}>
                Hide Sub-Tasks
              </button>
            )}
            {!showSubTasks && (
              <button onClick={() => changeShowSubTasks()}>
                Show Sub-Tasks
              </button>
            )}

            {showSubTasks && <SubTaskList sub_tasks={sub_tasks} taskId={id} />}
          </div>
        )}
      </>
      {/* {showSubTasks && (
        <button onClick={() => changeShowSubTasks()}>Hide Sub-Tasks</button>
      )}
      {!showSubTasks && (
        <button onClick={() => changeShowSubTasks()}>Show Sub-Tasks</button>
      )}

      {showSubTasks && <SubTaskList sub_tasks={sub_tasks} taskId={id} />} */}
    </div>
  );
};
