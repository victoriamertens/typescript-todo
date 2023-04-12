import axios from 'axios';

type Entry = {
  name: string;
};

type GetResponse = {
  data: Entry[];
};

type PostResponse = {
  data: '';
};

export async function typedGet(): Promise<GetResponse> {
  const response = await axios({ method: 'get', url: '/api/tasks' });
  return Promise.resolve(response);
}

export async function typedPost(): Promise<PostResponse> {
  const response = await axios({ method: 'post', url: '/api/tasks' });
  return Promise.resolve(response);
}
