import { NetworkLikns } from 'components/NetworkLikns';

export const SocialNetworks = () => {
  return (
    <article className='flex items-center justify-center gap-8 h-16 mt-[-32px] m-auto rounded-[var(--border-radius-semi)] max-w-screen-md after:max-w-screen-md pseudo-bg-backdrop-blur z-[var(--layer-page-z-index)]'>
      <NetworkLikns />
    </article>
  );
};
