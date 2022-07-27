import React, { FC, useRef, useState } from 'react';
import contactsImage from '../../assets/images/contacts.jpg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import closeIcon from '../../assets/icons/close.svg';
const Contacts: FC = () => {
  const [file, setFile] = useState<FileList>();
  const telRef = useRef(null);
  const handleTelChange = (e: React.ChangeEvent) => {
    console.log(e.target);
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleFileChange = (e: any) => {
    setFile(e.target.files);
  };
  const handleRemoveFileClick = () => {
    setFile(undefined);
  };
  return (
    <main className='main-contacts'>
      <section className='contacts'>
        <img className='contacts__img' src={contactsImage} alt='Контакты' />
        <div className='contacts__wrapper'>
          <h1 className='contacts__title'>Подать пьесу</h1>
          <form onSubmit={handleSubmit} className='contacts__form'>
            <h2 className='contacts__subtitle'>О вас</h2>
            <fieldset className='contacts__fieldset'>
              <input
                className='contacts__input'
                type='text'
                placeholder='Имя'
              />
              <input
                className='contacts__input'
                type='text'
                placeholder='Фамилия'
              />
              <input
                className='contacts__input'
                type='text'
                placeholder='Год рождения'
              />
              <input
                className='contacts__input'
                type='text'
                placeholder='Город проживания'
              />
              <input
                ref={telRef}
                onChange={handleTelChange}
                className='contacts__input'
                type='text'
                placeholder='Номер телефона'
              />
              <input
                className='contacts__input'
                type='email'
                placeholder='E-mail'
              />
            </fieldset>
            <h2 className='contacts__subtitle'>О пьесе</h2>
            <fieldset className='contacts__fieldset'>
              <input
                className='contacts__input'
                type='text'
                placeholder='Название'
              />
              <input
                className='contacts__input'
                type='text'
                placeholder='Год написания'
              />
              <p
                className={
                  file === undefined
                    ? 'contacts__filename'
                    : 'contacts__filename contacts__filename_active'
                }
              >
                <button
                  onClick={handleRemoveFileClick}
                  className='contacts__remove'
                >
                  <img src={closeIcon} alt='Удалить' />
                </button>
                {file === undefined ? '' : file[0].name}
              </p>
              <label className='contacts__input-label' htmlFor='input-file'>
                {' '}
                + ДОБАВИТЬ ФАЙЛ
              </label>
              <input
                onChange={handleFileChange}
                id='input-file'
                className='contacts__input-file'
                accept='.doc,.docx,.txt,.odt,.pdf'
                type='file'
                placeholder='ДОБАВИТЬ ФАЙЛ'
              />
              <p className='contacts__file-info'>
                Только файлы формата .doc, .docx, .txt, .odt, .pdf.
              </p>
              <p className='contacts__file-info'>
                Название файла должно содержать сначала фамилию автора, а затем
                название пьесы, например Chehov-Chaika.doc Название файла с
                пьесой не должно содержать кириллические символы и пробелы. В
                названии файла должны быть только латинские символы и знаки - и
                _.
              </p>
              <button className='contacts__button' type='submit'>
                ОТПРАВИТЬ{' '}
                <img
                  src={arrowRight}
                  className='contats__arrow'
                  alt='Стрелочка'
                ></img>
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
