import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

// render coponent
import Home from "./Home";
import Fetures from "./Fetures";
import Blog from "./Blog";
import Manstyle from "./Man Style";
import About from "./About";
import Contact from "./Contact";

// icon import
import { AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// import img
import usufImg from "./img/img4.jpg";
import bg from "./img/img6.jpg";
import pc2 from "./img/img2.jpg";
import pc1 from "./img/img1.jpg";

// style css
import "./styles/App.css";
// boostrap
import "bootstrap/dist/css/bootstrap.min.css";
//  import '../node_modules/bootstrap/js/dist/carousel.js';
//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Carousel, CarouselItem } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="app-home">
        {/* nav slider profile link in this div */}
        <div className="slider-nav-profile">
          <div className="slider-div">
            <Carousel className="carousel">
              <CarouselItem className="img-item">
                <img src={bg} alt="" />
                <Carousel.Caption className="caption">
                  <h1 className="carusel-title">There is nohting</h1>
                  <p className="carusel-pera">
                    nav slider profile link in this div{" "}
                  </p>
                </Carousel.Caption>
              </CarouselItem>

              <CarouselItem className="img-item">
                <img src={pc2} alt="" />
                <Carousel.Caption>
                  <h1 className="carusel-title">There is nohting</h1>
                  <p className="carusel-pera">
                    nav slider profile link in this div{" "}
                  </p>
                </Carousel.Caption>
              </CarouselItem>

              <CarouselItem className="img-item">
                <img src={pc1} alt="" />
                <Carousel.Caption>
                  <h1 className="carusel-title">There is nohting</h1>
                  <p className="carusel-pera">
                    nav slider profile link in this div{" "}
                  </p>
                </Carousel.Caption>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
        <div className="nav-div">
          <div className="div-img">
            <div className="img-border">
              <img src={usufImg} alt="pic" />
            </div>
            <span className="name">UsufBlog</span>
          </div>

          <div className="div-link">
            <span className="nav-link">
              <NavLink exact activeClassName="nlink" to="/">
                Home
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink exact activeClassName="nlink" to="/fetures">
                Fetures
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink exact activeClassName="nlink" to="/blog">
                Blog
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink exact activeClassName="nlink" to="manstyle">
                Man Style
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink exact activeClassName="nlink" to="about">
                About
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink exact activeClassName="nlink" to="contact">
                Contact
              </NavLink>
            </span>
          </div>

          <div className="follow-me-icon-div">
            <div className="icon-div">
              <span className="socile-icon">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </span>
              <span className="search-icon">
                <FaSearch />
              </span>
            </div>
            <div className="humberger-icon-div">
              <span className="menu-icon">
                <AiOutlineMenu />
              </span>
            </div>
          </div>
        </div>

        <div className="render-page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/fetures" component={Fetures} />
            <Route path="/blog" component={Blog} />
            <Route path="/manstyle" component={Manstyle} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>

        <div className="main-footer">
          <div className="footer1">
            <h2>Usuf</h2>
            <span>
              <b>E : usufhello@gmail.com</b>
            </span>
            <span>
              <b>P : +8801365972649</b>
            </span>
          </div>

          <div className="footer2">
            <h2>Category</h2>
            <span>Blog</span>
            <span>Man Style</span>
            <span>News</span>
          </div>
        </div>

        {/* 
      
      This extension allows matching brackets to be identified with colours
.characters to match,define identified with colours.characters to match,
define which characters tocharacters to match,define which characters
 tocharacters to match,define which characters to match, and which colours to use.
 
 */}
      </div>
    </>
  );
}

export default App;
