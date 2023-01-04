'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { MenuData } from 'data';

export const NavBar = () => {
  const segment = useSelectedLayoutSegment();

  const isActive = (): string => {
    if (segment === null) return '/';
    else return segment;
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleButton = () => setToggleMenu(!toggleMenu);

  return (
    <header className='sticky top-0 flex items-center pseudo-bg-backdrop-blur z-[var(--layer-sticky-nav-z-index)] lg:justify-between'>
      <div className='w-full lg:max-w-screen-lg lg:m-auto xl:max-w-screen-xl flex flex-wrap lg:flex-nowrap items-center justify-between lg:h-14 relative lg:justify-center'>
        <div className='l-container flex items-center justify-between py-2 lg:py-0 lg:m-0 lg:w-auto'>
          <button
            className='btn-menu flex lg:hidden'
            onClick={handleToggleButton}
          >
            <span className={`icon-bar ${toggleMenu && 'animate-bar'}`}></span>
          </button>
        </div>

        <nav
          className={`absolute bg-color-black-500 lg:static lg:scale-y-100 top-12 lg:top-0 lg:shadow-none transform scale-y-0 origin-top transition-transform duration-300 py-2 lg:py-0 shadow-box-md w-full lg:w-auto flex flex-col lg:flex-row lg:justify-end items-center lg:gap-8 text-c-first-darker ease-in-out bg-c-accent-lighter lg:bg-transparent ${
            toggleMenu ? 'scale-y-100' : ''
          }`}
        >
          {MenuData.map(({ id, path, title }) => (
            <Link
              key={id}
              href={path}
              className={`f-first uppercase ${
                isActive() === path
                  ? 'text-color-cyan-500'
                  : 'text-color-white-500'
              }`}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
