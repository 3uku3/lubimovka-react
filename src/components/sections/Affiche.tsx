import { FC } from "react";
import AfficheCard from "../elements/AfficheCard";
import LinkWithArrow from "../elements/LinkWithArrow";

const Affiche: FC = () => {
  return (
    <section className="affiche">
      <h1 className="affiche__title">
        Афиша <br />
        событий <LinkWithArrow link="#" text="ПОЛНАЯ АФИША"></LinkWithArrow>
      </h1>
      <p className="affiche__subtitle">
        На все читки и мастер-классы фестиваля вход свободный по предварительной
        регистрации.
      </p>
      <div className="affiche__card-container">
        <div className="affiche__left-container">
          <AfficheCard></AfficheCard>
          <AfficheCard></AfficheCard>
          <AfficheCard></AfficheCard>
        </div>
        <div className="affiche__right-container">
          <AfficheCard></AfficheCard>
          <AfficheCard></AfficheCard>
          <AfficheCard></AfficheCard>
        </div>
      </div>
    </section>
  );
};
export default Affiche;
