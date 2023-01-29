import Image from 'next/image';

interface Props {
  title: string;
  icon: string;
}

export const CategoryTag = ({ title, icon }: Props): JSX.Element => {
  return (
    <article className='flex items-center gap-1 p-1 bg-color-green-500 shadow-box-md rounded-[var(--border-radius-smaller)]'>
      <Image
        src={icon}
        alt={`Icono de ${title}`}
        width={16}
        height={16}
        className='block animation-transform'
      />
      <h4 className='f-first uppercase text-[12px]'>{title}</h4>
    </article>
  );
};
