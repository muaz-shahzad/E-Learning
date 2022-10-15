import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function BelowCrousel() {
  return (
    <>
      <section className="why-we ">
        <div className="container-mt2 shadow-lg p-3 mb-5 bg-body rounded">
          <div className="cont-mt2-left">
            <h3 className="head-text">Three reasons for us to choose</h3>
            <div className="mt2-row">
              <div className="mt2-left-icon">
              <PeopleIcon className="icons" style={{fontSize: "40px"}}/>
              </div>
              <div className="mt2-left-text">
                <h4 className="head-text1">
                  Professional trainers</h4>
                <p className="text22">Professionalism, responsibility and results-oriented training are our priority.</p>
              </div>
            </div>
            <div className="mt2-row">
              <div className="mt2-left-icon">
              <CardGiftcardIcon className="icons" style={{fontSize: "40px"}}/>
              </div>
              <div className="mt2-left-text p-0">
                <h4 className="head-text1">Certificate</h4>
                <p className="text22">
                  The certificate is recognized among employers and is a sufficient condition for obtaining a teacher's position abroad.</p>
              </div>
            </div>
            <div className="mt2-row p-0">
              <div className="mt2-left-icon" >
              <BarChartIcon className="icons" style={{fontSize: "40px"}}/></div>
              <div className="mt2-left-text">
                <h4 className="head-text1">
                  Three lectures for free</h4>
                <p className="text22">The offer can be used by all users who are registered in our system.</p>
              </div>
            </div>
          </div>
          <div className="container-mt2-rg  p-2 bg-body rounded  p-2 ">
            <form action="#" className="form-fill">
              <div className="form1">
                <label htmlFor="name">
                </label>
                <input className="form-block" type="text" id="name" name="name/surname" placeholder="Name..." required />
              </div>
              <div className="form1">
                <label htmlFor="mail"></label>
                <input className="form-block" type="email" id="mail" name="e-mail" placeholder="E-mail..." required />
              </div>
              <div className="form1">
                <label htmlFor="pwd"></label>
                <input className="form-block" type="password" id="pwd" name="pwd" minLength="8" placeholder="Password..." required />
                <br /> <br />
              </div>
              <button className=" color-change1 but-send" type="submit"> Send 
                <i className="far fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </section>


    </>
  )
}
export default BelowCrousel;


