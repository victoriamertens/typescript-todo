import { Categories } from '../api/promise';
import { FunctionComponent } from 'react';

type CategoryProps = {
  categories: Categories[];
};

export const CategorySelector: FunctionComponent<CategoryProps> = ({
  categories,
}) => {
  return <p>Testing category selector {JSON.stringify(categories)}</p>;
};
