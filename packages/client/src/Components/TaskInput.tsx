import { typedPost } from '../api/promise';
import { useState } from 'react';

export default function TaskInput() {
  const [name, setName] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value: string = event.target.value;
    setName(value);
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value: string = event.target.value;
    setDescription(value);
  }

  function handleError() {
    alert('Need to have entries in the inputs');
  }

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={(event) => {
          handleNameChange(event);
        }}
      ></input>
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        onChange={(event) => handleDescriptionChange(event)}
      ></input>

      <button
        onClick={() => {
          if (name === undefined || description === undefined) {
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
