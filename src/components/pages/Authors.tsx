import { FC, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import Nav from '../elements/Nav';
import type { authorInterfase } from '../../data/authors';

const Authors: FC = () => {
  const authors = useAppSelector((state) => state.authorReduser);
  const [authorsFiltered, setAuthorsFiltered] = useState(authors);
  const [input, setInput] = useState('');
  const [activeLetter, setActiveLetter] = useState('');
  const alphabet = [
    'А',
    'Б',
    'В',
    'Г',
    'Д',
    'E',
    'Ж',
    'З',
    'И',
    'К',
    'Л',
    'М',
    'Н',
    'О',
    'П',
    'Р',
    'С',
    'Т',
    'У',
    'Ф',
    'Х',
    'Ц',
    'Ч',
    'Ш',
    'Щ',
    'Э',
    'Ю',
    'Я',
  ];
  const handleChangeInput = (e: any) => {
    setInput(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setActiveLetter('');
    setAuthorsFiltered(
      authors.filter((item) => {
        return (
          item.firstName.toLowerCase().indexOf(input.toLocaleLowerCase()) + 1 ||
          item.lastName.toLowerCase().indexOf(input.toLocaleLowerCase()) + 1
        );
      }),
    );
  };
  const onSubmitAlphabet = (e: any) => {
    if (e.target.textContent.length === 1) {
      const letter = e.target.textContent;
      setActiveLetter(letter);
      setInput('');
      setAuthorsFiltered(
        authors.filter((item) => {
          return item.lastName.toLowerCase()[0] === letter.toLowerCase();
        }),
      );
    }
  };
  return (
    <section className='authors'>
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
      </div>
      <h1 className='authors__title'>Библиотека</h1>
      <form onSubmit={onSubmit} className='authors__surch'>
        <input
          value={input}
          onChange={handleChangeInput}
          className='authors__input'
          placeholder='Введтите автора или название пьесы'
          type='text'
        />
        <button className='link-arrow authors__button'>Искать</button>
      </form>
      <div onClick={onSubmitAlphabet} className='authors__alphabet'>
        {alphabet.map((item, index) => {
          return (<button key={index} className={`authors__letter ${activeLetter === item ?'authors__letter_active': ''}`}>{item}</button>)
        })}
      </div>
      <div className='authors__container'>
        {authorsFiltered.map((item, index) => {
          return (
            <p key={index} className='authors__item'>
              {`${item.lastName} ${item.firstName}`}
            </p>
          );
        })}
      </div>
    </section>
  );
};
export default Authors;
