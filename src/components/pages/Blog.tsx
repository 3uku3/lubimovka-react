import { FC } from "react";
import asteriskIcon from "../../assets/icons/asterisk.svg";
import iconDown from "../../assets/icons/arrow-down.svg";
import Title from "../elements/Title";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import blog5 from "../../assets/images/blog5.jpg";
const Blog: FC = () => {
  return (
    <main className="main-blog">
      <section className="blog">
        <div className="blog__container">
          <div className="blog__left-container">
            <img src={asteriskIcon}></img>
            <p className="blog__info">
              Журналисты, театроведы, критики, искусствоведы и студенты
              профильных вузов ведут журнал фестиваля Любимовка под руководством
              Натальи Дубашинской и Полины Пхор.
            </p>
            <p className="blog__info">
              Если вы хотите стать автором, пишите на{" "}
              <a className="blog__info-link" href="#">
                critics@lubimovka.ru
              </a>
            </p>
          </div>
          <div className="blog__right-container">
            <Title>Блог Любимовки</Title>

            <div className="blog__filters">
              <button className="blog__month button-arrow">
                Месяц <img src={iconDown}></img>
              </button>
              <button className="blog__year button-arrow">
                Год <img src={iconDown}></img>
              </button>
            </div>
          </div>
        </div>
        <div className="blog__cards">
          <div className="blog__wrapper">
            <div className="blog__main">
              <img src={blog1} alt="blog" />
              <p className="blog__author">Анастасия Ермолова</p>
              <h2 className="blog__title">«Всё начинается с тебя»</h2>
              <p className="blog__text">
                Интервью с драматургом Германом Грековым{" "}
              </p>
            </div>
            <div className="blog__left">
              <div className="blog__column">
                <article className="blog__item">
                  <img className="blog__image" src={blog2} alt="blog" />
                  <p className="blog__autor">Лара Бессмертная</p>
                  <h2 className="blog__title">
                    «Человек является источником жеста, смысла, правды»
                  </h2>
                  <p className="blog__text">
                    МК «Документальность в современном театре и современном
                    искусстве»
                  </p>
                </article>
                <article className="blog__item">
                  <img className="blog__image" src={blog3} alt="blog" />
                  <p className="blog__autor">Лара Бессмертная</p>
                  <h2 className="blog__title">
                    «Человек является источником жеста, смысла, правды»
                  </h2>
                  <p className="blog__text">
                    МК «Документальность в современном театре и современном
                    искусстве»
                  </p>
                </article>
              </div>
              <div className="blog__column">
                <article className="blog__item">
                  <img className="blog__image" src={blog4} alt="blog" />
                  <p className="blog__autor">Лара Бессмертная</p>
                  <h2 className="blog__title">
                    «Человек является источником жеста, смысла, правды»
                  </h2>
                  <p className="blog__text">
                    МК «Документальность в современном театре и современном
                    искусстве»
                  </p>
                </article>
                <article className="blog__item">
                  <img className="blog__image" src={blog5} alt="blog" />
                  <p className="blog__autor">Лара Бессмертная</p>
                  <h2 className="blog__title">
                    «Человек является источником жеста, смысла, правды»
                  </h2>
                  <p className="blog__text">
                    МК «Документальность в современном театре и современном
                    искусстве»
                  </p>
                </article>
                <article className="blog__item">
                  <img className="blog__image" src={blog1} alt="blog" />
                  <p className="blog__autor">Лара Бессмертная</p>
                  <h2 className="blog__title">
                    «Человек является источником жеста, смысла, правды»
                  </h2>
                  <p className="blog__text">
                    МК «Документальность в современном театре и современном
                    искусстве»
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="blog__right">
            <div className="blog__column">
              <article className="blog__item">
                <img className="blog__image" src={blog2} alt="blog" />
                <p className="blog__autor">Лара Бессмертная</p>
                <h2 className="blog__title">
                  «Человек является источником жеста, смысла, правды»
                </h2>
                <p className="blog__text">
                  МК «Документальность в современном театре и современном
                  искусстве»
                </p>
              </article>
              <article className="blog__item">
                <img className="blog__image" src={blog3} alt="blog" />
                <p className="blog__autor">Лара Бессмертная</p>
                <h2 className="blog__title">
                  «Человек является источником жеста, смысла, правды»
                </h2>
                <p className="blog__text">
                  МК «Документальность в современном театре и современном
                  искусстве»
                </p>
              </article>
              <article className="blog__item">
                <img className="blog__image" src={blog4} alt="blog" />
                <p className="blog__autor">Лара Бессмертная</p>
                <h2 className="blog__title">
                  «Человек является источником жеста, смысла, правды»
                </h2>
                <p className="blog__text">
                  МК «Документальность в современном театре и современном
                  искусстве»
                </p>
              </article>
            </div>
            <div className="blog__column">
              <article className="blog__item">
                <img className="blog__image" src={blog5} alt="blog" />
                <p className="blog__autor">Лара Бессмертная</p>
                <h2 className="blog__title">
                  «Человек является источником жеста, смысла, правды»
                </h2>
                <p className="blog__text">
                  МК «Документальность в современном театре и современном
                  искусстве»
                </p>
              </article>
              <article className="blog__item">
                <img className="blog__image" src={blog1} alt="blog" />
                <p className="blog__autor">Лара Бессмертная</p>
                <h2 className="blog__title">
                  «Человек является источником жеста, смысла, правды»
                </h2>
                <p className="blog__text">
                  МК «Документальность в современном театре и современном
                  искусстве»
                </p>
              </article>
              <article className="blog__item">
                <img className="blog__image" src={blog2} alt="blog" />
                <p className="blog__autor">Лара Бессмертная</p>
                <h2 className="blog__title">
                  «Человек является источником жеста, смысла, правды»
                </h2>
                <p className="blog__text">
                  МК «Документальность в современном театре и современном
                  искусстве»
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Blog;
