import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import WhatWeDo from "./WhatWeDo";


const About: FC = () => {
  return (
    <Routes>
      <Route path="/what-we-do" element={<WhatWeDo></WhatWeDo>}></Route>
    </Routes>
  )
}
export default About;