import { SubTaskInput } from './SubTaskInput';
import { Sub_Task } from '../api/promise';
import { FunctionComponent } from 'react';

type SubTasksProp = {
  sub_tasks: Sub_Task[];
  taskId: Number;
};

//There is a couple of different ways to destructure props, alternative = SubTask(props: {subtasks: []}) => props.subtasks
export const SubTaskList: FunctionComponent<SubTasksProp> = ({
  sub_tasks,
  taskId,
}) => {
  return (
    <div>
      {sub_tasks !== null &&
        sub_tasks.map((subtask) => (
          <div>
            <input
              id={subtask.name}
              className="task-checkbox"
              type="checkbox"
              defaultChecked={subtask.completed}
            />
            <label htmlFor={subtask.name}>{subtask.name}</label>
          </div>
        ))}
      <SubTaskInput taskId={taskId} />
    </div>
  );
};
