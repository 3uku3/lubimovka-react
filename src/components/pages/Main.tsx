import { FC } from "react";
import Affiche from "../sections/Affiche";
import BannerArchive from "../sections/BannerArchive";
import BlogPrewiev from "../sections/BlogPrewiev";
import CardNews from "../sections/CardNews";
import Partners from "../sections/Partners";
import ShortList from "../sections/ShortList";

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
const Main: FC = () => {
  return (
    <main className="main">
      <div className="main__left">
        <Affiche></Affiche>
        <BlogPrewiev></BlogPrewiev>
        <ShortList></ShortList>
        <BannerArchive></BannerArchive>
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
      <div className="main__right">
        <CardNews></CardNews>
      </div>
    </main>
  );
};
export default Main;
