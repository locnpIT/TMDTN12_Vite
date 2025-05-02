import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateBrand from "./pages/AdminPage/CreateBrand";
import { HomePage } from "./pages/HomePage/HomePage";
import './index.css';
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {

  return(
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<CreateBrand/>}/>
        <Route path="/bai-viet/:postId" element={<PostDetails />} />
    </Routes>
  )

}

export default App;