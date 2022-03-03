import React from 'react'


const Features = ({ MenuData }) => {
    //   console.log(menuData);
  
    return (
        
      <>
      <h1 style={{marginTop:"10%",textAlign:"start",marginLeft:"20px",color:"#30FBEF"}}>Features</h1>
        <section className="main-card--cointainer">
          {MenuData.map((curElem) => {
            const { id, name, category,image,  description } = curElem;
  
            return (
              <>
              
                <div className="card-container" >
                  <div className="card ">
                    <div className="card-body">
                      {/* <span className="card-number card-circle subtle">{id}</span> */}
                      {/* <span className="card-author subtle"> {category}</span> */}
                      <h3 className="card-title"> {name} </h3>
                      <span className="card-description subtle">
                        {description}
                      </span>
                      <div className="card-read">Read</div>
                    </div>
                    <img src={image}  alt="images" className="card-media" />
  
                    <span className="card-tag  subtle">Learn More  &#8594;</span>
                  </div>
                </div>
              </>
            );
          })}
        </section>
      </>
    );
  };
  

export default Features