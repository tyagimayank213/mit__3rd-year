import React from "react";
import TypeWriter from "react-typewriter";
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer";
import firebase, { auth } from "./config/firebase-config";
import { useState } from "react/cjs/react.development";

function Home(){
  
  const signOutt = (e)=>{
    e.preventDefault();
    console.log(auth);
    auth.signOut();
  }
  return (
    <div>
    <header id="home" style={{backgroundImage:'url(http://mitpharmacy.org/images/Header3.jpg)'}}>
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
    <section id="about" style={{textAlign:"center"}}>
          <h2>Courses</h2>
      <div className="row rowpos" style={{textAlign:"center"}}>
          {/* <div className="row">
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
              </p>
            </div>
          </div>
          <div className="row">
            <div className="columns download" style={{width:"100%"}}>
              <p>
                <Link to="/bba" target="_blank" className="button">
                  <i className="fa fa-download"></i>BBA
                </Link>
                <Link to="/bca" target="_blank" className="button">
                  <i className="fa fa-download"></i>BCA
                </Link>
                <Link to="/bsc" target="_blank" className="button">
                  <i className="fa fa-download"></i>BSc
                </Link>
              </p>
            </div>
          </div> */}
          <div class="container">
    <input type="radio" name="dot" id="one"/>
    <input type="radio" name="dot" id="two"/>
    <div class="main-card">
      <div class="cards">
        <div class="card">
        <Link to='btech'>
         <div class="content">
           <div class="img">
          <img src="https://www.galaxyeduworld.com/storage/course/1616842296_605f0e38afa50_750_351.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">B.Tech</div>
           </div>
         </div>
        </Link>
        </div>
        <div class="card">
        <Link to='pharm'>
         <div class="content">
           <div class="img">
           <img src="https://aosts.com/wp-content/uploads/2019/03/Independent-Water-analysis.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">B.Pharm & D.Pharm</div>
           </div>
         </div>
         </Link>
        </div>
        <div class="card">
        <Link to='bcom'>
         <div class="content">
           <div class="img">
             <img src="https://img.freepik.com/free-photo/calculator-100-dollar-bills-saving-concept_359031-11620.jpg?size=626&ext=jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">B.Com</div>
           </div>
         </div>
        </Link>
        </div>
      </div>
      <div class="cards">
        <div class="card">
        <Link to='bba'>
         <div class="content">
           <div class="img">
             <img src="https://www.indifi.com/blog/wp-content/uploads/2020/11/business-plan.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">BBA</div>
           </div>
         </div>
         </Link>
        </div>
        <div class="card">
        <Link to='bca'>
         <div class="content">
           <div class="img">
             <img src="https://campushunt.in/blog/wp-content/uploads/2018/04/laptop-screen-with-code-best-bca-colleges-in-bangalore-india-1024x536.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">BCA</div>
           </div>
         </div>
         </Link>
        </div>
        <div class="card">
        <Link to='bsc'>
         <div class="content">
           <div class="img">
             <img src="https://www.tawicolleges.com/wp-content/uploads/2019/05/agricultural-science.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">BSc</div>
           </div>
         </div>
         </Link>
        </div>
      </div>
    </div>
    <div class="button" style={{background:'#e3343a'}}>
      <label for="one" class=" active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div>
      </div>
    </section>
    
    <section id="portfolio1">
      <div className="row">
        <iframe src="https://mitmeerut.ac.in/" height="500" width="100%" title="Iframe Example"></iframe>
        <div style={{textAlign:"center"}}>
              <a href="https://mitmeerut.ac.in/admission-cell" target="_blank"className="button">
                  Visit Us to Know More
              </a>
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
