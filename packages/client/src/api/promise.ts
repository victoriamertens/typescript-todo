import axios from 'axios';

type Entry = {
  name: string;
};

type TestyResponse = {
  data: Entry[];
};

export async function typedPromise(): Promise<TestyResponse> {
  const response = await axios({ method: 'get', url: '/api/test' });
  return Promise.resolve(response);
}
