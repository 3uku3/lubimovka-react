import { FC } from 'react';
import historyImg from '../../assets/images/history.png';
import arrowRight from '../../assets/icons/arrow-right.svg';

interface HistoryItemProps {
  data: {
    title: String,
    subtitle: String,
    competition: String,
    selection: String,
    selectors: String,
    volunteers: String,
    event: String,
    sity: String,
  };
}

const HistoryItem: FC<HistoryItemProps> = ({data}) => {
  return (
    <div className='history__item'>
      <img className='history__img' src={historyImg} alt='История' />
      <div className='history__container'>
        <h2 className='history__title'>{data.title}</h2>
        <p className='history__subtitle'>{data.subtitle}</p>
        <div className='history__wrapper'>
          <article className='history__article'>
            <h2 className='history__title'>{data.competition}</h2>
            <p className='history__text'>пьес прислали на конкурс</p>
          </article>
          <article className='history__article'>
            <h2 className='history__title'>{data.selection}</h2>
            <p className='history__text'>пьес прошли отбор</p>
          </article>
          <article className='history__article'>
            <h2 className='history__title'>{data.selectors}</h2>
            <p className='history__text'>отборщиков читали пьесы</p>
          </article>
          <article className='history__article'>
            <h2 className='history__title'>{data.volunteers}</h2>
            <p className='history__text'>волонтёров работали на фестивале</p>
          </article>
          <article className='history__article'>
            <h2 className='history__title'>{data.event}</h2>
            <p className='history__text'>
              собятий прошло в образовательной программе
            </p>
          </article>
          <article className='history__article'>
            <h2 className='history__title'>{data.sity}</h2>
            <p className='history__text'>
              число городов, откуда приехали авторы
            </p>
          </article>
        </div>
        <div className='history__more'>
          <div className='history__container'>
            <h2 className='history__title'>Пьесы</h2>
            <a href='#' className='history__link'>
              Шорт-лист <img className='history__arrow' src={arrowRight} alt='Стрелка вправо' />
            </a>
            <a href='#' className='history__link'>
              Fringe-программа <img className='history__arrow' src={arrowRight} alt='Стрелка вправо' />
            </a>
            <a href='#' className='history__link'>
              Особо отмеченные <img className='history__arrow' src={arrowRight} alt='Стрелка вправо' />
            </a>
            <a href='#' className='history__link'>
              Внеконкурсная программа{' '}
              <img className='history__arrow' src={arrowRight} alt='Стрелка вправо' />
            </a>
          </div>
          <div className='history__container'>
            <h2 className='history__title'>Дополнительно</h2>
            <a href='#' className='history__link'>
              Записи в блоге <img className='history__arrow' src={arrowRight} alt='Стрелка вправо' />
            </a>
            <a href='#' className='history__link'>
              Видео с фестиваля <img className='history__arrow' src={arrowRight} alt='Стрелка вправо' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistoryItem;
