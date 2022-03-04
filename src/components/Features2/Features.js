import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./features.css";

function Features() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div>
        <h2 style={{marginTop:"10%",textAlign:"center",marginLeft:"20px",color:"#30FBEF",fontSize:"40px"}} data-aos="fade-down">Testimonials</h2>
        <div class="wrapper-grid">
    <div class="container" >
      <div class='banner-img'></div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyxzEtRGO-gOjGCVyidy5sC9lLSdltu_aHa01J1I3PxBCC4L9u51M7cbCEU3CgNs1Kf4&usqp=CAU' alt='profile image' class="profile-img"/>
      <h1 class="name" data-aos="fade-down">John Fang </h1>
      <h5>Web Designer</h5><br/>
      <div data-aos="zoom-out">
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
      </div>
      <p class="description" data-aos="zoom-in">Suspendisse ultrices at diam lectus nullam. 
Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
      <button class='btn'>Follow</button>
    </div>

    <div class="container">
      <div class='banner-img'></div>
      <img src='https://images.unsplash.com/photo-1444011283387-7b0f76371f12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='profile image' class="profile-img"/>
      <p class="name" data-aos="fade-down">Jenny Doe</p>
      <h5>UX Designer</h5><br/>
      <div data-aos="zoom-out">
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
      </div>
      <p class="description" data-aos="zoom-in">Suspendisse ultrices at diam lectus nullam. 
Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
      <button class='btn'>Follow</button>
    </div>

    <div class="container">
      <div class='banner-img'></div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyxzEtRGO-gOjGCVyidy5sC9lLSdltu_aHa01J1I3PxBCC4L9u51M7cbCEU3CgNs1Kf4&usqp=CAU' alt='profile image' class="profile-img"/>
      <p class="name" data-aos="fade-down">Anna Marie</p>
      <h5>App developer</h5><br/>
      <div data-aos="zoom-out">
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          
      </div>
      <p class="description" data-aos="zoom-in">Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
      <button class='btn'>Follow</button>
    </div>
  </div>
  <div>
      <h2  style={{marginTop:"10%",textAlign:"start",marginLeft:"20px",textAlign:"left",color:"#30FBEF"}} data-aos="fade-down">Subscribe<h5 style={{color:"white"}} data-aos="fade-right">Join our newsletter to never miss any latest news.</h5></h2>
      
      <input placeholder='Email' type="email" style={{float:"right",backgroundColor:"#2E3134",color:"white"}} className="input1" data-aos="fade-left"></input><button className='input2'  style={{float:"right",backgroundColor:"#282828",color:"white"}} data-aos="fade-left">Join</button>
  </div>
  <div>
      <h2  style={{color:"#30FBEF"}} className="tree" data-aos="fade-down">Try for free!<h5 style={{color:"white"}} data-aos="fade-right">Get limited 1 week free try our features!</h5></h2>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignContent:"space-between"}}>
      <button className='input4'  style={{float:"right",backgroundColor:"#2E3134",color:"white"}} data-aos="fade-left">Learn More</button>
      <button className='input4'  style={{float:"right",backgroundColor:"#2E3134",color:"#9C69E2"}} data-aos="fade-left">Request Demo  &#8594;</button>
      </div>
  </div>
    </div>
  )
}

export default Features;