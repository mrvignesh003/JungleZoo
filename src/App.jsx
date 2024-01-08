import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Internship from './Components/education/internship';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ZooKeeper from './Components/education/ZooKeeper';
import Inout from './Components/education/Inout';
import Summercamp from './Components/education/Summercamp';
import Youthclub from './Components/education/Youthclub';
import Footer from './Components/Footer/Footer';
import Footer1 from './Components/Footer/Footer1';
import Visit from './Components/Visit/Visit';
import Map from './Components/Map/Map';
import Appsc from './Components/cart/Appsc'
import Checkout from './Components/cart/Checkout';
import Ticket from './Components/Ticket/Ticket';
import Login from './Components/Login/Login';
import Signin from './Components/Signin/Signin';
import HomeTicket from './Components/Home/HomeTicket';
import HomeAdoption from './Components/Home/HomeAdoption';
import Datepicker from './Components/Ticket/Datepicker';
import Todolist from './Components/Ticket/Todolist';
import Vehicletic from './Components/Ticket/Vehicletic';
import Tic from './Components/Ticket/Tic';
import Safari from './Components/Ticket/Safari'
import Equip from './Components/Ticket/Equipment';
import Explore from './Components/Ticket/Explore';
import Student from './Components/Ticket/Student';
import Donation from './Components/Donation/Donation';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Internship' element={<Internship />} />
        <Route path='/ZooKeeper' element={<ZooKeeper />} />
        <Route path='/Inout' element={<Inout />} />
        <Route path='/Summercamp' element={<Summercamp />} />
        <Route path='/Youthclub' element={<Youthclub />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/footer' element={<Footer1 />} />
        <Route path='/Visit' element={<Visit />} />
        <Route path='/Map' element={<Map />} />
        <Route path='/Appsc' element={<Appsc />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Ticket' element={<Ticket />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/HomeTicket' element={<HomeTicket />} />
        <Route path='/HomeAdoption' element={<HomeAdoption />} />
        <Route path='/Tic' element={<Tic />} />
        <Route path='/Datepicker' element={<Datepicker />} />
        <Route path='/Todolist' element={<Todolist />} />
        <Route path='/Vehicletic' element={<Vehicletic />} />
        <Route path='/safari' element={<Safari />} />
        <Route path='/equip' element={<Equip />} />
        <Route path='/Explore' element={<Explore />} />
        <Route path='/student' element={<Student />} />
        <Route path='/Donation' element={<Donation />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App