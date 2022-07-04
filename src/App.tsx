import "./App.scss";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/pages/Main";
import AfficheFestival from "./components/pages/AffisheFestival";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
