import { FC } from "react";
import { NavLink } from "react-router-dom";
import iconLeft from "../../assets/icons/elipse-left.svg";
import iconRight from "../../assets/icons/elipse-right.svg";
import asteriskIcon from "../../assets/icons/asterisk.svg";
import Title from "../elements/Title";

import tereza from "../../assets/images/tereza.jpg";
import cheslav from "../../assets/images/cheslav.jpg";
import sabina from "../../assets/images/sabina.jpg";
import amaliya from "../../assets/images/amaliya.jpg";
import Nav from "../elements/Nav";
const Sponsors: FC = () => {
  return (
    <main className="main-sponsors">
      <div className="sponsors">
        <Nav
          className="sponsors__nav"
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
        <div className="sponsors__cont">
          <div className="sponsors__left">
            <img src={asteriskIcon} alt="Звездочка" />
            <p className="sponsors__info">
              Если вы хотите стать попечителем фестиваля, напишите нам на
              <a className="sponsors__link" href="#">
                charity@lubimovka.ru
              </a>
            </p>
          </div>
          <div className="sponsors__right">
            <Title>Попечители фестиваля</Title>
            <p className="sponsors__text">
              Здесь представлены частные лица и организации, которые помогают
              Любимовке, внося существенные пожертвования на развитие фестиваля.
            </p>
          </div>
        </div>
        <div className="organizers__team-list">
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
          <article className="organizers__item organizers__item_type_right-space">
            <img src={amaliya} alt="Амалия" />
            <p className="organizers__name">Амалия Лукасик</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="organizers__item organizers__item_type_left-space">
            <img src={tereza} alt="Тереза" />
            <p className="organizers__name">Тереза Шимчак</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="organizers__item ">
            <img src={cheslav} alt="Чеслав" />
            <p className="organizers__name">Чеслав Качмарек</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="organizers__item">
            <img src={sabina} alt="Сабина" />
            <p className="organizers__name">Сабина Соха</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
          <article className="organizers__item">
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
          <article className="organizers__item">
            <img src={amaliya} alt="Амалия" />
            <p className="organizers__name">Амалия Лукасик</p>
            <p className="organizers__job">
              Драматург, сценарист, преподаватель
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Sponsors;