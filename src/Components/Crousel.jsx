import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import img1 from "../images/1carus.jpg"
import img2 from "../images/10car.png"
import img3 from "../images/3car.jpg"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function Crousel()
{
    return(
        <>
      <section >
        <div className="container-mt1">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
        </button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2">
        </button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3">
        </button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
        <img src={img1} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block carousel-back">
        </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
        <img src={img2} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block carousel-back">
        </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src={img3} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block carousel-back">
        </div>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
        </div> 
        </div>       
      </section>
        </>
    )
}
export default Crousel;