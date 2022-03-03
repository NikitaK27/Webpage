import React from 'react'
import "./features.css";

function Features() {
    
  return (
    <div>
        <h2 style={{marginTop:"10%",textAlign:"start",marginLeft:"20px"}}>Testimonials</h2>
        <div class="wrapper-grid">
    <div class="container">
      <div class='banner-img'></div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyxzEtRGO-gOjGCVyidy5sC9lLSdltu_aHa01J1I3PxBCC4L9u51M7cbCEU3CgNs1Kf4&usqp=CAU' alt='profile image' class="profile-img"/>
      <h1 class="name">John Fang </h1>
      <h5>Web Designer</h5><br/>
      <div>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
      </div>
      <p class="description">Suspendisse ultrices at diam lectus nullam. 
Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
      <button class='btn'>Follow</button>
    </div>

    <div class="container">
      <div class='banner-img'></div>
      <img src='https://images.unsplash.com/photo-1444011283387-7b0f76371f12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='profile image' class="profile-img"/>
      <p class="name">Jenny Doe</p>
      <h5>UX Designer</h5><br/>
      <div>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
      </div>
      <p class="description">Suspendisse ultrices at diam lectus nullam. 
Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
      <button class='btn'>Follow</button>
    </div>

    <div class="container">
      <div class='banner-img'></div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyxzEtRGO-gOjGCVyidy5sC9lLSdltu_aHa01J1I3PxBCC4L9u51M7cbCEU3CgNs1Kf4&usqp=CAU' alt='profile image' class="profile-img"/>
      <p class="name">Anna Marie</p>
      <h5>App developer</h5><br/>
      <div>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          
      </div>
      <p class="description">Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
      <button class='btn'>Follow</button>
    </div>
  </div>
  <div>
      <h2  style={{marginTop:"10%",textAlign:"start",marginLeft:"20px",textAlign:"left",color:"#30FBEF"}}>Subscribe<h5 style={{color:"white"}}>Join our newsletter to never miss any latest news.</h5></h2>
      
      <input placeholder='Email' type="email" style={{float:"right",backgroundColor:"#2E3134",color:"white"}} className="input1"></input><button className='input2'  style={{float:"right",backgroundColor:"#282828",color:"white"}}>Join</button>
  </div>
  <div>
      <h2  style={{color:"#30FBEF"}} className="tree">Try for free!<h5 style={{color:"white"}}>Get limited 1 week free try our features!</h5></h2>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignContent:"space-around"}}>
      <button className='input4'  style={{float:"right",backgroundColor:"#2E3134",color:"white"}}>Learn More</button>
      <button className='input4'  style={{float:"right",backgroundColor:"#2E3134",color:"#9C69E2"}}>Request Demo  &#8594;</button>
      </div>
  </div>
    </div>
  )
}

export default Features;