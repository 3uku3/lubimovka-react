import { FC } from 'react';
import type { cardInterface } from '../../store/cardReduser';
const Card: FC<cardInterface> = ({
  title,
  link,
  author,
  location,
  year,
  ...props
}) => {
  return (
    <article className='card'>
      <div className='card__container'>
        <p className='card__title'>{title}</p>
        <div className='card__button-container'>
          <a className='card__link' href={`${link}`}>
            Смотреть читку
            <div className='card__link-arrow'></div>
          </a>
          <button className='card__button'>
            Скачать пьесу
            <div className='card__button-arrow'></div>
          </button>
        </div>
      </div>
      <p className='card__author'>{author}</p>
      <p className='card__location'>{`${location} ${year}`}</p>
    </article>
  );
};
export default Card;
