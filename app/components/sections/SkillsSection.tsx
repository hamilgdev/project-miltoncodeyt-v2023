import { SkillCard } from 'components/SkillCard';

import cssIcon from 'public/svg/css.svg';
import dockerIcon from 'public/svg/docker.svg';
import emberIcon from 'public/svg/ember.svg';
import figmaIcon from 'public/svg/figma.svg';
import htmlIcon from 'public/svg/html.svg';
import javascriptIcon from 'public/svg/javascript.svg';
import nextjsIcon from 'public/svg/nextjs.svg';
import postgresIcon from 'public/svg/postgresql.svg';
import reactIcon from 'public/svg/react.svg';
import rubyIcon from 'public/svg/ruby.svg';
import sassIcon from 'public/svg/sass.svg';
import tailwindcssIcon from 'public/svg/tailwindcss.svg';

const dataSkills = [
  {
    importIcon: cssIcon.src,
    title: 'CSS'
  },
  {
    importIcon: dockerIcon.src,
    title: 'Docker'
  },
  {
    importIcon: emberIcon.src,
    title: 'Ember'
  },
  {
    importIcon: figmaIcon.src,
    title: 'Figma'
  },
  {
    importIcon: htmlIcon.src,
    title: 'HTML'
  },
  {
    importIcon: javascriptIcon.src,
    title: 'JavaScript'
  },
  {
    importIcon: nextjsIcon.src,
    title: 'NextJS'
  },
  {
    importIcon: postgresIcon.src,
    title: 'Postgres'
  },
  {
    importIcon: reactIcon.src,
    title: 'React'
  },
  {
    importIcon: rubyIcon.src,
    title: 'Ruby'
  },
  {
    importIcon: sassIcon.src,
    title: 'Sass'
  },
  {
    importIcon: tailwindcssIcon.src,
    title: 'Tailwindcss'
  }
];

export const SkillsSection = () => {
  return (
    <section className='l-section text-center'>
      <div className='l-container'>
        <h2 className='title-section'>Habilidades</h2>
        <p className='description-section'>
          Apasionado con las tecnologías, diseño estructuras de contenido
          simple, minimalistas e interacciones sencillas; desarrollo cosas desde
          cero y disfruto de nuevos retos.
        </p>
        <div className='l-section-sm flex gap-4 justify-center flex-wrap'>
          {dataSkills.map(({ title, importIcon }) => (
            <SkillCard key={title} title={title} srcImage={importIcon} />
          ))}
        </div>
      </div>
    </section>
  );
};
