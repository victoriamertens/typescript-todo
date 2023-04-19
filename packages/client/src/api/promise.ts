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
  data: string;
  status: Number;
};

export type PutResponse = {
  response: {
    data: string;
    status: Number;
  };
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

export async function typedPutTask(task_id: Number, completed: boolean) {
  console.log('Made it to the function:', task_id, completed);
  return axios({
    method: 'put',
    url: '/api/tasks',
    data: { task_id, completed },
  })
    .then()
    .catch((err) => {
      console.log('ERROR:', err);
      return err;
    });

  // const response = await axios({
  //   method: 'put',
  //   url: '/api/tasks',
  //   data: { task_id, completed },
  // });
  // console.log('RESPONSE:', response);
  // return response;
}
