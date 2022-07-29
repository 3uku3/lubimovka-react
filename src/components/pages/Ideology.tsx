import { FC } from 'react';
import Nav from '../elements/Nav';
import imageHead from '../../assets/images/blog-prewiev-img.jpg';
import imageIdeology from '../../assets/images/ideology.jpg';
import ScrollToTop from '../elements/ScrollToTop';
const Ideology: FC = () => {
  return (
    <main className='main-ideology'>
      <ScrollToTop></ScrollToTop>
      <section className='ideology'>
        <Nav
          className='ideology__nav'
          data={[
            {
              path: '/about/what-we-do',
              text: 'Что мы делаем',
            },
            {
              path: '/about/team',
              text: 'Организаторы',
            },
            {
              path: '/about/sponsors',
              text: 'Попечители',
            },
            {
              path: '/about/ideology',
              text: 'Идеология',
            },
          ]}
        ></Nav>
        <div className='ideology__wrapper'>
          <img className='ideology__image' src={imageHead} alt='Идеология' />
          <div className='ideology__container'>
            <div className='ideology__text-container'>
              <p className='ideology__num ideology__num_type_title'>1</p>
              <h2 className='ideology__title'>Мы твердо верим, что</h2>
            </div>
            <div className='ideology__text-container'>
              <p className='ideology__num'>1.1</p>
              <h3 className='ideology__subtitle'>
                Театр может и должен помогать обществу осмыслять меняющуюся
                реальность внутри и вокруг человека
              </h3>
              <p className='ideology__text'>
                Театр сегодня является не только уникальным искусством с
                неисчерпаемыми художественными возможностями, но и важнейшим
                общественным явлением. Сегодня театр может и должен быть
                пространством эмоциональной, интеллектуальной и духовной
                коммуникации между людьми, помогать вырабатывать пути
                преодоления вечных противоречий и новых трудностей и находить
                силы для того, чтобы следовать этими путями.
              </p>
            </div>
            <div className='ideology__text-container'>
              <p className='ideology__num'>1.2</p>
              <h3 className='ideology__subtitle'>
                Драматург является одной из ключевых фигур современного театра
              </h3>
              <p className='ideology__text'>
                Мы знаем, что драматург может и должен создавать пьесы,
                способные вовлечь и зрителя, и участника творческого процесса в
                дискуссию о самых животрепещущих вопросах жизни человека и
                общества. Внимание профессионального сообщества к новой работе и
                живая реакция аудитории важны не только начинающим авторам, но и
                признанным драматургам.
              </p>
              <p className='ideology__text'>
                Мы верим в профессионализм, но знаем, что мастерством владения
                драматургическими приёмами можно овладеть только продолжая
                писать.
              </p>
            </div>
            <div className='ideology__text-container'>
              <p className='ideology__num'>1.3</p>
              <h3 className='ideology__subtitle'>
                Театр должен быть открытым и постоянно обновляться
              </h3>
              <p className='ideology__text'>
                Мы верим, что преемственность и контраст поколений делают театр
                глубже. Мы верим, что вызовы, которые молодой автор бросает
                театру, позволяют театру оставаться живым и востребованным.
              </p>
            </div>
          </div>
        </div>
        <div className='ideology__wrapper ideology__wrapper_type_white'>
          <div className='ideology__container'>
            <div className='ideology__text-container'>
              <p className='ideology__num ideology__num_type_title'>2</p>
              <h2 className='ideology__title'>Мы искренне хотим</h2>
            </div>
            <div className='ideology__text-container'>
              <p className='ideology__num'>2.1</p>
              <h3 className='ideology__subtitle'>
                Открывать театральному миру новых авторов.
              </h3>
              <p className='ideology__text'>
                Чтобы наш фестиваль служил местом встречи начинающих авторов и
                признанных драматургов, зрителей и театральных профессионалов,
                представителей разных поколений и художественных течений.
              </p>
            </div>
            <div className='ideology__text-container'>
              <p className='ideology__num'>2.2</p>
              <h3 className='ideology__subtitle'>
                Дать начинающим авторам возможность найти свой голос и быть
                услышанными
              </h3>
              <p className='ideology__text'>
                Чтобы уже в начале своего творческого пути драматурги получали
                опыт взаимодействия с аудиторией и театральными профессионалами
                и совершенствовали своё мастерство. Вдохновлять молодых авторов
                на написание новых пьес.
              </p>
            </div>
            <div className='ideology__text-container'>
              <p className='ideology__num'>2.3</p>
              <h3 className='ideology__subtitle'>
                Обогатить отечественный театр качественными новыми актуальными
                пьесами
              </h3>
              <p className='ideology__text'>
                Чтобы наш фестиваль был оживленным перекрестком мнений и
                взглядов, в центре которого — новые пьесы, говорящие о
                сегодняшних реалиях и ценностях, которые составляют основу жизни
                современного человека и общества.
              </p>
            </div>
          </div>
          <img
            className='ideology__image'
            src={imageIdeology}
            alt='Идеология'
          />
        </div>
      </section>
    </main>
  );
};

export default Ideology;
