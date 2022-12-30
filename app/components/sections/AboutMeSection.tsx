import Image from 'next/image';
import decorativeCodeClose from 'public/svg/code-close.svg';

import { AboutMeData } from 'data';
const { title, description } = AboutMeData;

export const AboutMeSection = () => {
  return (
    <section className='l-section relative text-center'>
      <div className='l-container'>
        <h2 className='title-section'>{title}</h2>
        <p className='description-section'>{description}</p>
      </div>
      <div className='hidden lg:block lg:absolute lg:bottom-[10%] lg:right-[20%] '>
        <Image src={decorativeCodeClose} alt='Decorative Code close' />
      </div>
    </section>
  );
};
