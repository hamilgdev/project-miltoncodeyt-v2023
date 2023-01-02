import { ProjectCard } from 'components/ProjectCard';

import { ProjectsData, SocialNetworksData } from 'data';
const { title, description, projects } = ProjectsData;

import { commons } from 'wording';
const { text } = commons;

export const ProjectsSection = () => {
  const behance = SocialNetworksData.find(
    (social) => social.title === 'Behance'
  );

  return (
    <section className='my-8 text-center'>
      <div className='l-container'>
        <div className='bg-color-green-500-alpha-15 p-4 rounded-[var(--border-radius-semi)] lg:p-8'>
          <h2 className='title-section'>{title}</h2>
          <p className='description-section'>{description}</p>
        </div>
        <div className='grid gap-4 my-8 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map(({ title, urlDeploy, urlRepo, imageImport }) => (
            <ProjectCard
              key={title}
              title={title}
              urlDeploy={urlDeploy}
              urlRepo={urlRepo}
              imageImport={imageImport}
            />
          ))}
        </div>
        <div className='my-16'>
          <a
            href={behance?.url}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex px-4 py-2 f-first animation-transform uppercase text-color-black-500 gradient-bg-lime-to-sky rounded-[var(--border-radius-minor)] lg:text-fp-base'
          >
            {text.moreBehance}
          </a>
        </div>
      </div>
    </section>
  );
};
