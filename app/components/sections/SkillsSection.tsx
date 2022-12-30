import { SkillCard } from 'components/SkillCard';

import { SkillsData } from 'data';
const { title, description, skills } = SkillsData;

export const SkillsSection = () => {
  return (
    <section className='l-section text-center'>
      <div className='l-container'>
        <h2 className='title-section'>{title}</h2>
        <p className='description-section'>{description}</p>
        <div className='l-section-sm flex gap-4 justify-center flex-wrap'>
          {skills.map(({ title, importIcon }) => (
            <SkillCard key={title} title={title} srcImage={importIcon} />
          ))}
        </div>
      </div>
    </section>
  );
};
