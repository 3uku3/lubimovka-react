import { FC } from "react";
import AfficheCard from "../elements/AfficheCard";
import LinkWithArrow from "../elements/LinkWithArrow";
import Title from "../elements/Title";

const Affiche: FC = () => {
  return (
    <section className="affiche">
      <div></div>
      <div>
        <Title>
          Афиша <br />
          событий <LinkWithArrow link="#" text="ПОЛНАЯ АФИША"></LinkWithArrow>
        </Title>
        <p className="title__subtitle">На все читки и мастер-классы фестиваля вход свободный по предварительной регистрации.</p>
      </div>
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
    </section>
  );
};
export default Affiche;
