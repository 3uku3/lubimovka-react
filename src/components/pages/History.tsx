import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HistoryItem from '../elements/HistoryItem';
import Nav from '../elements/Nav';
import historyImg from '../../assets/images/history1.jpg';
import imageMore from '../../assets/images/lubimovka-more.jpg';
import ScrollToTop from '../elements/ScrollToTop';
const History: FC = () => {
  return (
    <main className='main-history'>
      <ScrollToTop></ScrollToTop>
      <section className='history'>
        <div className='history__slider'>
          <Nav
            className='history__nav'
            data={[
              {
                text: '2020',
                path: '/history/2020',
              },
              {
                text: '2019',
                path: '/history/2019',
              },
              {
                text: '2018',
                path: '/history/2018',
              },
              {
                text: '2017',
                path: '/history/2017',
              },
              {
                text: '2016',
                path: '/history/2016',
              },
              {
                text: '2015',
                path: '/history/2015',
              },
              {
                text: '2014',
                path: '/history/2014',
              },
              {
                text: '2013',
                path: '/history/2013',
              },
            ]}
          ></Nav>
        </div>
        <Routes>
          <Route
            path=''
            element={<Navigate replace to='2020'></Navigate>}
          ></Route>
          <Route
            path='/2020'
            element={
              <HistoryItem
                data={{
                  title: '5–12 сентября ',
                  subtitle:
                    'В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре Вознесенского.',
                  competition: '756',
                  selection: '145',
                  selectors: '145',
                  volunteers: '145',
                  event: '7',
                  sity: '15',
                }}
              ></HistoryItem>
            }
          ></Route>
          <Route
            path='/2019'
            element={
              <HistoryItem
                data={{
                  title: '5–12 сентября ',
                  subtitle:
                    'В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре Вознесенского.',
                  competition: '756',
                  selection: '140',
                  selectors: '140',
                  volunteers: '140',
                  event: '6',
                  sity: '14',
                }}
              ></HistoryItem>
            }
          ></Route>
          <Route
            path='/2018'
            element={
              <HistoryItem
                data={{
                  title: '5–12 сентября ',
                  subtitle:
                    'В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре Вознесенского.',
                  competition: '710',
                  selection: '140',
                  selectors: '131',
                  volunteers: '140',
                  event: '6',
                  sity: '14',
                }}
              ></HistoryItem>
            }
          ></Route>
          <Route
            path='/2017'
            element={
              <HistoryItem
                data={{
                  title: '5–12 сентября ',
                  subtitle:
                    'В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре Вознесенского.',
                  competition: '502',
                  selection: '140',
                  selectors: '130',
                  volunteers: '130',
                  event: '6',
                  sity: '14',
                }}
              ></HistoryItem>
            }
          ></Route>
          <Route
            path='/2016'
            element={
              <HistoryItem
                data={{
                  title: '5–12 сентября ',
                  subtitle:
                    'В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре Вознесенского.',
                  competition: '756',
                  selection: '140',
                  selectors: '140',
                  volunteers: '140',
                  event: '6',
                  sity: '14',
                }}
              ></HistoryItem>
            }
          ></Route>
          <Route
            path='/2015'
            element={
              <HistoryItem
                data={{
                  title: '5–12 сентября ',
                  subtitle:
                    'В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре Вознесенского.',
                  competition: '756',
                  selection: '140',
                  selectors: '140',
                  volunteers: '140',
                  event: '6',
                  sity: '14',
                }}
              ></HistoryItem>
            }
          ></Route>
          <Route
            path='/2014'
            element={
              <HistoryItem
                data={{
                  title: '5–12 сентября ',
                  subtitle:
                    'В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре Вознесенского.',
                  competition: '756',
                  selection: '140',
                  selectors: '140',
                  volunteers: '140',
                  event: '6',
                  sity: '14',
                }}
              ></HistoryItem>
            }
          ></Route>
          <Route
            path='/2013'
            element={
              <HistoryItem
                data={{
                  title: '5–12 сентября ',
                  subtitle:
                    'В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре Вознесенского.',
                  competition: '756',
                  selection: '140',
                  selectors: '140',
                  volunteers: '140',
                  event: '6',
                  sity: '14',
                }}
              ></HistoryItem>
            }
          ></Route>
        </Routes>
      </section>
      <section className='history-info'>
        <div className='history-info__container'>
          <img
            className='history-info__img-title'
            src={historyImg}
            alt='История'
          />
          <div className='history-info__text-container'>
            <h1 className='history-info__title'>История фестиваля</h1>
            <p className='history-info__text'>
              Фестиваль молодой драматургии «Любимовка» был основан в 1990 году
              известными российскими драматургами и критиками - Михаилом
              Рощиным, Алексеем Казанцевым, Виктором Славкиным, Владимиром
              Гуркиным, Юрием Рыбаковым, Инной Громовой, Маргаритой Светлаковой,
              Марией Медведевой, и другими. Фестиваль был задуман как
              некоммерческий, независимый проект, созданный для знакомства всех
              заинтересованных с новыми пьесами.
            </p>
          </div>
        </div>
        <h2 className='history-info__subtitle'>
          «Любимовка» родилась как лаборатория, позволявшая дебютанту не только
          публично показать свой текст, но и услышать мнения и советы
          профессионалов – на фестивале встречаются и обмениваются опытом авторы
          разных поколений и статусов.
        </h2>
        <p className='history-info__text'>
          Изначально фестиваль проводился в исторической усадьбе Станиславского
          «Любимовка». В 1995 - 2000 годах в оргкомитет вошли драматурги Елена
          Гремина, Ольга Михайлова, Михаил Угаров, Елена Исаева, Ксения
          Драгунская, Максим Курочкин. В 2000 году директором фестиваля стал
          Александр Родионов. С 2001 года фестиваль проходит в Москве. С самого
          своего возникновения фестиваль тесно сотрудничал с журналом
          "Драматург", Центром Драматургии и Режиссуры под руководством А.
          Казанцева и М. Рощина, с проектом "Новая драма" и журналом
          «Современная драматургия».
        </p>
        <div className='history-info__images'>
          <img className='history-info__img' src={imageMore} alt='История' />
          <img className='history-info__img' src={imageMore} alt='История' />
        </div>
        <p className='history-info__text'>
          С 2007 года «Любимовка» на постоянной основе «прописалась» в
          Театре.DOC. Арт-директором и мотором фестиваля стала Елена Ковальская,
          театральный критик и редактор раздела «Театр» журнала «Афиша», а ныне
          – арт-директор Театрального Центра им. Вс. Мейерхольда. Под её
          руководством и при поддержке драматурга и сценариста Александра
          Родионова, театрального критика Кристины Матвиенко, драматурга и
          режиссёра Михаила Угарова фестиваль обрёл новое дыхание и форму,
          которую старается поддерживать и развивать новая команда, взявшая на
          себя организацию «Любимовки» в 2013 году.
        </p>
      </section>
    </main>
  );
};

export default History;
