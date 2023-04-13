import { typedGet, typedPost, GetResponse, Entry } from '../api/promise';

export default function TaskInput() {
  const name: string = 'hardcodingname';
  const description: string = 'hardcodeddescription';

  return (
    <button onClick={() => typedPost(name, description)}>
      Click me to Post
    </button>
  );
}
