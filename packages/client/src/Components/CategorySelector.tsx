import { Category } from '../api/promise';
import { FunctionComponent } from 'react';

type CategoryProp = {
  categories: Category[];
};

export const CategorySelector: FunctionComponent<CategoryProp> = ({
  categories,
}) => {
  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select name="category" id="category">
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
