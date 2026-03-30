
import { Route,Routes } from 'react-router-dom'

import Home from '../Pages/home.jsx'
import About from "../Pages/about.jsx"
import Contact from "../Pages/contact.jsx"
import Dashboard from "../Pages/Dashboard.jsx"
//compunent
import Nev from "../Compunents/NevBar"


export default function AppRoutes(){
    return(<>
        <Nev/>
        <Routes>
         <Route path='/' element= {<Home/>}></Route>
         <Route path='/about' element= {<About/>}></Route>
         <Route path='/Contact' element= {<Contact/>}></Route>
         <Route path='/Dashboard' element= {<Dashboard/>}></Route>
        </Routes>
        </>

    )
}