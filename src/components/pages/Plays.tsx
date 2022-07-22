import { FC } from 'react';
import Card from '../elements/Card';

const Plays: FC = () => {
  return(
    <section className='library'>
        <h1 className='library__title'>Библиотека</h1>
        <div className='library__surch'>
          <input
            className='library__input'
            placeholder='Введтите автора или название пьесы'
            type='text'
          ></input>

        <button className='link-arrow library__button'>Искать</button>
        </div>
        <div className='library__container'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
  )
}
export default Plays;