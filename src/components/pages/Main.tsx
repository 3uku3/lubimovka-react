import { FC } from "react";
import Affiche from "../sections/Affiche";
import BlogPrewiev from "../sections/BlogPrewiev";
import CardNews from "../sections/CardNews";
import ShortList from "../sections/ShortList";


const Main: FC = () => {
  return (
    <main className="main">
      <div className="main__left">
      <Affiche></Affiche>
      <BlogPrewiev></BlogPrewiev>
      <ShortList></ShortList>
      </div>
      <div className="main__right">
        <CardNews></CardNews>
      </div>
    </main>
  )
}
export default Main;