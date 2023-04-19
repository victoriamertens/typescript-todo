import axios from 'axios';

export type sub_tasks = {
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
  sub_tasks: sub_tasks[];
};

export type GetResponse = {
  data: Entry[];
};

type PostResponse = {
  data: '';
  status: Number;
};

type PutResponse = {
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

export async function typedSubTaskPost(
  name: string,
  description: string,
  task_id: Number
): Promise<PostResponse> {
  console.log('In post subtasks');
  const response = await axios({
    method: 'post',
    url: '/api/tasks/sub-tasks',
    data: { name, description, task_id },
  });
  return Promise.resolve(response);
}

export async function typedPutTask(
  task_id: Number,
  completed: boolean
): Promise<PutResponse> {
  const response = await axios({
    method: 'put',
    url: '/api/tasks',
    data: { task_id, completed },
  });
  return Promise.resolve(response);
}
