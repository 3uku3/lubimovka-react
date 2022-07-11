import "./App.scss";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/pages/Main";
import AfficheFestival from "./components/pages/AffisheFestival";
import { Route, Routes } from "react-router-dom";
import Library from "./components/pages/Library";
import Blog from "./components/pages/Blog";
import News from "./components/pages/News";
import About from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route
          path="/festival"
          element={<AfficheFestival></AfficheFestival>}
        ></Route>
        <Route path="/library/plays" element={<Library></Library>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/about*" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
