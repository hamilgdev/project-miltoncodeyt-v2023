'use client';

import Image from 'next/image';

import checkIcon from 'public/svg/check-icon.svg';

import { Categories } from 'types';

import { commons } from 'wording';
const { text } = commons;

interface Props {
  categories: Categories[];
  handleCategory: any;
}

export const FilterDropdown = ({ categories, handleCategory }: Props) => {
  return (
    <article className='w-full bg-color-green-400 rounded-b-lg hadow-box-md'>
      <div className='flex flex-col text-left'>
        <h3 className='px-4 py-2 w-full f-second text-fs-small font-bold bg-color-green-500-alpha-15 sm:px-4'>
          {text.categories}
        </h3>
        <div className='flex flex-col items-start'>
          {categories.map(({ category, checked }) => (
            <label
              key={category}
              className='flex items-center p-2 px-4 w-full hover:bg-color-green-500-alpha-15'
            >
              <input
                type='checkbox'
                name={category}
                className='absolute opacity-0'
                onChange={handleCategory}
              />
              <span
                className={`relative inline-flex items-center pl-6 before:absolute before:content-[""] before:left-0 before:top-[2.5px] before:w-4 before:h-4 before:rounded-sm before:border before:border-color-black-500 before:border-solid ${
                  checked
                    ? 'before:bg-color-cyan-500'
                    : 'before:bg-color-white-500'
                }`}
              >
                {checked && (
                  <Image
                    src={checkIcon}
                    alt='Check icon'
                    width={20}
                    height={20}
                    className='absolute -left-[2px] animation-transform'
                  />
                )}
                <span className='f-first text-fp-smaller uppercase'>
                  {category}
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </article>
  );
};
