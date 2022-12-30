import Image from 'next/image';
import profilePic from 'public/img/profile.png';
import decorativeLineCodeBig from 'public/svg/line-code-big.svg';
import { SocialNetworks } from 'components/SocialNetworks';

export const BannerSection = () => {
  return (
    <section className='sm:mt-8'>
      <div className='l-container grid grid-rows-1 grid-flow-row auto-rows-min sm:grid-cols-2 sm:items-center lg:grid-cols-4'>
        <div className='mt-2 mb-4 flex flex-col lg:justify-self-end lg:col-start-1 lg:row-span-1 lg:col-end-3 lg:mr-[-85px]'>
          <h1 className='relative w-fit mb-4 font-bold uppercase text-fp-xxlarge whitespace-nowrap sm:text-fp-bigger md:text-[100px] sm:leading-snug lg:leading-tight after:content-[""] after:w-full after:h-2 after:bg-gradient-to-r from-[var(--color-lime-500)] to-[var(--color-sky-500)] after:absolute after:bottom-0 after:left-0 after:rounded-[var(--border-radius-semi)]'>
            Hamilton G.
          </h1>
          <p className='leading-tight text-fs-small sm:text-fs-regular lg:text-fs-big'>
            Autodidacta tecnológico:
          </p>
          <h2 className='text-fp-base sm:text-fp-large md:text-fp-xlarge lg:text-fp-xxlarge'>
            Diseño y Desarrollo soluciones
          </h2>
        </div>
        <div className='relative flex flex-col justify-self-end z-[var(--layer-page-z-index)] min-[320px]:w[20rem] sm:w-[25rem] pointer-events-none lg:justify-self-start xl:w-[28rem] lg:row-span-1 lg:col-start-3 lg:col-end-5'>
          <Image src={profilePic} alt='Hamilton G.' quality={100} />
          <Image
            className='hidden z-[var(--layer-negative-z-index)] lg:absolute lg:inline-flex lg:left-1/4 lg:bottom-[15%] xl:left-1/3'
            src={decorativeLineCodeBig}
            alt='Decorative line code'
          />
        </div>
      </div>
      <div className='l-container relative z-[var(--layer-page-z-index)]'>
        <SocialNetworks />
      </div>
    </section>
  );
};
