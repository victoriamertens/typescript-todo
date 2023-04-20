import { typedPost } from '../api/promise';
import { useState } from 'react';
import { postError } from '../ErrorHandling/errors';
import './TaskInput.css';

export default function TaskInput() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleImproperInputs() {
    alert('Need to have entries in the inputs');
  }

  async function handleSubmission() {
    let response = await typedPost(name, description);
    let status: Number = response.status;
    console.log(status);
    if (status === 200) {
      window.location.reload();
    } else {
      postError(status);
    }
  }

  return (
    <div className="task-input">
      <div className="inputs">
        <label htmlFor="name">Task</label>
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
      </div>
      <div className="task-input-btn">
        <button
          onClick={() => {
            if (name === '' || description === '') {
              console.log(name, description);
              handleImproperInputs();
            } else {
              handleSubmission();
            }
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
