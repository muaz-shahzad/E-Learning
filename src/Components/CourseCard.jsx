import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import Cardline from "../Components/Cardline";
import Gundlibtn from "../Components/Gundlibtn";

function CourseCard(props)
{
    return(
        <>
        <section>
            <div className="gund-sec2-article shadow-lg p-3 mb-5 bg-body rounded">
                <h3 className="head-text4">
               {props.title}
                </h3>
                <div className="kursebi-subject-blok">
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={props.img1} alt=""/>
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{props.name1}</h5>
                            <p className="kursebi-subject">{props.pro1}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-microscope"></i>
                            </div>
                            <Cardline/>
                    </div>
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={props.img2} alt=""/>
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{props.name2}</h5>
                            <p className="kursebi-subject">{props.pro2}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-vial"></i>
                            </div>
                            <Cardline/>
                    </div>
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={props.img3} alt=""/>
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{props.name3}</h5>
                            <p className="kursebi-subject">{props.pro3}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-satellite"></i>
                            </div>
                            <Cardline/>
                    </div>
                    <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={props.img4} alt=""/>
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{props.name4}</h5>
                            <p className="kursebi-subject">{props.pro4}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-landmark"></i>
                            </div>
                            <Cardline/>
                    </div>
                </div>
                <Gundlibtn/>
            </div>
        </section> 

        </>
    )
}
export default CourseCard;