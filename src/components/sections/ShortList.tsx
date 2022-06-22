import { FC } from "react";
import Card from "../elements/Card";

const ShortList: FC = () => {
  return (
    <section className="short-list">
      <h2 className="short-list__title">Шорт-лист 2020 года</h2>
      <div className="short-list__container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
};
export default ShortList;
