import { FC } from 'react';
import LinkWithArrow from '../elements/LinkWithArrow';
import image from '../../assets/images/blog-prewiev-img.jpg';

const BannerArchive: FC = () => {
  return (
    <section className='banner-archive'>
      <div className='banner-archive__container'>
        <h2 className='banner-archive__title'>
          Видео-архив<LinkWithArrow text='YouTube' link='#'></LinkWithArrow>всех
          читок и событий{' '}
        </h2>
        <p className='banner-archive__subtitle'>
          На все читки и мастер-классы фестиваля вход свободный по
          предварительной регистрации.
        </p>
        <img className='banner-archive__image' src={image}></img>
      </div>
    </section>
  );
};

export default BannerArchive;
