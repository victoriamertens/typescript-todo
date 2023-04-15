import { typedPost } from '../api/promise';
import { useState } from 'react';

export default function TaskInput() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleError() {
    alert('Need to have entries in the inputs');
  }

  return (
    <div>
      <label htmlFor="name">Name</label>
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
            console.log(name, description);
            handleError();
          } else {
            typedPost(name, description);
          }
        }}
      >
        Click me to Post
      </button>
    </div>
  );
}
