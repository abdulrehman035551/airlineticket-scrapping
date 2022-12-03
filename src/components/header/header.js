import './header.css'
import { Link } from 'react-router-dom'
export function Header()
{
    return<>
    
    <div className="navBar">
    <Link to=""> <img  id='Logo' src='logo.png'></img></Link>
    
    {/* <button id='login-button'>Login</button> */}
    <Link to=""><button id='home'>Home</button></Link>

    <Link to="/Booking">  <button class='btn' id='book-button'>Find-Flight</button></Link>
    <Link to="/Contact"><button class='btn' id='contact-us'>Contact-Us</button></Link>
   <Link to="/Middle"><button class='btn' id='guide'>Details</button></Link>
    
    
    </div>
    
    </>
}