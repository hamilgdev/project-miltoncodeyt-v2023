import 'styles/globals.scss';

import { NavBar } from 'components/NavBar';
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
        className='bg-no-repeat'
        style={{ backgroundImage: `url(${decorativeBgCodeBig.src})` }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
