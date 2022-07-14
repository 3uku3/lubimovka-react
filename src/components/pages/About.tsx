import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Organizers from "./Organizers";
import Sponsors from "./Sponsors";
import WhatWeDo from "./WhatWeDo";


const About: FC = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate replace to="what-we-do"></Navigate>}></Route>
      <Route path="/what-we-do" element={<WhatWeDo></WhatWeDo>}></Route>
      <Route path="/team" element={<Organizers></Organizers>}></Route>
      <Route path="/sponsors" element={<Sponsors></Sponsors>}></Route>
    </Routes>
  )
}
export default About;