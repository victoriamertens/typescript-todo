import { SubTaskInput } from './SubTaskInput';
import { sub_tasks } from '../api/promise';

type SubTasksObjects = {
  sub_tasks: sub_tasks[];
  taskId: Number;
};

//There is a couple of different ways to destructure props, alternative = SubTask(props: {subtasks: []}) => props.subtasks
export function SubTask(props: SubTasksObjects) {
  console.log(props.sub_tasks);
  return (
    <div>
      <p>SubTask function working </p>
      {props.sub_tasks !== null &&
        props.sub_tasks.map((subtask) => <p>{subtask.name}</p>)}
      <SubTaskInput taskId={props.taskId} />
    </div>
  );
}
