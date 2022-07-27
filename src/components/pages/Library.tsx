import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../elements/ScrollToTop';
import Plays from './Plays';
import Authors from './Authors';
const Library: FC = () => {
  return (
    <main className='main-library' style={{ marginTop: '60px' }}>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path='' element={<Navigate to='plays'></Navigate>}></Route>
        <Route path='/plays' element={<Plays></Plays>}></Route>
        <Route path='/authors' element={<Authors></Authors>}></Route>
      </Routes>
    </main>
  );
};
export default Library;
