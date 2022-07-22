import logo from "../../assets/images/logo.svg";
import iconPlus from "../../assets/icons/plus.svg";
import { FC } from "react";
import { Link} from "react-router-dom";
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
            path: "/library",
            text: "Библиотека"
          },
          {
            path: "/projects",
            text: "Проекты"
          },
          {
            path: "/history",
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
