import { FC } from "react";
import { NavLink } from "react-router-dom";
import iconLeft from "../../assets/icons/elipse-left.svg";
import iconRight from "../../assets/icons/elipse-right.svg";
import Title from "../elements/Title";
import imageHead from "../../assets/images/blog-prewiev-img.jpg";
import image1 from "../../assets/images/what-we-do.jpg";
import image2 from "../../assets/images/what-we-do1.jpg";
import asteriskIcon from "../../assets/icons/asterisk.svg";
import Partners from "../sections/Partners";
import mosbrewImg from "../../assets/images/mosbrew.png";
import prohorovImg from "../../assets/images/prohorov.png";
import sbtgImg from "../../assets/images/sbtg.png";
import pogovoritImg from "../../assets/images/pogovorit.png";
import meduzaImg from "../../assets/images/meduza.png";
import coltaImg from "../../assets/images/colta.png";
import affichaImg from "../../assets/images/afficha.png";
import teatrImg from "../../assets/images/teatr.png";
import mayakImg from "../../assets/images/mayak.png";
import radiokulturaImg from "../../assets/images/radio-kultura.png";
import storytelImg from "../../assets/images/storytel.png";
import vanderlustImg from "../../assets/images/vanderlust.png";
import teatronImg from "../../assets/images/teatron.png";
import sovremennyiImg from "../../assets/images/sovremennyi.png";

