import { FC } from 'react';

const Authors: FC = () => {
  return (
    <section className='authors'>
      <h1 className='authors__title'>Библиотека</h1>
      <form className='authors__surch'>
        <input className='authors__input' placeholder='Введтите автора или название пьесы' type="text" />
        <button className='link-arrow authors__button'>Искать</button>
      </form>
      <form className='authors__alphabet'>
        <button className='authors__letter'>А</button>
        <button className='authors__letter'>Б</button>
        <button className='authors__letter'>В</button>
        <button className='authors__letter'>Г</button>
        <button className='authors__letter'>Д</button>
        <button className='authors__letter'>Е</button>
        <button className='authors__letter'>Ж</button>
        <button className='authors__letter'>З</button>
        <button className='authors__letter'>И</button>
        <button className='authors__letter'>К</button>
        <button className='authors__letter'>Л</button>
        <button className='authors__letter'>М</button>
        <button className='authors__letter'>Н</button>
        <button className='authors__letter'>О</button>
        <button className='authors__letter'>П</button>
        <button className='authors__letter'>Р</button>
        <button className='authors__letter'>С</button>
        <button className='authors__letter'>Т</button>
        <button className='authors__letter'>У</button>
        <button className='authors__letter'>Ф</button>
        <button className='authors__letter'>Х</button>
        <button className='authors__letter'>Ц</button>
        <button className='authors__letter'>Ч</button>
        <button className='authors__letter'>Ш</button>
        <button className='authors__letter'>Щ</button>
        <button className='authors__letter'>Э</button>
        <button className='authors__letter'>Ю</button>
        <button className='authors__letter'>Я</button>
      </form>
    </section>
  )
}
export default Authors;