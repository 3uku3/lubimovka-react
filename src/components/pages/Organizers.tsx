import { FC } from "react";
import iconLeft from "../../assets/icons/elipse-left.svg";
import iconRight from "../../assets/icons/elipse-right.svg";
import tereza from "../../assets/images/tereza.jpg";
import cheslav from "../../assets/images/cheslav.jpg";
import sabina from "../../assets/images/sabina.jpg";
import amaliya from "../../assets/images/amaliya.jpg";
import asteriskIcon from "../../assets/icons/asterisk.svg";
import Nav from "../elements/Nav";
import ScrollToTop from '../elements/ScrollToTop';
const Organizers: FC = () => {
  return (
    <main className="main-organizers">
      <ScrollToTop></ScrollToTop>
      <section className="organizers">
      <Nav
          className="organizers__nav"
          data={[
            {
              path: "/about/what-we-do",
              text: "Что мы делаем",
            },
            {
              path: "/about/team",
              text: "Организаторы",
            },
            {
              path: "/about/sponsors",
              text: "Попечители",
            },
            {
              path: "/about/ideology",
              text: "Идеология",
            },
          ]}
        ></Nav>
        <h2 className="organizers__title">Арт-дирекция фестиваля</h2>
        <div className="organizers__list">
          <article className="organizers__item">
            <img src={tereza} alt="Тереза" />
            <p className="organizers__name">Тереза Шимчак</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="organizers__item">
            <img src={cheslav} alt="Чеслав" />
            <p className="organizers__name">Чеслав Качмарек</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="organizers__item organizers__item_type_right-space">
            <img src={sabina} alt="Сабина" />
            <p className="organizers__name">Сабина Соха</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="organizers__item organizers__item_type_left-space2">
            <img src={amaliya} alt="Амалия" />
            <p className="organizers__name">Амалия Лукасик</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="organizers__item">
            <img src={tereza} alt="Тереза" />
            <p className="organizers__name">Тереза Шимчак</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
        </div>
      </section>
      <section className="organizers__team">
        <h2 className="organizers__title">Команда фестиваля</h2>
        <div className="organizers__team-list grid6">
          <article className="organizers__item grid6__item">
            <img src={tereza} alt="Тереза" />
            <p className="grid6__name">Тереза Шимчак</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item">
            <img src={cheslav} alt="Чеслав" />
            <p className="grid6__name">Чеслав Качмарек</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item grid6__item_type_right-space">
            <img src={sabina} alt="Сабина" />
            <p className="grid6__name">Сабина Соха</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item grid6__item_type_right-space">
            <img src={amaliya} alt="Амалия" />
            <p className="grid6__name">Амалия Лукасик</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item grid6__item_type_left-space">
            <img src={tereza} alt="Тереза" />
            <p className="grid6__name">Тереза Шимчак</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item ">
            <img src={cheslav} alt="Чеслав" />
            <p className="grid6__name">Чеслав Качмарек</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item">
            <img src={sabina} alt="Сабина" />
            <p className="grid6__name">Сабина Соха</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item">
            <img src={amaliya} alt="Амалия" />
            <p className="grid6__name">Амалия Лукасик</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item">
            <img src={tereza} alt="Тереза" />
            <p className="grid6__name">Тереза Шимчак</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item">
            <img src={cheslav} alt="Чеслав" />
            <p className="grid6__name">Чеслав Качмарек</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item grid6__item_type_right-space">
            <img src={sabina} alt="Сабина" />
            <p className="grid6__name">Сабина Соха</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="grid6__item">
            <img src={amaliya} alt="Амалия" />
            <p className="grid6__name">Амалия Лукасик</p>
            <p className="grid6__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
        </div>
      </section>
      <section className="volunteers">
        <h2 className="volunteers__title"></h2>
        <div className="volunteers__years years">
          <div className="years__item">
            <img className="years__left" src={iconLeft}></img>
            <p className={"years__link"}>2020</p>
            <img className="years__right" src={iconRight}></img>
          </div>
          <div className="years__item">
            <img className="years__left" src={iconLeft}></img>
            <p className={"years__link"}>2019</p>
            <img className="years__right" src={iconRight}></img>
          </div>
          <div className="years__item">
            <img className="years__left" src={iconLeft}></img>
            <p className={"years__link"}>2018</p>
            <img className="years__right" src={iconRight}></img>
          </div>
          <div className="years__item">
            <img className="years__left" src={iconLeft}></img>
            <p className={"years__link"}>2017</p>
            <img className="years__right" src={iconRight}></img>
          </div>
          <div className="years__item">
            <img className="years__left" src={iconLeft}></img>
            <p className={"years__link"}>2016</p>
            <img className="years__right" src={iconRight}></img>
          </div>
          <div className="years__item">
            <img className="years__left" src={iconLeft}></img>
            <p className={"years__link"}>2015</p>
            <img className="years__right" src={iconRight}></img>
          </div>
          <div className="years__item">
            <img className="years__left" src={iconLeft}></img>
            <p className={"years__link"}>2014</p>
            <img className="years__right" src={iconRight}></img>
          </div>
          <div className="years__item">
            <img className="years__left" src={iconLeft}></img>
            <p className={"years__link"}>2013</p>
            <img className="years__right" src={iconRight}></img>
          </div>
        </div>
        <div className="volunteers__list">
          <article className="volunteers__item">
            <img src={tereza} alt="Тереза" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Тереза Шимчак</p>
          </article>
          <article className="volunteers__item">
            <img src={cheslav} alt="Чеслав" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Чеслав Качмарек</p>
          </article>
          <article className="volunteers__item">
            <img src={sabina} alt="Сабина" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Сабина Соха</p>
          </article>
          <article className="volunteers__item">
            <img src={tereza} alt="Тереза" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Тереза Шимчак</p>
          </article>
          <article className="volunteers__item">
            <img src={cheslav} alt="Чеслав" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Чеслав Качмарек</p>
          </article>
          <article className="volunteers__item">
            <img src={sabina} alt="Сабина" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Сабина Соха</p>
          </article>
          <article className="volunteers__item">
            <img src={tereza} alt="Тереза" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Тереза Шимчак</p>
          </article>
          <article className="volunteers__item">
            <img src={cheslav} alt="Чеслав" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Чеслав Качмарек</p>
          </article>
          <article className="volunteers__item">
            <img src={sabina} alt="Сабина" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Сабина Соха</p>
          </article>
          <article className="volunteers__item">
            <img src={tereza} alt="Тереза" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Тереза Шимчак</p>
          </article>
          <article className="volunteers__item">
            <img src={cheslav} alt="Чеслав" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Чеслав Качмарек</p>
          </article>
          <article className="volunteers__item">
            <img src={sabina} alt="Сабина" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Сабина Соха</p>
          </article>
          <article className="volunteers__item">
            <img src={tereza} alt="Тереза" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Тереза Шимчак</p>
          </article>
          <article className="volunteers__item">
            <img src={cheslav} alt="Чеслав" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Чеслав Качмарек</p>
          </article>
          <article className="volunteers__item">
            <img src={sabina} alt="Сабина" />
            <button className="volunteers__more"></button>
            <p className="volunteers__name">Сабина Соха</p>
          </article>
        </div>
        <div className="volunteers__info">
          <img src={asteriskIcon} alt="Звездочка" />
          <p className="volunteers__info-text">
            Если вы хотите быть волонтером, напишите нам на{" "}
            <a className="volunteers__info-link" href="#">
              job@lubimovka.ru
            </a>
            и расскажите о себе.
          </p>
        </div>
      </section>
    </main>
  );
};
export default Organizers;
