import React from 'react'
import './Navbar.css'
import logo from './Logo.png';

function Navbar() {
  return (
    <div>
        <header class="header">
    <div class="container2">
        <div class="row align-items-center justify-content-between">
           <div class="logo" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
           <img src={logo} style={{width:"80px"}}></img>
             <a href="#"  style={{marginTop:"10px",color:"#30FBEF"}} >Insignia</a>
           </div>
           <input type="checkbox" id="nav-check"/>
           <label for="nav-check" class="nav-toggler">
              <span></span>
           </label>
           <nav class="nav">
              <ul>
                 <li><a href="#" class="active">About</a></li>
                 <li><a href="#">Help</a></li>
                 <li><a href="#">Features</a></li>
                 <li><a href="#">Signup</a></li>
                 <li>
                 <button style={{padding:"10px",borderRadius:"20px",backgroundColor:"#2E3134",color:"#30FBEF"}}>Request Demo &#8594;</button></li>
              </ul>
           </nav>
        </div>
    </div>
 </header>


    </div>
  )
}

export default Navbar

