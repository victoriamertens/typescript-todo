import axios from 'axios';

export type Sub_Task = {
  name: string;
  id: Number;
  description: string;
  completed: boolean;
};

export type Entry = {
  name: string;
  id: number;
  description: string;
  completed: boolean;
  category_id: number | null;
  sub_tasks: Sub_Task[];
};
export type Category = {
  name: string;
  id: number;
  description: string;
};

export type GetResponse = {
  data: Entry[];
};

type PostResponse = {
  data: string;
  status: Number;
};

export type PutResponse = {
  data: string;
  status: Number;
};

export async function typedGet(): Promise<GetResponse> {
  const response = await axios({ method: 'get', url: '/api/tasks' });
  return Promise.resolve(response);
}

export async function typedGetCategories(): Promise<GetResponse> {
  const response = await axios({
    method: 'get',
    url: '/api/tasks/categories',
  });
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

export async function typedSubTaskPost(
  name: string,
  description: string,
  task_id: Number
): Promise<PostResponse> {
  const response = await axios({
    method: 'post',
    url: '/api/tasks/sub-tasks',
    data: { name, description, task_id },
  });
  return Promise.resolve(response);
}

export function typedPutTask(
  task_id: Number,
  completed: boolean
): Promise<PutResponse> {
  return axios({
    method: 'put',
    url: '/api/tasks',
    data: { task_id, completed },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log('ERROR:', err);
      return err;
    });
}
