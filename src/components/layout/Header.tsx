import logo from "../../assets/images/logo.svg";
import iconPlus from "../../assets/icons/plus.svg";
import iconLeft from "../../assets/icons/elipse-left.svg";
import iconRight from "../../assets/icons/elipse-right.svg";
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../elements/Nav";
const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
        <img className="logo" src={logo} alt="logo" />
        </Link>
        <Nav className="header__nav" data={[
          {
            path: "/festival",
            text: "Афиша"
          },
          {
            path: "/library/plays",
            text: "Библиотека"
          },
          {
            path: "/library/plays",
            text: "Проекты"
          },
          {
            path: "/library/plays",
            text: "История"
          },
          {
            path: "/blog",
            text: "Блог"
          },
          {
            path: "/news",
            text: "Новости"
          },
          {
            path: "/about",
            text: "О фестивале"
          },
          {
            path: "/about",
            text: "Контакты"
          },
        ]}></Nav>
        {/* <nav className="header__nav">
          <NavLink className={({isActive}) => isActive ? "header__nav-item header__nav-item_active" : "header__nav-item"} to="/festival" >
            <img className="header__nav-left" src={iconLeft}></img>
            <p className={"header__nav-link"}>
              Афиша
            </p>
            <img className="header__nav-right" src={iconRight}></img>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "header__nav-item header__nav-item_active" : "header__nav-item"} to="/library/plays" >
            <img className="header__nav-left" src={iconLeft}></img>
            <p className="header__nav-link" >
              Библиотека
              </p>
            <img className="header__nav-right" src={iconRight}></img>
          </NavLink>
          <div className="header__nav-item">
            <img className="header__nav-left" src={iconLeft}></img>
            <a className="header__nav-link" href="#">
              Проекты
            </a>
            <img className="header__nav-right" src={iconRight}></img>
          </div>
          <div className="header__nav-item">
            <img className="header__nav-left" src={iconLeft}></img>
            <a className="header__nav-link" href="#">
              История
            </a>
            <img className="header__nav-right" src={iconRight}></img>
          </div>
          <NavLink className={({isActive}) => isActive ? "header__nav-item header__nav-item_active" : "header__nav-item"} to="/blog" >
            <img className="header__nav-left" src={iconLeft}></img>
            <p className="header__nav-link" >
              Блог
              </p>
            <img className="header__nav-right" src={iconRight}></img>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "header__nav-item header__nav-item_active" : "header__nav-item"} to="/news" >
            <img className="header__nav-left" src={iconLeft}></img>
            <p className="header__nav-link" >
              Новости
              </p>
            <img className="header__nav-right" src={iconRight}></img>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "header__nav-item header__nav-item_active" : "header__nav-item"} to="/about" >
            <img className="header__nav-left" src={iconLeft}></img>
            <p className="header__nav-link" >
              О фестивале
              </p>
            <img className="header__nav-right" src={iconRight}></img>
          </NavLink>
          <div className="header__nav-item">
            <img className="header__nav-left" src={iconLeft}></img>
            <a className="header__nav-link" href="#">
              Контакты
            </a>
            <img className="header__nav-right" src={iconRight}></img>
          </div>
        </nav> */}
        <ul className="header__social">
          <li className="header__social-item">
            <a className="header__social-link" href="#">
              Fb
            </a>
          </li>
          <li className="header__social-item">
            <a className="header__social-link" href="#">
              inst
            </a>
          </li>
          <li className="header__social-item">
            <a className="header__social-link" href="#">
              YTube
            </a>
          </li>
          <li className="header__social-item">
            <a className="header__social-link" href="#">
              Tlgrm
            </a>
          </li>
          <li className="header__social-item">
            <a className="header__social-link" href="#">
              Vk
            </a>
          </li>
        </ul>
        <a className="header__donate" href="#">
          <img className="header__plus" src={iconPlus}></img>
          <p className="header__donate-text">ПОДДЕРЖАТЬ</p>
        </a>
      </div>
    </header>
  );
}

export default Header;
