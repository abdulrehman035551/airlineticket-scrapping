import './costumerData.css'
import { useRef } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export function Costumer() {
  let name = useRef()
  let email = useRef()
  let dob = useRef()
  let cnic = useRef()
  let phone = useRef()
  let passport = useRef()
  let searchId = Math.random() * 100000


  async function saveData(e) {
    e.preventDefault();
    let users = {
      name: name.current.value,
      email: email.current.value,
      dateOfBirth: dob.current.value,
      cnic: cnic.current.value,            
      phoneNumber: phone.current.value,
      passportNumber: passport.current.value,
      searchId: searchId
    };

   let resp = await axios.post('http://localhost:5000/users', users)

    console.log(resp.data);
    // alert("use this id to serach your data" + " " + searchId)
    toast("Thank u! conformation of your booking soon we will contact you");
  }
  return <>
    <h1>Passenger(s) Personal Information</h1>

    <div id='data'>
      <form id='info-form'>
        <label>Name:</label>
        <input ref={name} id="name" type="text" /><br />
        <label>Email:</label>
        <input ref={email} id="email" type="email"  placeholder="abc@gmail.com" /><br />
        <label>Data Of Birth:</label>
        <input ref={dob} id="date-of-birth" type="date" /><br />
        <label>CNIC:</label>
        <input ref={cnic} type="number" placeholder="XXXXX-XXXXXXX-X" /><br />
        <label>Passport:</label>
        <input
          ref={passport}
          type="number"
          placeholder="only for international travellers"
          required=""
        /><br />
        <label>Phone Number:</label>
        <input ref={phone} type="text" placeholder="0300-0000000" required="" maxLength={11} /><br />
        <button type='submit' onClick={saveData}>Save</button>
      </form>
    </div>
    <img id="bg" src="bg-yt.jpg"></img>

  </>
}