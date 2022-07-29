import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import iconLeft from '../../assets/icons/elipse-left.svg';
import iconRight from '../../assets/icons/elipse-right.svg';
interface dataType {
  path: string;
  text: string;
}
interface NavProps {
  data: Array<dataType>;
  className?: string;
}

const Nav: FC<NavProps> = ({ data, className }) => {
  return (
    <nav className={`nav ${className}`}>
      {data.map((item, index) => {
        return (
          <NavLink
            key={index}
            className={({ isActive }) =>
              `nav__item ${isActive && 'nav__item_active'}`
            }
            to={'/lubimovka-react' + item.path}
          >
            <img className='nav__left' src={iconLeft} alt='скобка'></img>
            <p className={'nav__text'}>{item.text}</p>
            <img className='nav__right' src={iconRight} alt='скобка'></img>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Nav;
