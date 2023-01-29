'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Categories } from 'types';
import { FilterDropdown } from 'components';

import { commons } from 'wording';
const { text } = commons;

import arrowIcon from 'public/svg/arrow-icon.svg';

interface Props {
  categories: Categories[];
  handleCategory: any;
}

export const FilterInput = ({ categories, handleCategory }: Props) => {
  const [dropdownCategories, setDropdownCategories] = useState(false);

  const handleToggleDropdownCategories = () =>
    setDropdownCategories(!dropdownCategories);

  return (
    <aside className='relative flex flex-col'>
      <button
        className='flex items-center justify-between px-4 h-10 bg-color-green-500 sm:w-56 sm:rounded-tl-lg sm:rounded-tr-lg'
        onClick={handleToggleDropdownCategories}
      >
        <h3 className='f-first text-fp-small uppercase'>{text.filter}</h3>
        <Image
          src={arrowIcon}
          alt='Arrow icon'
          width={20}
          height={20}
          className={`block animation-transform ${
            dropdownCategories ? 'rotate-180' : 'rotate-0'
          } `}
        />
      </button>
      {dropdownCategories && (
        <div className='absolute bottom-0 transform translate-y-full w-full z-[var(--layer-dropdown-z-index)]'>
          <FilterDropdown
            categories={categories}
            handleCategory={handleCategory}
          />
        </div>
      )}
    </aside>
  );
};
