import axios from 'axios';

export type Entry = {
  name: string;
  id: number;
  description: string;
  completed: boolean;
  category_id: number | null;
  sub_tasks: [];
};

export type GetResponse = {
  data: Entry[];
};

type PostResponse = {
  data: '';
  status: Number;
};

export async function typedGet(): Promise<GetResponse> {
  const response = await axios({ method: 'get', url: '/api/tasks' });
  return Promise.resolve(response);
}

export async function typedPost(
  name: string,
  description: string
): Promise<PostResponse> {
  const response = await axios({
    method: 'post',
    url: '/api/tasks',
    data: { name, description },
  });
  return Promise.resolve(response);
}
