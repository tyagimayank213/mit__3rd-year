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
  function playVideo(file) {
    setFileName(file);
  }
  const [fileName, setFileName] = useState('https://www.youtube.com/embed/wiuLCUZAWy8');
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
          </div>
      </div>
    </section>
    
    <section id="portfolio1">
      <div className="row">
        <iframe src="https://mitmeerut.ac.in/" height="500" width="100%" title="Iframe Example"></iframe>
      </div>
    </section>
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Videos</h1>

          <div className="videorow">
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/vi/9i0FZJpby7M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7jJPB5GI-MyJ8u5U6F0Yh1OAqLg" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/9i0FZJpby7M')} />
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/an_webp/wiuLCUZAWy8/mqdefault_6s.webp?du=3000&sqp=CJfsgIwG&rs=AOn4CLALE3T-aUROyaXfCHdLr-427_6Fng" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/wiuLCUZAWy8')}/>
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/vi/q62SvxH2Vuk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGtJQlwbMdV2aI_LTYEzy96xrNGQ" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/q62SvxH2Vuk')}/>
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/an_webp/haO2Lp4AGNk/mqdefault_6s.webp?du=3000&sqp=CKbUgIwG&rs=AOn4CLAEe0Y5Et4CF6rVhx33X_vf04e9WA" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/haO2Lp4AGNk')} />
                </div>
            </div>
          </div>
          <div className="videorow">
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/vi/g1iPYSGqHiI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2ofgs-m4KXOx_JpXhTaYmLsHpug" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/g1iPYSGqHiI')} />
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/vi/5F33ceKXXPA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsC_n8FoQ7kxCBvf5lv2xoGpvyEQ" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/5F33ceKXXPA')}/>
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/an_webp/gWuDIsnwTkg/mqdefault_6s.webp?du=3000&sqp=CMD1gIwG&rs=AOn4CLCaRFlYXp2BUCwvkpC4QLIESTlg4A" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/gWuDIsnwTkg')}/>
                </div>
            </div>
            <div className="videocol">
                <div className="feature-img">
                    <img alt="" src="https://i.ytimg.com/an_webp/gJ-gS2EHwts/mqdefault_6s.webp?du=3000&sqp=CLbpgIwG&rs=AOn4CLAOaIURybggpptJxEmDvZNbUKVC4g" width="100%" />
                    <img alt="" src="https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png" className="play-btn" onClick={(e)=>playVideo('https://www.youtube.com/embed/gJ-gS2EHwts')}/>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-player">
      <iframe width="1145" height="450" src={fileName} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
