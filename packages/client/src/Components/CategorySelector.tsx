import { Category } from '../api/promise';
import { FunctionComponent } from 'react';

type CategoryProp = {
  categories: Category[];
  setFilter: Function;
};

export const CategorySelector: FunctionComponent<CategoryProp> = ({
  categories,
  setFilter,
}) => {
  function handleChange(filterId: Number) {
    setFilter(filterId);
  }

  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select
        name="category"
        id="category"
        onChange={(el) => {
          let idNumber = Number(el.target.value);
          handleChange(idNumber);
        }}
      >
        <option value="0">All Tasks</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
