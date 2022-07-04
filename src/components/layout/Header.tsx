import logo from "../../assets/images/logo.svg";
import iconPlus from "../../assets/icons/plus.svg";
import iconLeft from "../../assets/icons/elipse-left.svg";
import iconRight from "../../assets/icons/elipse-right.svg";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
        <img className="logo" src={logo} alt="logo" />
        </Link>
        <nav className="header__nav">
          <div className="header__nav-item">
            <img className="header__nav-left" src={iconLeft}></img>
            <Link className="header__nav-link" to="/festival">
              Афиша
            </Link>
            <img className="header__nav-right" src={iconRight}></img>
          </div>
          <div className="header__nav-item">
            <img className="header__nav-left" src={iconLeft}></img>
            <a className="header__nav-link" href="#">
              Библиотека
            </a>
            <img className="header__nav-right" src={iconRight}></img>
          </div>
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
          <div className="header__nav-item">
            <img className="header__nav-left" src={iconLeft}></img>
            <a className="header__nav-link" href="#">
              Блог
            </a>
            <img className="header__nav-right" src={iconRight}></img>
          </div>
          <div className="header__nav-item">
            <img className="header__nav-left" src={iconLeft}></img>
            <a className="header__nav-link" href="#">
              Новости
            </a>
            <img className="header__nav-right" src={iconRight}></img>
          </div>
          <div className="header__nav-item">
            <img className="header__nav-left" src={iconLeft}></img>
            <a className="header__nav-link" href="#">
              О фестивале
            </a>
            <img className="header__nav-right" src={iconRight}></img>
          </div>
          <div className="header__nav-item">
            <img className="header__nav-left" src={iconLeft}></img>
            <a className="header__nav-link" href="#">
              Контакты
            </a>
            <img className="header__nav-right" src={iconRight}></img>
          </div>
        </nav>
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
