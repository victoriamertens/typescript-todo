import { SubTaskInput } from './SubTaskInput';

type SubTasksObjects = {
  name: string;
  id: Number;
  description: string;
  completed: boolean;
};

//There is a couple of different ways to destructure props, alternative = SubTask(props: {subtasks: []}) => props.subtasks
export function SubTask({ subtasks }: { subtasks: SubTasksObjects[] }) {
  console.log(subtasks);
  return (
    <div>
      <p>SubTask function working </p>
      {subtasks !== null && subtasks.map((subtask) => <p>{subtask.name}</p>)}
      <SubTaskInput />
    </div>
  );
}
