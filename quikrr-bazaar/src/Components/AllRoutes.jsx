import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import SinglePage from "./SinglePage"

const AllRoutes = ()=>{

    return (
        <Routes>
             <Route path="/" element={<Home/>} />
            <Route path='/single' element={<SinglePage />} />
        </Routes>
    )
}

export default AllRoutes;