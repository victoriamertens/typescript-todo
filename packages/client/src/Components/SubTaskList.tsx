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
      <p>SubTask function working </p>
      {sub_tasks !== null && sub_tasks.map((subtask) => <p>{subtask.name}</p>)}
      <SubTaskInput taskId={taskId} />
    </div>
  );
};
