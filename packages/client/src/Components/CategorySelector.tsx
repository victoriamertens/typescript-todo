import { Category } from '../api/promise';
import { FunctionComponent } from 'react';

type CategoryProp = {
  categories: Category[];
};

export const CategorySelector: FunctionComponent<CategoryProp> = ({
  categories,
}) => {
  return <p>Testing category selector {JSON.stringify(categories)}</p>;
};
