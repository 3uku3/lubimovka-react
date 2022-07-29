import { FC } from 'react';
import Title from '../elements/Title';
import iconDown from '../../assets/icons/arrow-down.svg';
import ScrollToTop from '../elements/ScrollToTop';
const News: FC = () => {
  return (
    <main className='main-news'>
      <ScrollToTop></ScrollToTop>
      <section className='news'>
        <div className='news__container'>
          <div className='news__left'></div>
          <div className='news__right'>
            <Title>Новости</Title>
            <div className='news__filters'>
              <button className='news__month button-arrow'>
                Месяц <img src={iconDown} alt='стрелка вниз'></img>
              </button>
              <button className='news__year button-arrow'>
                Год <img src={iconDown} alt='стрелка вниз'></img>
              </button>
            </div>
          </div>
        </div>
        <div className='news__items'>
          <article className='news__item'>
            <div className='news__wrapper'>
              <h2 className='news__title'>Дизайн Любимовки-2021</h2>
              <p className='news__text'>
                Присылайте ваши варианты текстовых описаний.
              </p>
            </div>
            <p className='news__date'>05 октября 2020</p>
          </article>
          <article className='news__item'>
            <div className='news__wrapper'>
              <h2 className='news__title'>
                Mosbrew Brewhouse сделал свой выбор
              </h2>
              <p className='news__text'>
                Грант на постановку получит пьеса «Утечка» Юлии Савиковской.
              </p>
            </div>
            <p className='news__date'>05 октября 2020</p>
          </article>
          <article className='news__item'>
            <div className='news__wrapper'>
              <h2 className='news__title'>
                «Я всегда пишу про странных женщин»
              </h2>
              <p className='news__text'>
                Интервью с драматургом Мартой Райцес.
              </p>
            </div>
            <p className='news__date'>05 октября 2020</p>
          </article>
          <article className='news__item'>
            <div className='news__wrapper'>
              <h2 className='news__title'>Дизайн Любимовки-2021</h2>
              <p className='news__text'>
                Присылайте ваши варианты текстовых описаний.
              </p>
            </div>
            <p className='news__date'>05 октября 2020</p>
          </article>
          <article className='news__item'>
            <div className='news__wrapper'>
              <h2 className='news__title'>
                Mosbrew Brewhouse сделал свой выбор
              </h2>
              <p className='news__text'>
                Грант на постановку получит пьеса «Утечка» Юлии Савиковской.
              </p>
            </div>
            <p className='news__date'>05 октября 2020</p>
          </article>
          <article className='news__item'>
            <div className='news__wrapper'>
              <h2 className='news__title'>
                «Я всегда пишу про странных женщин»
              </h2>
              <p className='news__text'>
                Интервью с драматургом Мартой Райцес.
              </p>
            </div>
            <p className='news__date'>05 октября 2020</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default News;
