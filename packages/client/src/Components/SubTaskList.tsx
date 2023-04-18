import { SubTaskInput } from './SubTaskInput';
import { sub_tasks } from '../api/promise';
import { FunctionComponent } from 'react';

type SubTasksProps = {
  sub_tasks: sub_tasks[];
  taskId: Number;
};

//There is a couple of different ways to destructure props, alternative = SubTask(props: {subtasks: []}) => props.subtasks
export const SubTaskList: FunctionComponent<SubTasksProps> = ({
  sub_tasks,
  taskId,
}) => {
  console.log(sub_tasks);
  return (
    <div>
      <p>SubTask function working </p>
      {sub_tasks !== null && sub_tasks.map((subtask) => <p>{subtask.name}</p>)}
      <SubTaskInput taskId={taskId} />
    </div>
  );
};
