import { Route, Routes } from "react-router-dom";
import Home from '../Component/Home';
import PageNotFound from "../Component/PageNotFound";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>}/> 
      </Routes>
    </div>
  )
}
