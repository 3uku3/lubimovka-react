import { FC } from 'react';

interface LinkArrowPropsType {
  link: string;
  text: string;
}

const LinkWithArrow: FC<LinkArrowPropsType> = ({ link, text }) => {
  return (
    <a className='link-arrow' href={link}>
      {text}
    </a>
  );
};

export default LinkWithArrow;
