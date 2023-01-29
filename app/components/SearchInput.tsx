'use client';

import Image from 'next/image';

import { commons } from 'wording';
const { text } = commons;

import searchIcon from 'public/svg/search-icon.svg';

interface Props {
  searchInput: string;
  handleSearch: any;
  handleInputChange: any;
}

export const SearchInput = ({
  searchInput,
  handleSearch,
  handleInputChange
}: Props) => {
  return (
    <form className='flex h-10 flex-1' onSubmit={handleSearch}>
      <div className='flex flex-1 px-4 py-1 bg-color-green-400-alpha-50 rounded-tl-lg'>
        <label htmlFor='search' className='flex pr-2 sm:pr-4'>
          <Image
            src={searchIcon}
            alt='Search icon'
            width={20}
            height={20}
            className='animation-transform'
          />
        </label>
        <input
          type='search'
          id='search'
          className='w-full focus:outline-none bg-transparent text-fs-small font-medium text-color-white-500'
          placeholder='Font awesome, Unsplash...'
          onChange={handleInputChange}
          name='searchInput'
          value={searchInput}
        />
      </div>
      <button
        type='submit'
        className='py-2 w-28 bg-color-green-400 uppercase f-first text-fp-small rounded-tr-lg'
      >
        {text.search}
      </button>
    </form>
  );
};
