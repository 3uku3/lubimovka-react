import { FC } from 'react';
import imageMore from '../../assets/images/lubimovka-more.jpg';
import ScrollToTop from '../elements/ScrollToTop';

const Projects: FC = () => {
  return (
    <main className='main-projects'>
      <ScrollToTop></ScrollToTop>
      <section className='projects'>
        <div className='projects__wrapper'>
          <div className='projects__left'></div>
          <div className='projects__right'>
            <h1 className='projects__title'>Проекты Любимовки</h1>
          </div>
        </div>
        <div className='projects__container'>
          <div className='projects__row'>
            <article className='projects__item'>
              <img className='projects__image' src={imageMore} alt='Ещё' />
              <div className='projects__text-container'>
                <h2 className='projects__subtitle'>Любимовка. Ещё</h2>
                <p className='projects__text'>
                  Межсезонные читки и обсуждение пьес из списка отмеченных
                  отборщиками Любимовки. Можно слушать, обсуждать и даже
                  участвовать.
                </p>
              </div>
            </article>
            <article className='projects__item'>
              <img className='projects__image' src={imageMore} alt='Ещё' />
              <div className='projects__text-container'>
                <h2 className='projects__subtitle'>Любимовка. Ещё</h2>
                <p className='projects__text'>
                  Межсезонные читки и обсуждение пьес из списка отмеченных
                  отборщиками Любимовки. Можно слушать, обсуждать и даже
                  участвовать.
                </p>
              </div>
            </article>
          </div>
          <div className='projects__row'>
            <article className='projects__item'>
              <img className='projects__image' src={imageMore} alt='Ещё' />
              <div className='projects__text-container'>
                <h2 className='projects__subtitle'>Любимовка. Ещё</h2>
                <p className='projects__text'>
                  Межсезонные читки и обсуждение пьес из списка отмеченных
                  отборщиками Любимовки. Можно слушать, обсуждать и даже
                  участвовать.
                </p>
              </div>
            </article>
          </div>
          <div className='projects__row'>
            <article className='projects__item'>
              <img className='projects__image' src={imageMore} alt='Ещё' />
              <div className='projects__text-container'>
                <h2 className='projects__subtitle'>Любимовка. Ещё</h2>
                <p className='projects__text'>
                  Межсезонные читки и обсуждение пьес из списка отмеченных
                  отборщиками Любимовки. Можно слушать, обсуждать и даже
                  участвовать.
                </p>
              </div>
            </article>
            <article className='projects__item'>
              <img className='projects__image' src={imageMore} alt='Ещё' />
              <div className='projects__text-container'>
                <h2 className='projects__subtitle'>Любимовка. Ещё</h2>
                <p className='projects__text'>
                  Межсезонные читки и обсуждение пьес из списка отмеченных
                  отборщиками Любимовки. Можно слушать, обсуждать и даже
                  участвовать.
                </p>
              </div>
            </article>
          </div>
          <div className='projects__row'>
            <article className='projects__item'>
              <img className='projects__image' src={imageMore} alt='Ещё' />
              <div className='projects__text-container'>
                <h2 className='projects__subtitle'>Любимовка. Ещё</h2>
                <p className='projects__text'>
                  Межсезонные читки и обсуждение пьес из списка отмеченных
                  отборщиками Любимовки. Можно слушать, обсуждать и даже
                  участвовать.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
