import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import iconLeft from "../../assets/icons/elipse-left.svg";
import iconRight from "../../assets/icons/elipse-right.svg";
import iconDown from "../../assets/icons/arrow-down.svg";
import Title from "../elements/Title";
import ScrollToTop from "../elements/ScrollToTop";
import Card from "../elements/Card";
import Nav from "../elements/Nav";
const Library: FC = () => {
  return (
    <main className="main-library" style={{ marginTop: "60px" }}>
      <ScrollToTop></ScrollToTop>
      <section className="filters">
        <div className="filters__wrapper">
          <Nav className="filters__nav" data={[
            {
              path: "/library/plays",
              text: "Пьесы"
            },
            {
              path: "/library/autors",
              text: "Авторы"
            },
          ]}></Nav>
          {/* <div className="filters__nav-container">
            <img className="filters__nav-left" src={iconLeft}></img>
            <Link className="filters__link" to="/library/plays">
              Пьесы
            </Link>
            <img className="filters__nav-right" src={iconRight}></img>
          </div>
          <div className="filters__nav-container">
            <img className="filters__nav-left" src={iconLeft}></img>
            <Link className="filters__link" to="/library/autors">
              Авторы
            </Link>
            <img className="filters__nav-right" src={iconRight}></img>
          </div> */}
        </div>
        <div className="filters__years">
          <p className="filters__text">Годы фестиваля</p>
          <button className="filters__years-btn button-arrow">
            Выбрать<img src={iconDown}></img>
          </button>
        </div>
        <div className="filters__programm">
          <p className="filters__text">Программа</p>
          <input className="filters__checkbox" type="checkbox" id="chort" />
          <label className="filters__label" htmlFor="chort">
            шорт-лист
          </label>
          <input
            className="filters__checkbox"
            type="checkbox"
            id="out-competition"
          />
          <label className="filters__label" htmlFor="out-competition">
            внеконкурсная программа
          </label>
          <input className="filters__checkbox" type="checkbox" id="fringe" />
          <label className="filters__label" htmlFor="fringe">
            fringe-программа
          </label>
          <input className="filters__checkbox" type="checkbox" id="long-list" />
          <label className="filters__label" htmlFor="long-list">
            лонг-лист акции 7х7
          </label>
          <input className="filters__checkbox" type="checkbox" id="lark" />
          <label className="filters__label" htmlFor="lark">
            Lark + Любимовка
          </label>
        </div>
      </section>
      <section className="library">
        <Title>Библиотека</Title>
        <div className="library__surch">
          <input className="library__input" placeholder="Введтите автора или название пьесы" type="text"></input>
          <button className="link-arrow library__button">Искать</button>
        </div>
        <div className="library__container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
    </main>
  );
};
export default Library;
