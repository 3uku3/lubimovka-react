import { FC, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import Card from '../elements/Card';
import Nav from '../elements/Nav';
import iconDown from '../../assets/icons/arrow-down.svg';
import ScrollToTop from '../elements/ScrollToTop';

const Plays: FC = () => {
  const cards = useAppSelector((state) => state.cardReducer);
  const [cardsFiltered, setCardsFiltered] = useState(
    cards.filter((card, index) => {
      return index < 24;
    }),
  );
  const [input, setInput] = useState('');
  const ref = useRef<HTMLButtonElement>(null);
  const handleChangeInput = (e: any) => {
    setInput(e.target.value);
  };
  const [yearsActive, setYearsActive] = useState(false);
  const [yearActiveValue, setYearActiveValue] = useState('');
  const [short, setShort] = useState(false);
  const [outCompetition, setOutCompetition] = useState(false);
  const [fringe, setFringe] = useState(false);
  const [longList, setLongList] = useState(false);
  const [lark, setLark] = useState(false);
  const handleShortClick = () => {
    setShort(!short);
  };
  const handleFringeClick = () => {
    setFringe(!fringe);
  };
  const handleOutCompetitionClick = () => {
    setOutCompetition(!outCompetition);
  };
  const handleLongListClick = () => {
    setLongList(!longList);
  };
  const handleLarkClick = () => {
    setLark(!lark);
  };
  const handleYearsClick = () => {
    setYearsActive(!yearsActive);
  };
  const handleYearClick = (e: any) => {
    setYearsActive(!yearsActive);
    if (e.target.textContent === 'Все года') {
      setYearActiveValue('');
      return;
    }
    setYearActiveValue(e.target.textContent);
  };
  const filter = () => {
    if (
      input !== '' ||
      yearActiveValue !== '' ||
      short ||
      outCompetition ||
      fringe ||
      longList ||
      lark
    ) {
      setCardsFiltered((cardsFiltered) =>
        cards.filter((card) => {
          let isShort = true;
          let isOutComp = true;
          let isFringe = true;
          let isLongList = true;
          let isLark = true;
          if (short) {
            isShort = card.shortList ? true : false;
          }
          if (outCompetition) {
            isOutComp = card.outOfCompetition ? true : false;
          }
          if (fringe) {
            isFringe = card.fringe ? true : false;
          }
          if (longList) {
            isLongList = card.longList ? true : false;
          }
          if (lark) {
            isLark = card.lark ? true : false;
          }
          return (
            (card.author.toLowerCase().indexOf(input.toLowerCase()) + 1 ||
              card.title.toLowerCase().indexOf(input.toLowerCase()) + 1) &&
            card.year.toLowerCase().indexOf(yearActiveValue.toLowerCase()) +
              1 &&
            isShort &&
            isFringe &&
            isOutComp &&
            isLongList &&
            isLark
          );
        }),
      );
    } else {
      setCardsFiltered((cardsFiltered) =>
        cards.filter((card, index) => {
          return index < 24;
        }),
      );
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    filter();
  };
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.click();
    }
  }, [yearActiveValue, short, outCompetition, fringe, lark, longList]);
  return (
    <section className='library'>
      <ScrollToTop></ScrollToTop>
      <div className='filters'>
        <div className='filters__sticky'>
          <div className='filters__wrapper'>
            <Nav
              className='filters__nav'
              data={[
                {
                  path: '/library/plays',
                  text: 'Пьесы',
                },
                {
                  path: '/library/authors',
                  text: 'Авторы',
                },
              ]}
            ></Nav>
          </div>
          <div className='filters__container'>
            <div className='filters__years'>
              <p className='filters__text'>Годы фестиваля</p>
              <button
                onClick={handleYearsClick}
                className={`filters__years-btn button-arrow ${
                  yearsActive ? 'filters__years-btn_active' : ''
                }`}
              >
                {yearActiveValue === '' ? 'Выбрать' : yearActiveValue}
                <img src={iconDown} alt='Стрелка вниз'></img>
              </button>
              <div
                onClick={handleYearClick}
                className={`filters__years-container ${
                  yearsActive && 'filters__years-container_active'
                }`}
              >
                <button className='filters__radio-btn'>{'Все года'}</button>
                <button className='filters__radio-btn'>2020</button>
                <button className='filters__radio-btn'>2019</button>
                <button className='filters__radio-btn'>2018</button>
                <button className='filters__radio-btn'>2017</button>
                <button className='filters__radio-btn'>2016</button>
                <button className='filters__radio-btn'>2015</button>
                <button className='filters__radio-btn'>2014</button>
                <button className='filters__radio-btn'>2013</button>
              </div>
            </div>
            <div className='filters__programm'>
              <p className='filters__text'>Программа</p>
              <input className='filters__checkbox' type='checkbox' id='chort' />
              <label
                onClick={handleShortClick}
                className='filters__label'
                htmlFor='chort'
              >
                шорт-лист
              </label>
              <input
                className='filters__checkbox'
                type='checkbox'
                id='out-competition'
              />
              <label
                onClick={handleOutCompetitionClick}
                className='filters__label'
                htmlFor='out-competition'
              >
                внеконкурсная программа
              </label>
              <input
                className='filters__checkbox'
                type='checkbox'
                id='fringe'
              />
              <label
                onClick={handleFringeClick}
                className='filters__label'
                htmlFor='fringe'
              >
                fringe-программа
              </label>
              <input
                className='filters__checkbox'
                type='checkbox'
                id='long-list'
              />
              <label
                onClick={handleLongListClick}
                className='filters__label'
                htmlFor='long-list'
              >
                лонг-лист акции 7х7
              </label>
              <input className='filters__checkbox' type='checkbox' id='lark' />
              <label
                onClick={handleLarkClick}
                className='filters__label'
                htmlFor='lark'
              >
                Lark + Любимовка
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='library__play'>
        <h1 className='library__title'>Библиотека</h1>
        <form onSubmit={handleSubmit} className='library__surch'>
          <input
            value={input}
            onChange={handleChangeInput}
            className='library__input'
            placeholder='Введтите автора или название пьесы'
            type='text'
          ></input>

          <button
            ref={ref}
            type='submit'
            className='link-arrow library__button'
          >
            Искать
          </button>
        </form>
        <div className='library__container'>
          {cardsFiltered.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                link={item.link}
                author={item.author}
                location={item.location}
                year={item.year}
              ></Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Plays;
