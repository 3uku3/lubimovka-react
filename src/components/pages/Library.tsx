import { FC, useEffect } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import iconLeft from '../../assets/icons/elipse-left.svg';
import iconRight from '../../assets/icons/elipse-right.svg';
import iconDown from '../../assets/icons/arrow-down.svg';
import Title from '../elements/Title';
import ScrollToTop from '../elements/ScrollToTop';
import Card from '../elements/Card';
import Nav from '../elements/Nav';
import Plays from './Plays';
import Authors from './Authors';
const Library: FC = () => {
  return (
    <main className='main-library' style={{ marginTop: '60px' }}>
      <ScrollToTop></ScrollToTop>
      <section className='filters'>
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
        <Routes>
          <Route
            path='/plays'
            element={
              <div className='filters__container'>
                <div className='filters__years'>
                  <p className='filters__text'>Годы фестиваля</p>
                  <button className='filters__years-btn button-arrow'>
                    Выбрать<img src={iconDown}></img>
                  </button>
                </div>
                <div className='filters__programm'>
                  <p className='filters__text'>Программа</p>
                  <input
                    className='filters__checkbox'
                    type='checkbox'
                    id='chort'
                  />
                  <label className='filters__label' htmlFor='chort'>
                    шорт-лист
                  </label>
                  <input
                    className='filters__checkbox'
                    type='checkbox'
                    id='out-competition'
                  />
                  <label className='filters__label' htmlFor='out-competition'>
                    внеконкурсная программа
                  </label>
                  <input
                    className='filters__checkbox'
                    type='checkbox'
                    id='fringe'
                  />
                  <label className='filters__label' htmlFor='fringe'>
                    fringe-программа
                  </label>
                  <input
                    className='filters__checkbox'
                    type='checkbox'
                    id='long-list'
                  />
                  <label className='filters__label' htmlFor='long-list'>
                    лонг-лист акции 7х7
                  </label>
                  <input
                    className='filters__checkbox'
                    type='checkbox'
                    id='lark'
                  />
                  <label className='filters__label' htmlFor='lark'>
                    Lark + Любимовка
                  </label>
                </div>
              </div>
            }
          ></Route>
        </Routes>
      </section>
      <Routes>
        <Route path='' element={<Navigate to='plays'></Navigate>}></Route>
        <Route path='/plays' element={<Plays></Plays>}></Route>
        <Route path='/authors' element={<Authors></Authors>}></Route>
      </Routes>
    </main>
  );
};
export default Library;
