import { FC } from "react";
import { NavLink } from "react-router-dom";
import iconLeft from "../../assets/icons/elipse-left.svg";
import iconRight from "../../assets/icons/elipse-right.svg";
interface dateType {
  path: string;
  text: string;
}
interface NavProps {
  data: Array<dateType>;
  className?: string
}

const Nav: FC<NavProps> = ({ data, className }) => {
  return (
    <nav className={`nav ${className}`}>
      {data.map((item) => {
        return (
          <NavLink
            className={
              ({ isActive }) => `nav__item ${isActive && "nav__item_active"}`
            }
            to={item.path}
          >
            <img className="nav__left" src={iconLeft}></img>
            <p className={"nav__text"}>
              {item.text}
            </p>
            <img className="nav__right" src={iconRight}></img>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Nav;
