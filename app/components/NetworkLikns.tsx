import Image from 'next/image';

import { SocialNetworksData } from 'data';

export const NetworkLikns = () => {
  return (
    <>
      {SocialNetworksData.map(({ title, importIcon, url }) => (
        <a
          key={title}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block animation-transform'
        >
          <Image
            src={importIcon}
            width={24}
            height={24}
            alt={`${title} icon`}
          />
        </a>
      ))}
    </>
  );
};
