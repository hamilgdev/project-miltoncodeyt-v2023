import Image from 'next/image';

import gitIcon from 'public/svg/git-icon.svg';
import webIcon from 'public/svg/web-icon.svg';

import { commons } from 'wording';
const { text } = commons;

interface Props {
  title: string;
  urlDeploy: string;
  urlRepo: string;
  imageImport: string;
}

export const ProjectCard = ({
  title,
  urlDeploy,
  urlRepo,
  imageImport
}: Props): JSX.Element => {
  return (
    <article className='relative min-h-[250px] flex items-center p-[1px] shadow-box-md justify-center rounded-[var(--border-radius-minor)] gradient-bg-lime-to-sky'>
      <div className='w-full h-full bg-color-black-500 rounded-[var(--border-radius-minor)] overflow-hidden'>
        <Image
          src={imageImport}
          alt={title}
          width={1024}
          height={512}
          quality={100}
          className='w-full object-contain animation-transform'
        />
        <div className='relative flex justify-center items-center h-12 pseudo-bg-backdrop-blur mt-[-25px] z-[var(--layer-page-z-index)]'>
          <h2 className='uppercase hover:underline'>{title}</h2>
        </div>
        <div className='flex justify-between p-4'>
          <a
            href={urlRepo}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 animation-transform f-first text-fp-smaller uppercase'
          >
            <Image src={gitIcon} alt='Git icon' width={20} height={20} />
            <span className='leading-none'>{text.gitRepo}</span>
          </a>
          <a
            href={urlDeploy}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 animation-transform f-first text-fp-smaller uppercase'
          >
            <Image src={webIcon} alt='Web icon' width={20} height={20} />
            <span className='leading-none'>{text.deploy}</span>
          </a>
        </div>
      </div>
    </article>
  );
};
