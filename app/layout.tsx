import 'styles/globals.scss';
import { NavBar } from 'components/NavBar';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
