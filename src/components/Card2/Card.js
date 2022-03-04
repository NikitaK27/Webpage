import React,{useEffect} from 'react'
import './card.css'
import login1 from './login-page.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Card() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div>
      <div className="new-login">
        <div class="container1 m3">
          <div class="login-content">
            <form >
             <a class="title" data-aos="zoom-in-down">Download Our App</a><br/><br/>
              <div data-aos="zoom-in">
              The place to store various data that you can access at any time through the internet  and where you can carry it. 
This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. 
              </div><br/>
              <div >
              <button style={{padding:"10px",borderRadius:"20px",paddingLeft:"30px",paddingRight:"30px",backgroundColor:"#212121",color:"white"}}>Download</button>

                
              </div>

            </form>
          </div>
          <div class="img" data-aos="zoom-in-down">
            <img src={login1} />
          </div>

        </div>
      </div>

      
      
    </div>
  )
}

export default Card