import Image from 'next/image';

import behance from 'public/svg/behance.svg';
import instagram from 'public/svg/instagram.svg';
import linkedin from 'public/svg/linkedin.svg';
import twitter from 'public/svg/twitter.svg';

export const NetworkLikns = () => {
  return (
    <>
      <a
        href='https://twitter.com/miltoncodeyt'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block animation-transform'
      >
        <Image src={twitter} width={24} height={24} alt='Twitter icon' />
      </a>
      <a
        href='https://www.linkedin.com/in/miltoncodeyt/'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block animation-transform'
      >
        <Image src={linkedin} width={24} height={24} alt='Linkedin icon' />
      </a>
      <a
        href='https://www.instagram.com/miltoncodeyt/'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block animation-transform'
      >
        <Image src={instagram} width={24} height={24} alt='Instagram icon' />
      </a>
      <a
        href='https://www.behance.net/miltoncodeyt'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block animation-transform'
      >
        <Image src={behance} width={24} height={24} alt='Behance icon' />
      </a>
    </>
  );
};
