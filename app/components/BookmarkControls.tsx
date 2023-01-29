'use client';

import { SearchInput, FilterInput } from 'components';

import { Categories } from 'types';

interface Props {
  searchInput: string;
  categories: Categories[];
  handleCategory: any;
  handleSearch: any;
  handleInputChange: any;
}

export const BookmarkControls = ({
  searchInput,
  categories,
  handleSearch,
  handleCategory,
  handleInputChange
}: Props) => {
  return (
    <>
      <SearchInput
        searchInput={searchInput}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      <FilterInput categories={categories} handleCategory={handleCategory} />
    </>
  );
};
