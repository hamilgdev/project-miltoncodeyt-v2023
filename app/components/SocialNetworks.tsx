import { NetworkLikns } from 'components/NetworkLikns';

export const SocialNetworks = () => {
  return (
    <article className='flex items-center justify-center gap-8 h-16 mt-[-32px] m-auto rounded-[var(--border-radius-semi)] bg-color-green-500-alpha-15 max-w-screen-md z-[var(--layer-sticky-nav-z-index) shadow-box-lg after:absolute after:content-[""] after:w-full after:max-w-screen-md  after:h-full after:backdrop-blur-md after:z-[var(--layer-negative-z-index)]'>
      <NetworkLikns />
    </article>
  );
};
