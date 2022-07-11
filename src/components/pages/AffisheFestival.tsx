import { FC, useEffect } from "react";
import asteriskIcon from "../../assets/icons/asterisk.svg";
import LinkWithArrow from "../elements/LinkWithArrow";
import Title from "../elements/Title";
import afficheImage from '../../assets/images/affiche-card-image.jpg'
import ScrollToTop from "../elements/ScrollToTop";
const AfficheFestival: FC = () => {
  return (
    <>
    <ScrollToTop></ScrollToTop>
      <section className="affiche-festival">
      
        <div className="affiche-festival__left">
          <img src={asteriskIcon}></img>
          <p className="affiche-festival__info">
            После каждой читки будет проходить обсуждение с участием аудитории,
            автора и театральных профессионалов.
          </p>
        </div>
        <div className="affiche-festival__right">
          <Title>Афиша фестиваля</Title>
          <p className="title__subtitle">
            На все читки и мастер-классы фестиваля вход свободный по
            предварительной регистрации. <br></br>
            <br></br>
            Регистрация на каждое мероприятие открывается в 12:00 предыдущего
            дня.
          </p>
        </div>
      </section>
      <section className="timetable">
        <div className="timetable__head">
          <div className="timetable__wrapper">
            <p className="timetable__date">14</p>
            <p className="timetable__month">декабря</p>
          </div>
          <div className="timetable__register">
            <p className="timetable__register-text timetable__register-text_type_open">
              открыта регистрация
            </p>
          </div>
        </div>
        <div className="timetable__container">
          <img className="timetable__img" src={afficheImage} alt="Камино норте"></img>
          <div className="timetable__content">
            <p className="timetable__time">13:00</p>
            <h2 className="timetable__title">Камино норте</h2>
            <p className="timetable__text">Площадка «8/3»</p>
            <p className="timetable__text">
              (Не)деликатная пьеса о психоневрологическом интернате
            </p>
            <p className="timetable__text">
              Драматург: Ольга Казакова Режиссёр: Катя Ганюшина
            </p>
            <LinkWithArrow text="Регистрация" link="#"></LinkWithArrow>
          </div>
          <div className="timetable__image"></div>
          <div className="timetable__content">
            <p className="timetable__time">14:00</p>
            <h2 className="timetable__title">
              Что я узнал о творчестве благодаря драматургам
            </h2>
            <p className="timetable__text">Площадка «8/3»</p>
            <p className="timetable__text">
              Гости расскажут о своём творческом и организационном опыте и
              вдохновят аудиторию преодолевать любые границы.
            </p>
            <p className="timetable__text">Антон Чехов</p>
            <LinkWithArrow text="Регистрация" link="#"></LinkWithArrow>
          </div>
          <div className="timetable__image"></div>
          <div className="timetable__content">
            <p className="timetable__time">17:00</p>
            <h2 className="timetable__title">Ответ на пощечину</h2>
            <p className="timetable__text">Площадка «8/3»</p>
            <p className="timetable__text">
              (Не)деликатная пьеса о психоневрологическом интернате
            </p>
            <p className="timetable__text">
              Драматург: Ольга Казакова Режиссёр: Катя Ганюшина
            </p>
            <LinkWithArrow text="Регистрация" link="#"></LinkWithArrow>
          </div>
          <div className="timetable__image"></div>
          <div className="timetable__content">
            <p className="timetable__time">19:00</p>
            <h2 className="timetable__title">МАМА</h2>
            <p className="timetable__text">Площадка «8/3»</p>
            <p className="timetable__text">
              (Не)деликатная пьеса о психоневрологическом интернате
            </p>
            <p className="timetable__text">
              Драматург: Ольга Казакова Режиссёр: Катя Ганюшина
            </p>
            <LinkWithArrow text="Регистрация" link="#"></LinkWithArrow>
          </div>
        </div>
      </section>
    </>
  );
};

export default AfficheFestival;
