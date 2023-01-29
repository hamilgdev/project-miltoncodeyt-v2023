import Image from 'next/image';

import withoutResult from 'public/gif/without-result.gif';

import { commons } from 'wording';
const { text } = commons;

export const WithoutResultCard = () => {
  return (
    <>
      <Image
        src={withoutResult}
        alt='Travolta confused'
        width={512}
        height={512}
        quality={100}
        className='w-80 pointer-events-none rounded-md'
      />
      <h4 className='f-first uppercase text-color-white-500 text-fp-smaller'>
        {text.withoutResult}
      </h4>
    </>
  );
};
