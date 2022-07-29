import { FC } from 'react';
import logo from '../../assets/images/logo-footer.svg';
import imageShishki from '../../assets/images/shishki-logo.svg';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <img className='footer__logo' alt='Любимовка логотип' src={logo} />
        <div className='footer__links'>
          <nav className='footer__columns-nav'>
            <a className='footer__columns-link' href='#'>
              Любимовка
            </a>
            <a className='footer__columns-link' href='#'>
              Афиша
            </a>
            <a className='footer__columns-link' href='#'>
              Библиотека
            </a>
            <a className='footer__columns-link' href='#'>
              Блог
            </a>
            <a className='footer__columns-link' href='#'>
              Новости
            </a>
          </nav>
          <nav className='footer__columns-nav'>
            <a className='footer__columns-link' href='#'>
              О фестивале
            </a>
            <a className='footer__columns-link' href='#'>
              Организаторы
            </a>
            <a className='footer__columns-link' href='#'>
              История
            </a>
            <a className='footer__columns-link' href='#'>
              Контакты
            </a>
            <a className='footer__columns-link' href='#'>
              Для прессы
            </a>
          </nav>
          <nav className='footer__columns-nav'>
            <a className='footer__columns-link' href='#'>
              Все проекты
            </a>
            <a className='footer__columns-link' href='#'>
              Любимовка.Ещё
            </a>
            <a className='footer__columns-link' href='#'>
              Спектакли
            </a>
            <a className='footer__columns-link' href='#'>
              Сборник Любимовка.Пьесы
            </a>
            <a className='footer__columns-link' href='#'>
              Lark+Любимовка
            </a>
            <a className='footer__columns-link' href='#'>
              Практика постдраматурга
            </a>
            <a className='footer__columns-link' href='#'>
              Эхо Любимовки
            </a>
          </nav>
        </div>
        <div className='footer__partners'></div>
      </div>
      <div className='footer__bottom-container'>
        <div className='footer__caption'>
          <p className='footer__caption-text'>© Любимовка, 2021</p>
          <a className='footer__caption-text' href='#'>
            Политика конфиденциальности
          </a>
        </div>
        <div className='footer__caption-container'>
          <img
            className='footer__caption-item'
            alt='Shishki-logo'
            src={imageShishki}
          />
          <a className='footer__caption-text' href='#'>
            дизайн сайта — <br />
            shishki.collective
          </a>
          <p className='footer__caption-text'>
            вёрстка и разработака — <br />
            студенты Яндекс.Практикума
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
