import React from 'react'
import './card.css'
import login1 from './login-page.png';

function Card() {
  return (
    <div>
      <div className="new-login">
        <div class="container1 m3">
          <div class="login-content">
            <form >
             <a class="title">Download Our App</a><br/><br/>
              <div >
              The place to store various data that you can access at any time through the internet  and where you can carry it. 
This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. 
              </div><br/>
              <div >
              <button style={{padding:"10px",borderRadius:"20px",paddingLeft:"30px",paddingRight:"30px",backgroundColor:"#212121",color:"white"}}>Download</button>

                
              </div>

            </form>
          </div>
          <div class="img">
            <img src={login1} />
          </div>

        </div>
      </div>

      
      
    </div>
  )
}

export default Card