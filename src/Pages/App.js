import { Route, Routes, BrowserRouter} from 'react-router-dom'
import React from "react";

import Home from "./Home";

const Router = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;