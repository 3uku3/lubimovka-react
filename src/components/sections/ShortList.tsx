import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import Card from '../elements/Card';

const ShortList: FC = () => {
  const cards = useAppSelector((state) => state.cardReducer);
  return (
    <section className='short-list'>
      <h2 className='short-list__title'>Шорт-лист 2020 года</h2>
      <div className='short-list__container'>
        {cards.map((item, index) => {
          if (index > 3) {
            return;
          }
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
    </section>
  );
};
export default ShortList;
