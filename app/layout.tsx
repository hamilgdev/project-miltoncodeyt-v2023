'use client';

import 'styles/globals.scss';

import { NavBar, Footer } from 'components';

import decorativeBgCodeBig from 'public/svg/bg-code-lines.svg';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body
        className='bg-no-repeat bg-contain'
        style={{ backgroundImage: `url(${decorativeBgCodeBig.src})` }}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
