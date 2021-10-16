import React from "react";
import TypeWriter from "react-typewriter";
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer";

function Pharm(){

  return (
    <div>
    <header id="home" style={{backgroundImage:'url(https://aosts.com/wp-content/uploads/2019/03/Independent-Water-analysis.jpg)'}}>
      <div className="row banner">
        <div className="banner-text">
          <h2 className="responsive-headline" >
            <TypeWriter typing={0.5}>B.Pharm & D.Pharm</TypeWriter>
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
          <h2>Branch</h2>
          <div className="row">
            <div className="columns download" style={{width:"100%"}}>
              <p>
                <Link to="/bpharm" target="_blank" className="button">
                  <i className="fa fa-download"></i>B.Pharm
                </Link>
                <Link to="/dpharm" target="_blank" className="button">
                  <i className="fa fa-download"></i>D.Pharm
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

export default Pharm;
