import React from 'react'
import './card.css'
import login1 from './Login-page1.png';
import login2 from './login-page.png';

function Card() {
  return (
    <div>
      <div className="new-login">
        <div class="container1">
          <div class="login-content">
            <form >
             <a class="title">Save your data storage here</a><br/><br/>
              <div >
              Save your data storage here.Insignia is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
Learn more
              </div><br/>
              <div >
              <button style={{padding:"10px",borderRadius:"20px",backgroundColor:"#2E3134",color:"white"}}>Learn More </button>

                
              </div>

            </form>
          </div>
          <div class="img">
            <img src={login1} />
          </div>

        </div>
      </div>

      <div className="new-login">
        <div class="container1 m3" >
         
          <div class="img">
            <img src={login2} />
          </div>
          <div class="login-content1" style={{}}>
            <form >
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