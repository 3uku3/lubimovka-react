import { FC } from "react";
import LinkWithArrow from "./LinkWithArrow";
import image from "../../assets/images/blog-prewiev-img.jpg"

const BlogPrewievElement: FC = () => {
  return (
    <div className="blog-prewiev__wrapper">
      <h2 className="blog-prewiev__title">
        Премьера спектакля Ивана Вырыпаева «Солнечная линия»
      </h2>
      <div className="blog-prewiev__container">
        <div className="blog-prewiev__info">
          <p className="blog-prewiev__text">
            Гости расскажут о своём творческом и организационном опыте и
            вдохновят аудиторию преодолевать любые границы.
          </p>
          <LinkWithArrow link="#" text="Читать"></LinkWithArrow>
        </div>
        <img className="blog-prewiev__image" src={image}></img>
      </div>
    </div>
  );
};

export default BlogPrewievElement;
