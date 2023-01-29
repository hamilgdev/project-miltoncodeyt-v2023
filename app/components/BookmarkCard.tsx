import Image from 'next/image';

import { CategoryTag } from 'components';

interface Props {
  title: string;
  category: string;
  icon: string;
  image: string;
  url: string;
}

export const BookmarkCard = ({
  title,
  category,
  icon,
  image,
  url
}: Props): JSX.Element => {
  return (
    <a
      className='relative flex flex-col p-[1px] min-h-[128px] shadow-box-md justify-center rounded-[var(--border-radius-minor)] gradient-bg-lime-to-sky'
      target='_blank'
      rel='noopener noreferrer'
      href={url}
    >
      <div className='absolute left-2 top-2 z-[var(--layer-page-z-index)]'>
        <CategoryTag title={category} icon={icon} />
      </div>
      <div className='w-full h-full p-[3px] bg-color-black-500 rounded-[var(--border-radius-minor)] overflow-hidden'>
        <Image
          src={image}
          alt={title}
          width={1024}
          height={512}
          quality={100}
          className='w-full h-full object-cover animation-transform rounded-[var(--border-radius-minor)]'
        />
      </div>
      <div className='relative flex justify-center items-center h-8 pseudo-bg-backdrop-blur mt-[-25px] z-[var(--layer-page-z-index)]'>
        <h2 className='uppercase text-fp-smaller'>{title}</h2>
      </div>
    </a>
  );
};
