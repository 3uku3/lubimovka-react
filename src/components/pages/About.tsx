import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Organizers from "./Organizers";
import WhatWeDo from "./WhatWeDo";


const About: FC = () => {
  return (
    <Routes>
      <Route path="/what-we-do" element={<WhatWeDo></WhatWeDo>}></Route>
      <Route path="/team" element={<Organizers></Organizers>}></Route>
    </Routes>
  )
}
export default About;