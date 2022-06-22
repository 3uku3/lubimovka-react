import { FC } from "react";

const Card: FC = () => {
  return (
    <article className="card">
      <div className="card__container">
        <p className="card__title">С_училища</p>
        <div className="card__button-container">
          <a className="card__link" href="#">
            Смотреть читку
            <div className="card__link-arrow"></div>
          </a>
          <button className="card__button">
            Скачать пьесу
            <div className="card__button-arrow"></div>
          </button>
        </div>
      </div>
      <p className="card__author">Андрей Иванов</p>
      <p className="card__location">Санкт-Петербург 2020</p>
    </article>
  );
};
export default Card;