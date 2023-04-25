import { typedPost } from '../api/promise';
import { useState } from 'react';
import { postError } from '../ErrorHandling/errors';
import './TaskInput.css';
import { Category } from '../api/promise';

export default function TaskInput({
  allCategories,
}: {
  allCategories: Category[];
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Number | string>('');

  function handleImproperInputs() {
    alert('Need to enter information for name');
  }

  async function handleSubmission() {
    let response = await typedPost(name, description, category);
    let status: Number = response.status;
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
      <div>
        <label htmlFor="category">Select a Category:</label>
        <select
          name="category"
          id="category"
          onChange={(el) => {
            let idNumber = Number(el.target.value);
            setCategory(idNumber);
          }}
        >
          <option value="0">All Tasks</option>
          {allCategories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="task-input-btn">
        <button
          onClick={() => {
            if (name === '' || description === '') {
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
