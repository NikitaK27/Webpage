import React,{useEffect} from 'react'
import './card.css'
import login1 from './Login-page1.png';
import login2 from './login-page.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Card() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div>
      <div className="new-login">
        <div class="container1">
          <div class="login-content">
            <form >
             <a class="title" data-aos="zoom-in">Save your data storage here</a><br/><br/>
              <div data-aos="zoom-in">
              Save your data storage here.Insignia is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
Learn more
              </div><br/>
              <div >
              <button style={{padding:"10px",borderRadius:"20px",backgroundColor:"#2E3134",color:"white"}}>Learn More </button>

                
              </div>

            </form>
          </div>
          <div class="img" data-aos="fade-left">
            <img src={login1} />
          </div>

        </div>
      </div>

      <div className="new-login">
        <div class="container1 m3" >
         
          <div class="img" data-aos="zoom-in-down">
            <img src={login2} />
          </div>
          <div class="login-content1" style={{}}>
            <form data-aos="zoom-in-down" >
             <a class="title">We are a high-level data storage bank</a><br/><br/>
              <div >
              The place to store various data that you can access at any time through the internet  and where you can carry it. 
This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. 
              </div><br/>
              

            </form>
          </div>

        </div>
      </div>
    </div>
    
  )
  
}

export default Card