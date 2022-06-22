import { FC, useEffect, useRef, useState } from "react";
import LinkWithArrow from "../elements/LinkWithArrow";

const CardNews: FC = () => {
  const [posY, setPosY] = useState<number>(0);
  const handleScroll = () => {
    setPosY( window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    })
  },[])
  // style={{top: `${posY}px`}}
  return (
    <section   className="card-news">
      <div className="card-news__container">
      <article className="card-news__card">
        <h2 className="card-news__title">Новости</h2>
        <LinkWithArrow link="#" text="все записи"></LinkWithArrow>
      </article>
      <article className="card-news__card">
        <h2 className="card-news__title">Дизайн Любимовки-2021</h2>
        <p className="card-news__text">Присылайте ваши варианты текстовых описаний.</p>
        <p className="card-news__date">05 октября 2020</p>
      </article>
      <article className="card-news__card">
        <h2 className="card-news__title">Mosbrew Brewhouse сделал свой выбор</h2>
        <p className="card-news__text">Грант на постановку получит пьеса «Утечка» Юлии Савиковской.</p>
        <p className="card-news__date">05 октября 2020</p>
      </article>
      <article className="card-news__card">
        <h2 className="card-news__title">Mosbrew Brewhouse сделал свой выбор</h2>
        <p className="card-news__text">Грант на постановку получит пьеса «Утечка» Юлии Савиковской.</p>
        <p className="card-news__date">05 октября 2020</p>
      </article>
      </div>
    </section>
  );
};
export default CardNews;