import ScrollToTop from "../elements/ScrollToTop";
const WhatWeDo: FC = () => {
  return (
    <main className="main-what-we-do">
      <ScrollToTop></ScrollToTop>
      <div className="what-we-do">
        <section className="what-we-do__head">
          <nav className="what-we-do__nav">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header__nav-item header__nav-item_active"
                  : "header__nav-item"
              }
              to="/about/what-we-do"
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
              to="/about/team"
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
              to="/about/what-we-do"
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
              to="/about/what-we-do"
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
              <h3 className="what-we-do__info-subtitle">
                Каждый год мы проводим приём и отбор новых пьес начинающих и
                признанных русскоязычных авторов.{" "}
              </h3>
              <p className="what-we-do__info-text">
                Мы отдаём предпочтение пьесам, которые передают уникальное и
                свежее авторское видение, затрагивают актуальные темы, написаны
                современным языком и оригинальны по форме, а также произведениям
                с живыми персонажами, увлекательным сюжетом и запоминающимися
                образами.
              </p>
            </div>
            <img src={image1} alt="Что мы делаем" />
          </div>
          <div className="what-we-do__info-container">
            <img src={image2} alt="Что мы делаем" />
            <div className="what-we-do__info-right">
              <h3 className="what-we-do__info-subtitle">
                Пьесы, прошедшие отбор, мы представляем профессионалам театра и
                всем желающим в форме режиссёрских читок.
              </h3>
              <p className="what-we-do__info-text">
                Вход на все мероприятия фестиваля Любимовка всегда был и всегда
                будет свободным.
              </p>
            </div>
          </div>
          <div className="what-we-do__info-wrapper">
            <h3 className="what-we-do__info-subtitle">
              После каждой читки мы приглашаем авторов и аудиторию к обсуждению
              пьесы.
            </h3>
            <p className="what-we-do__info-text">
              Мы не спорим о вкусах. Мы судим произведения по законам,
              предлагаемым произведениями. Мы исходим из того, что за каждой
              пьесой стоит личный авторский замысел. Мы уважаем авторский выбор
              художественных целей и творческих методов. Мы ценим готовность
              автора обсуждать свою работу и доверяем ему в его дальнейшей
              работе.
            </p>
          </div>
        </section>
        <section className="new-authors">
          <h2 className="new-authors__title">
            В качестве начинающих авторов в своё время здесь представляли свои
            пьесы{" "}
          </h2>
          <div className="new-authors__container">
            <ul className="new-authors__list">
              <li className="new-authors__item">Михаил Угаров</li>
              <li className="new-authors__item">Алексей Слаповский</li>
              <li className="new-authors__item">Ольга Михайлова</li>
              <li className="new-authors__item">Елена Гремина</li>
            </ul>
            <ul className="new-authors__list">
              <li className="new-authors__item">Иван Вырыпаев</li>
              <li className="new-authors__item">Олег Богаев</li>
              <li className="new-authors__item">Василий Сигарев</li>
              <li className="new-authors__item">Ксения Драгунская</li>
            </ul>
            <ul className="new-authors__list">
              <li className="new-authors__item">Ольга Мухина</li>
              <li className="new-authors__item">Ксения Драгунская</li>
              <li className="new-authors__item">Елена Исаева</li>
              <li className="new-authors__item">Максим Курочкин</li>
            </ul>
            <ul className="new-authors__list">
              <li className="new-authors__item">братья Пресняковы</li>
              <li className="new-authors__item">братья Дурненковы</li>
              <li className="new-authors__item">Юрий Клавдиев</li>
              <li className="new-authors__item">Евгений Гришковец</li>
            </ul>
          </div>
        </section>
        <section className="selection">
          <h2 className="selection__title">Как происходит отбор</h2>
          <ol className="selection__list">
            <li>
              <span className="selection__num">1</span>
              <div className="selection__wrapper">
                <h3 className="selection__subtitle">
                  На первом этапе каждую пьесу, читают как минимум два отборщика
                </h3>
                <div className="selection__container">
                  <p className="selection__text">
                    Каждый отборщик ставит пьесе оценку: <br></br>
                    <span className="selection__grade">
                      «да», «нет» или «затрудняюсь с оценкой».
                    </span>
                  </p>
                  <p className="selection__text">
                    Если пьеса получает две оценки «да», то она попадает в
                    лонг-лист.
                  </p>
                  <p className="selection__text">
                    В ином случае она отправляется следующим ридерам, пока в
                    наборе оценок пьесы не появится два «да» или два «нет».
                  </p>
                </div>
              </div>
            </li>
            <li>
              <span className="selection__num">2</span>
              <div className="selection__wrapper">
                <h3 className="selection__subtitle">
                  Лонг-лист пьес читают все отборщики
                </h3>
                <div className="selection__container">
                  <p className="selection__text">
                    Каждый отборщик ставит каждой пьесе из лонг-листа оценку:
                    <br></br>
                    <span className="selection__grade">
                      «да», «нет» или «затрудняюсь с оценкой».
                    </span>
                  </p>
                  <p className="selection__text">
                    По совокупности этих оценок формируется шорт-лист фестиваля.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <span className="selection__num">3</span>
              <div className="selection__wrapper">
                <h3 className="selection__subtitle">
                  Параллельно с отбором кураторы программы Fringe читают все
                  пьесы
                </h3>
                <div className="selection__container">
                  <p className="selection__text">
                    Коллегиально формируют специальную программу, для
                    представления которой отводится отдельный день на фестивале.
                  </p>
                </div>
              </div>
            </li>
          </ol>
          <div className="selection__more">
            <div className="selection__left-container">
              <h2 className="selection__num">&</h2>
              <h3 className="selection__subtitle">
                Помимо открытого конкурса, на который свою пьесу может прислать
                любой желающий
              </h3>
            </div>
            <p className="selection__text">
              Организаторы фестиваля каждый год собирают пул новых произведений
              от состоявшихся драматургов и передают его куратору внеконкурсной
              программы. Руководствуясь собственным вкусом, профессиональным
              опытом и представлениями о тенденциях в современном театре и
              драматургии, куратор выбирает 6 пьес из этого пула, которые также
              представляются в рамках фестиваля.
            </p>
          </div>
        </section>
        <section className="directors-competition">
          <h2 className="directors-competition__title">
            Конкурса для режиссеров читок на фестивале нет
          </h2>
          <div className="directors-competition__container">
            <img src={asteriskIcon} alt="Звездочка" />
            <p className="directors-competition__text">
              Команда Любимовки самостоятельно привлекает режиссеров для работы.
              Если вам хочется стать режиссером одной из читок,
              <a className="directors-competition__link"> напишите нам </a>про
              себя.
            </p>
          </div>
        </section>
        <Partners title="Партнёры фестиваля">
          <div className="partners__item-container">
            <img src={prohorovImg} alt="Фонд Михаила Прохорова"></img>
            <p className="partners__caption">Генеральный партнёр</p>
          </div>
          <div className="partners__item-container">
            <img src={mosbrewImg} alt="Mosbrew"></img>
          </div>
          <div className="partners__item-container">
            <img src={sbtgImg} alt="SBTG"></img>
            <p className="partners__caption">Онлайн-трансляции</p>
          </div>
          <div className="partners__item-container">
            <img src={pogovoritImg} alt="А поговорить"></img>
          </div>
          <div className="partners__item-container">
            <img src={meduzaImg} alt="Meduza"></img>
          </div>
          <div className="partners__item-container">
            <img src={coltaImg} alt="Colta"></img>
          </div>
          <div className="partners__item-container">
            <img src={affichaImg} alt="Афиша"></img>
          </div>
          <div className="partners__item-container">
            <img src={teatrImg} alt="Театр"></img>
          </div>
        </Partners>
        <Partners title="Информационные партнёры">
          <div className="partners__item-container">
            <img src={mayakImg} alt="Маяк"></img>
          </div>
          <div className="partners__item-container">
            <img src={radiokulturaImg} alt="РАДИОКУЛЬТУРА"></img>
          </div>
          <div className="partners__item-container">
            <img src={storytelImg} alt="storytel"></img>
          </div>
          <div className="partners__item-container">
            <img src={vanderlustImg} alt="The VANDER Lust"></img>
          </div>
          <div className="partners__item-container">
            <img src={teatronImg} alt="Театрон"></img>
          </div>
          <div className="partners__item-container">
            <img src={sovremennyiImg} alt="Современный театр"></img>
          </div>
        </Partners>
      </div>
    </main>
  );
};

export default WhatWeDo;
