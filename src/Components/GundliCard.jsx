import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Gundlibtn from "../Components/Gundlibtn";

function GundliCard(Props) {
    console.log(Props);
    return (
        <>
            <section>
                <div className="gund-sec2-article shadow-lg p-3 mb-5 bg-body rounded">
                    <h3 className="head-text">Our Team</h3>
                    <p className="ord-text">The interest of the center is generally highly qualified
                        Collaboration with trainers, however, is not limited to our center
                        The field in general needs highly qualified trainers, therefore
                        The issue of establishing a "school of trainers" was on the agenda. Regardless
                        The fact that the center is not really focused on that alone
                        To be the provider of training for those who want to be in the country, is our role
                        This was also revealed - help other trained training providers
                        By offering trainers, we provide human resources for them as well
                        To make available.</p>
                    <div className="kursebi-subject-blok">
                        {/*  */}
                        <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="kursebi-subjec-pic">
                                <img className="subjeck-pick" src={Props.img1} alt="" />
                            </div>
                            <div className="kurs-pers-tex">
                                <h5 className="subject-name">{Props.name1}</h5>
                                <p className="kursebi-subject">{Props.skilll}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-microscope"></i>
                            </div>
                            <p className="more1"><a className="more" href="#"></a></p>
                        </div>
                        {/*  */}
                        <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="kursebi-subjec-pic">
                                <img className="subjeck-pick" src={Props.img2} alt="" />
                            </div>
                            <div className="kurs-pers-tex">
                                <h5 className="subject-name">{Props.name2}</h5>
                                <p className="kursebi-subject">{Props.skilll}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-vial"></i>
                            </div>
                            <p className="more1"><a className="more" href="#"></a></p>
                        </div>
                        <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="kursebi-subjec-pic">
                                <img className="subjeck-pick" src={Props.img3} alt="" />
                            </div>
                            <div className="kurs-pers-tex">
                                <h5 className="subject-name">{Props.name3}</h5>
                                <p className="kursebi-subject">{Props.skilll}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-satellite"></i>
                            </div>
                            <p className="more1"><a className="more" href="#"></a></p>
                        </div>
                        <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="kursebi-subjec-pic">
                                <img className="subjeck-pick" src={Props.img4} alt="" />
                            </div>
                            <div class="kurs-pers-tex">
                                <h5 class="subject-name">{Props.name4}</h5>
                                <p class="kursebi-subject">{Props.skill2}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-landmark"></i>
                            </div>
                            <p className="more1"><a className="more" href="#"></a></p>
                        </div>
                    </div>
                    <div className="kursebi-subject-blok">
                        <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="kursebi-subjec-pic">
                                <img className="subjeck-pick" src={Props.img5} alt="" />
                            </div>
                            <div className="kurs-pers-tex">
                                <h5 className="subject-name">{Props.name5}</h5>
                                <p className="kursebi-subject">{Props.skill3}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-laptop-house"></i>
                            </div>
                            <p className="more1"><a className="more" href="#"></a></p>
                        </div>
                        <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="kursebi-subjec-pic">
                                <img className="subjeck-pick" src={Props.img6} alt="" />
                            </div>
                            <div className="kurs-pers-tex">
                                <h5 className="subject-name">{Props.name6}</h5>
                                <p className="kursebi-subject">{Props.skill4}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-share-alt"></i>
                            </div>
                            <p className="more1"><a className="more" href="#"></a></p>
                        </div>
                        <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="kursebi-subjec-pic">
                                <img className="subjeck-pick" src={Props.img4} alt="" />
                            </div>
                            <div className="kurs-pers-tex">
                                <h5 className="subject-name">{Props.name7}</h5>
                                <p className="kursebi-subject">{Props.skill5}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <p className="more1"><a className="more" href="#"></a></p>
                        </div>
                        <div className="subject-block zooming shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="kursebi-subjec-pic">
                                <img className="subjeck-pick" src={Props.img3} alt="" />
                            </div>
                            <div className="kurs-pers-tex">
                                <h5 className="subject-name">{Props.name8}</h5>
                                <p className="kursebi-subject">{Props.skill3}</p>
                            </div>
                            <div className="kursebi-icon border border-5 shadow p-0 mb-5 rounded ">
                                <i className="fas fa-laptop-house"></i>
                            </div>
                            <p className="more1"><a className="more" href="#"></a></p>
                        </div>
                    </div>
                    <Gundlibtn />
                </div>
            </section>

        </>
    )
}
export default GundliCard;