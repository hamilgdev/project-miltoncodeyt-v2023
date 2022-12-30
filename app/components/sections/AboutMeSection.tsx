import Image from 'next/image';
import decorativeCodeClose from 'public/svg/code-close.svg';

export const AboutMeSection = () => {
  return (
    <section className='l-section relative text-center'>
      <div className='l-container'>
        <h2 className='title-section'>Sobre Mí</h2>
        <p className='description-section'>
          El área principal de mi experiencia es el desarrollo front-end y todo
          lo relacionado con este lado de la web. HTML, CSS, JavaScript (ES5,
          ES6++), creación de aplicaciones web pequeñas y medianas, creación de
          complementos personalizados, funciones, animaciones y diseño de
          codificación simple.
        </p>
      </div>
      <div className='hidden lg:block lg:absolute lg:bottom-[10%] lg:right-[20%] '>
        <Image src={decorativeCodeClose} alt='Decorative Code close' />
      </div>
    </section>
  );
};
