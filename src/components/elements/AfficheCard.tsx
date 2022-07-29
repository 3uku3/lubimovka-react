import { FC } from 'react';
import LinkWithArrow from './LinkWithArrow';
import afficheImage from '../../assets/images/affiche-card-image.jpg';

const AfficheCard: FC = () => {
  return (
    <article className='affiche-card'>
      <img className='affiche-card__image' src={afficheImage} alt='image'></img>
      <div className='affiche-card__container'>
        <p className='affiche-card__date'>
          15 декабря<span className='affiche-card__time'>11:00</span>
        </p>
        <h2 className='affiche-card__title'>Про линя</h2>
        <ul className='affiche-card__autors-list'>
          <li className='affiche-card__autor'>Драматург: Ольга Казакова</li>
          <li className='affiche-card__autor'>Режиссер: Катя Ганюшинаяч</li>
        </ul>
        <a className='affiche-card__link' href='#'>
          читка проекта Любимовка.Ещё
        </a>
        <div className='affiche-card__links'>
          <LinkWithArrow link='#' text='О СПЕКТАКЛЕ'></LinkWithArrow>
          <LinkWithArrow link='#' text='БИЛЕТЫ'></LinkWithArrow>
        </div>
      </div>
    </article>
  );
};

export default AfficheCard;
