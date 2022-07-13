import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Organizers from "./Organizers";
import WhatWeDo from "./WhatWeDo";


const About: FC = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate replace to="what-we-do"></Navigate>}></Route>
      <Route path="/what-we-do" element={<WhatWeDo></WhatWeDo>}></Route>
      <Route path="/team" element={<Organizers></Organizers>}></Route>
    </Routes>
  )
}
export default About;