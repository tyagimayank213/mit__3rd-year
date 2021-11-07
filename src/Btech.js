import React from "react";
import TypeWriter from "react-typewriter";
import { Link } from 'react-router-dom';
import Footer from "./Components/Footer";
import { auth } from "./config/firebase-config";

function Btech(){
  const signOutt = (e)=>{
    e.preventDefault();
    auth.signOut();
  }
  return (
    <div>
    <header id="home" style={{backgroundImage:'url(https://www.galaxyeduworld.com/storage/course/1616842296_605f0e38afa50_750_351.jpg)'}}>
      <div className="row banner">
        <div className="banner-text">
          <button className="signout" onClick={signOutt}>sign out</button>
          <h2 className="responsive-headline" >
            <TypeWriter typing={0.5}>Bachelor of Technology</TypeWriter>
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
          <div className="row rowpos">
          <div class="container">
    <input type="radio" name="dot" id="one"/>
    <div class="main-card">
      <div class="cards">
        <div class="card">
        <Link to='btechcs'>
         <div class="content">
           <div class="img">
          <img src="https://t3.ftcdn.net/jpg/01/81/12/58/360_F_181125818_cGv3Id6cwEDGv6UatGhwSoU669nnaW83.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">Computer Science & Engg.</div>
           </div>
         </div>
        </Link>
        </div>
        <div class="card">
        <Link to='btechmec'>
         <div class="content">
           <div class="img">
           <img src="https://dynamic.placementindia.com/blog_images/20201105111343_image1.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">Mechanical</div>
           </div>
         </div>
         </Link>
        </div>
        <div class="card">
        <Link to='btechcivil'>
         <div class="content">
           <div class="img">
           <img src="https://icbt.lk/wp-content/uploads/2018/06/Civil-Structural-Engineering-min.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="job">Civil</div>
           </div>
         </div>
         </Link>
        </div>
      </div>
      <div class="cards">
        
      </div>
    </div>
    <div class="button" style={{background:'#e3343a'}}>
      <label for="one" class=" active one"></label>
    </div>
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

export default Btech;
