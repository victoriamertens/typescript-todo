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
  const CSS = `#filter-cat{ margin-right: 400px;}`;
  return (
    <div>
      <label htmlFor="category-filter" id="filter-cat">
        Filter by Category:
      </label>
      <select
        name="category"
        id="category-filter"
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
      <style>{CSS}</style>
    </div>
  );
};
