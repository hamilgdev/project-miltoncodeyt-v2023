'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';

interface Props {
  title: string;
  srcImage: string;
}

export const SkillCard = ({ srcImage, title }: Props): JSX.Element => {
  const [animate, setAnimate] = useState('');
  /**
   * @description Determines a random value to apply the animation, after a delay of 1 sec, they are applied to the other elements
   */
  const animationRandom = () => {
    const animate = Math.floor(Math.random() * 2);
    return animate === 1
      ? setAnimate('animate-scale')
      : setTimeout(() => {
          setAnimate('animate-scale');
        }, 1000);
  };

  useEffect(() => {
    animationRandom();
  }, []);

  return (
    <article
      className={`${animate} relative w-16 h-16 flex items-center p-[1px] shadow-box-md justify-center rounded-[var(--border-radius-minor)] gradient-bg-lime-to-sky`}
    >
      <div className='flex justify-center items-center w-full h-full bg-color-black-500 rounded-[var(--border-radius-minor)]'>
        <Image
          src={srcImage}
          alt={title}
          width={60}
          height={60}
          className='aspect-[3/2] object-contain'
        />
      </div>
    </article>
  );
};
