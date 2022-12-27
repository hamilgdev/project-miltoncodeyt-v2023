import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { HomeLayout } from '../components/layouts/HomeLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <HomeLayout title='Hamilton G. | Autodidacta tecnológico'>
        <h1 className='text-color-green-500'>Hello World</h1>
      </HomeLayout>
    </>
  );
}
