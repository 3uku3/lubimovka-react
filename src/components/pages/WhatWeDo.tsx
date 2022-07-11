import { FC } from "react";
import { NavLink } from "react-router-dom";
import iconLeft from "../../assets/icons/elipse-left.svg";
import iconRight from "../../assets/icons/elipse-right.svg";
import Title from "../elements/Title";
import imageHead from "../../assets/images/blog-prewiev-img.jpg";
import image1 from "../../assets/images/what-we-do.jpg";
import image2 from "../../assets/images/what-we-do1.jpg";

const WhatWeDo: FC = () => {
  return (
    <main className="main-what-we-do">
      <div className="what-we-do">
        <section className="what-we-do__head">
          <nav className="what-we-do__nav">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header__nav-item header__nav-item_active"
                  : "header__nav-item"
              }
              to="/about-us/what-we-do"
            >
              <img className="header__nav-left" src={iconLeft}></img>
              <p className={"header__nav-link"}>Что мы делаем</p>
              <img className="header__nav-right" src={iconRight}></img>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header__nav-item header__nav-item_active"
                  : "header__nav-item"
              }
              to="/about-us/what-we-do"
            >
              <img className="header__nav-left" src={iconLeft}></img>
              <p className={"header__nav-link"}>Организаторы</p>
              <img className="header__nav-right" src={iconRight}></img>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header__nav-item header__nav-item_active"
                  : "header__nav-item"
              }
              to="/about-us/what-we-do"
            >
              <img className="header__nav-left" src={iconLeft}></img>
              <p className={"header__nav-link"}>Попечители</p>
              <img className="header__nav-right" src={iconRight}></img>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header__nav-item header__nav-item_active"
                  : "header__nav-item"
              }
              to="/about-us/what-we-do"
            >
              <img className="header__nav-left" src={iconLeft}></img>
              <p className={"header__nav-link"}>Идеология</p>
              <img className="header__nav-right" src={iconRight}></img>
            </NavLink>
          </nav>
          <Title>Фестиваль молодой драматургии Любимовка —</Title>
          <div className="what-we-do__wrapper">
            <img
              className="what-we-do__image"
              src={imageHead}
              alt="Фестиваль"
            ></img>
            <div>
              <p className="what-we-do__subtitle">
                это независимый некоммерческий коллективный проект российских
                драматургов.
              </p>
              <p className="what-we-do__subtitle">
                В первые годы своего существования фестиваль проходил в
                подмосковной усадьбе Константина Сергеевича Станиславского,
                которое и дало название фестивалю.
              </p>
            </div>
          </div>
        </section>
        <section className="what-we-do__info">
          <div className="what-we-do__info-head">
            <div className="what-we-do__info-left">
              <h2 className="what-we-do__info-title">Что мы делаем</h2>
              <h3 className="what-we-do__info-subtitle">Каждый год мы проводим приём и отбор новых пьес начинающих и признанных русскоязычных авторов. </h3>
              <p className="what-we-do__info-text">Мы отдаём предпочтение пьесам, которые передают уникальное и свежее авторское видение, затрагивают актуальные темы, написаны современным языком и оригинальны по форме, а также произведениям с живыми персонажами, увлекательным сюжетом и запоминающимися образами.</p>
            </div>
            <img src={image1} alt="Что мы делаем" />
          </div>
          <div className="what-we-do__info-container">
            <img src={image2} alt="Что мы делаем" />
            <div className="what-we-do__info-right">
              <h3 className="what-we-do__info-subtitle">Пьесы, прошедшие отбор, мы представляем профессионалам театра и всем желающим в форме режиссёрских читок.</h3>
              <p className="what-we-do__info-text">Вход на все мероприятия фестиваля Любимовка всегда был и всегда будет свободным.</p>
            </div>
          </div>
          <div className="what-we-do__info-wrapper">
            <h3 className="what-we-do__info-subtitle">После каждой читки мы приглашаем авторов и аудиторию к обсуждению пьесы.</h3>
            <p className="what-we-do__info-text">Мы не спорим о вкусах. Мы судим произведения по законам, предлагаемым произведениями. Мы исходим из того, что за каждой пьесой стоит личный авторский замысел. Мы уважаем авторский выбор художественных целей и творческих методов. Мы ценим готовность автора обсуждать свою работу и доверяем ему в его дальнейшей работе.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WhatWeDo;
