import{BrowserRouter ,Route, Routes} from "react-router-dom";
import {Header} from "./components/header/header.js"
import {Slider} from "./components/slider/slider"
import {Middle} from "./components/middle-section/middle"
import {Booking} from "./components/booking/booking"
import {Data} from "./components/data/data"
import { ToastContainer, toast } from 'react-toastify';

import { Contact } from "./components/contact/contact.js";
import {Costumer} from "./components/costumerData/costumerData.js"
// import { Footer } from "./components/footer/footer.js";
import {useState} from "react"



function App() {
  let [data, setData] = useState({filters:{airlines:[] }} )
  return (
    <div>
     
     <BrowserRouter>
 <Header></Header>

 <Routes>
  <Route path={''} element={<Slider/>}> </Route>
  <Route path={'/Middle'} element={<Middle />}></Route>
  <Route path={'/Booking'}  element={<Booking setData={setData}  />} />
  <Route path={'/Data'} element={<Data setData={setData} data={data}/>}></Route>
  <Route path={'/Contact'} element={<Contact />}></Route>
  <Route path={'/costumerData'} element={<Costumer />}></Route>
 

  </Routes>
  <ToastContainer />
 </BrowserRouter>
    </div>
  );
}

export default App;
