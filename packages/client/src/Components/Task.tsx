import { GetResponse, Entry } from '../api/promise';

type TaskComponentProps = {
  key: Number;
  name: string;
  des: string | null;
  complete: boolean;
};

export default function Task(props: TaskComponentProps) {
  return <p>{props.name}</p>;
}
