import Image from 'next/image';
import copyIcon from 'public/svg/copyright.svg';
import { NetworkLikns } from 'components';

import { commons } from 'wording';
const { nickname } = commons;

export const Footer = () => {
  return (
    <footer className='sticky -bottom-0 h-14 pseudo-bg-backdrop-blur flex items-center justify-between z-[var(--layer-sticky-nav-z-index)]'>
      <div className='l-container flex items-center max-[360px]:justify-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src={copyIcon} alt='Copyright icon' width={16} height={16} />
          <small className='f-first text-fp-smaller uppercase lg:text-fp-base'>
            {nickname} {new Date().getFullYear()}
          </small>
        </div>
        <div className='flex gap-4 lg:gap-8 max-[360px]:hidden'>
          <NetworkLikns />
        </div>
      </div>
    </footer>
  );
};
