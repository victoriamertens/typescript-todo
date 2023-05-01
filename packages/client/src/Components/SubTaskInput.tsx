import { useState } from 'react';
import { postError } from '../ErrorHandling/errors';
import { typedSubTaskPost } from '../api/promise';
import './SubTaskInput.css';

export function SubTaskInput({ taskId }: { taskId: Number }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleImproperInputs() {
    alert('Need to have entries in the inputs');
  }

  async function handleSubTaskSubmission() {
    let response = await typedSubTaskPost(name, description, taskId);
    let status: Number = response.status;

    if (status === 200) {
      setDescription('');
      setName('');
      window.location.reload();
    } else {
      postError(status);
    }
  }

  return (
    <div>
      <label htmlFor="name">Sub-Task Name</label>
      <input
        value={name}
        type="text"
        id="name"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <label htmlFor="description">Description</label>
      <input
        value={description}
        type="text"
        id="description"
        onChange={(event) => setDescription(event.target.value)}
      ></input>

      <button
        onClick={() => {
          if (name === '' || description === '') {
            handleImproperInputs();
          } else {
            handleSubTaskSubmission();
          }
        }}
      >
        Add Sub-Task
      </button>
    </div>
  );
}
