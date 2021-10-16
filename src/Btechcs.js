import React from "react";
import TypeWriter from "react-typewriter";
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer";

function Btechcs(){

  return (
    <div>
    <header id="home" style={{backgroundImage:'url(https://www.indiaeducation.net/imagesvr_ce/5334/Computer%20Engineering.jpg)'}}>
      <div className="row banner">
        <div className="banner-text">
          <h2 className="responsive-headline" >
            <TypeWriter typing={0.5}>B.Tech - Computer Sci. & Engg.</TypeWriter>
          </h2>
          <hr />
          <ul className="social">
            <li key="facebook">
            <a href='https://www.facebook.com/mit.merrut/'>
              <i className="fa fa-facebook"></i>
            </a>
            </li>
            <li key="instagram">
            <a href='https://www.instagram.com/mit_meerut/'>
              <i className="fa fa-instagram"></i>
            </a>
            </li>
            <li key="linkedin">
            <a href="https://www.linkedin.com/company/mitmeerut/">
              <i className="fa fa-linkedin"></i>
            </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
    <section id="about">
      <div className="row" style={{textAlign:"center"}}>
          <h2>Semesters</h2>
          <div className="row">
            <div className="columns download" style={{width:"100%"}}>
              <p>
                <Link to="/btechcs1" className="button">
                  <i className="fa fa-download"></i>1 Semester
                </Link>
                <Link to="/btechcs2" className="button">
                  <i className="fa fa-download"></i>2 Semester
                </Link>
                <Link to="/btechcs3" className="button">
                  <i className="fa fa-download"></i>3 Semester
                </Link>
                <Link to="/btechcs4" className="button">
                  <i className="fa fa-download"></i>4 Semester
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="columns download" style={{width:"100%"}}>
              <p>
                <Link to="/btechcs5" className="button">
                  <i className="fa fa-download"></i>5 Semester
                </Link>
                <Link to="/btechcs6" className="button">
                  <i className="fa fa-download"></i>6 Semester
                </Link>
                <Link to="/btechcs7" className="button">
                  <i className="fa fa-download"></i>7 Semester
                </Link>
                <Link to="/btechcs8" className="button">
                  <i className="fa fa-download"></i>8 Semester
                </Link>
              </p>
            </div>
          </div>
      </div>
    </section>
    <footer>
      <div className="row">
        <div className="twelve columns">

          <ul className="copyright">
            <li>
              Made by{" "}
              <p>
                <a href="https://www.linkedin.com/in/mayank-tyagi-372142213/">
                  MAYANK TYAGI
                </a>
                |
                <a href="https://www.linkedin.com/in/anmol-tyagi-0176801b2/">
                  ANMOL TYAGI
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Btechcs;
