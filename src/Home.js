import React from "react";
import TypeWriter from "react-typewriter";
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer";
import firebase, { auth } from "./config/firebase-config";

function Home(){

  const signOutt = (e)=>{
    e.preventDefault();
    auth.signOut();
  }

  return (
    <div>
    <header id="home" style={{backgroundImage:'url(https://college-1be40.web.app/images/header-background.jpg)'}}>
      <div className="row banner">
        <div className="banner-text">
          <button className="signout" onClick={signOutt}>sign out</button>
          <h2 className="responsive-headline" >
            <TypeWriter typing={0.5}>Meerut Institute of Technology</TypeWriter>
          </h2>
          <h3>
            Based in Meerut.
          </h3>
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
          <h2>Courses</h2>
          <div className="row">
            <div className="columns download" style={{width:"100%"}}>
              <p>
                <Link to="/btech" target="_blank" className="button">
                  <i className="fa fa-download"></i>B.Tech
                </Link>
                <Link to="/pharm" target="_blank" className="button">
                  <i className="fa fa-download"></i>B.Pharm & D.Pharm
                </Link>
                <Link to="/bcom" target="_blank" className="button">
                  <i className="fa fa-download"></i>B.Com
                </Link>
                <Link to="/bba" target="_blank" className="button">
                  <i className="fa fa-download"></i>BBA
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

export default Home;
