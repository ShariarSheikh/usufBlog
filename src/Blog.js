import React from 'react'
import { motion } from 'framer-motion';

 //import icon
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

// import img
import img1 from "./img/img4.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img6.jpg"
import "./styles/blog.css";

function Blog() {
    return (
        <>
               
            <section className="blog-page">
            
            <div className="blog-fast-three-div">
               <div className="zero-mean-fast-div">
               <img src={img1} alt="" className="zero-img"/>              
               <motion.div className="divY-animation"
                initial={{y:0}}
                animate={{y:"-50%"}}
                whileHover={{y:"-100%"}}
                >
               <span className="animation-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit incidunt.</span>
               <img src="" alt="logo_animation" className="logo-animation"/>
               </motion.div>
               </div>
               <div className="zero-mean-fast-div">
               <img src={img2} alt="" className="zero-img"/>              
               <motion.div className="divY-animation"
                initial={{y:0}}
                animate={{y:"-50%"}}
                whileHover={{y:"-100%"}}
               >
               <span className="animation-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit incidunt.</span>
               <img src="" alt="logo_animation" className="logo-animation"/>
               </motion.div>
               </div>
               <div className="zero-mean-fast-div">
               <img src={img3} alt="" className="zero-img"/>             
               <motion.div className="divY-animation"
                initial={{y:0}}
                animate={{y:"-50%"}}
                whileHover={{y:"-100%"}}
                >
               <span className="animation-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit incidunt.</span>
               <img src="" alt="logo_animation" className="logo-animation"/>
               </motion.div>
               </div>
           </div>

           <div className="blog-for-width85">       
           {/* blog number 1 post start */}
           <div className="blog-number-two">
           <div className="left-post-blog">
                   <div className="big-random-post">
                   <span className="release-date-of-post">21 April 2020</span>
                   <h1 className="random-post-title">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                       </h1>
                       <img className="random-img" src={img1} alt="usuf"/>       
                       <p className="random-pera">
                       This extension allows matching brackets to be identified with colours
                       .characters to match,define identified with colours.characters to match,
                       define which characters tocharacters to match,define which characters
                        tocharacters to match,define which characters to match, and which colours to use.
                        <br/>
                        <br/>
                        <b>This is a Blog</b>
                        <br/>
                        This extension allows matching brackets to be identified with colours
                       .characters to match,define identified with colours.characters to match,
                       define which characters tocharacters to match,define which characters
                        tocharacters to match,define which characters to match, and which colours to use.
                       </p>
                       <span className="random-post-read-more">READ MORE</span>
                   </div>
                   <div className="socile-icon">
                   <div className="icon-n-text">
                   <span className="share-text">SHARE</span>
                   <div className="all-icon">
                       <span className="s-icon"><FaFacebookF  style={{color:"#4267B2"}} className="icon"/></span>
                       <span className="s-icon"><FaTwitter style={{color:"00ACEE"}} className="icon"/></span>
                       <span className="s-icon"><FaInstagram  style={{color:"#8a3ab9"}} className="icon"/></span> 
                       <span className="s-icon"><IoMdShareAlt className="icon"/></span>
                   </div>
                   </div>
                   </div>
               </div>

               <div className="blog-fetures-and-others-post">
                   <div className="fetures-post">
                   <div className="right-post-blog">
                   <div className="title">
                       <h1 className="fetured-title">More Fetured</h1>
                       <div className="underline"></div>
                   </div>
                   <div className="fetured-item">
                       <div className="items">
                           <img className="fetured-img" src={img1} alt=""/>
                           <div className="items-text">
                           <h1 className="fetured-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           </h1>
                           <span className="date-of-post"> 
                            20 July 2021 
                           </span>
                           </div>
                          
                       </div>
                       <div className="items">
                           <img className="fetured-img" src={img2} alt=""/>
                           <div className="items-text">
                           <h1 className="fetured-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           </h1>
                           <span className="date-of-post"> 
                            20 July 2021 
                           </span>
                           </div>
                          
                       </div>
                       <div className="items">
                           <img className="fetured-img" src={img3} alt=""/>
                           <div className="items-text">
                           <h1 className="fetured-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           </h1>
                           <span className="date-of-post"> 
                            20 July 2021 
                           </span>
                           </div>
                          
                       </div>
                       <div className="items">
                           <img className="fetured-img" src={img2} alt=""/>
                           <div className="items-text">
                           <h1 className="fetured-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           </h1>
                           <span className="date-of-post"> 
                            20 July 2021 
                           </span>
                           </div>
                          
                       </div>
                       <div className="items">
                           <img className="fetured-img" src={img1} alt=""/>
                           <div className="items-text">
                           <h1 className="fetured-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           </h1>
                           <span className="date-of-post"> 
                            20 July 2021 
                           </span>
                           </div>
                          
                       </div>
                   </div>
               </div>
                   </div>
                   <div className="others-post">
                   <div className="bottom-right-item-one">
                          <h1 className="get-in-tauch">Get in tauch</h1>
                          <p className="enter-your-email">
                              Enter your email address below <br/> to subscribe to my blog
                          </p>
                          <input className="subscribe-input" type="text" placeholder="Your Email Address"/>
                          <button className="subscribe-btn">SUBSCRIBE</button>
                      </div>
                      <div className="add-div">
                       <div className="items_add">
                        <span>add</span>    
                       </div>
                       </div>
                   </div>
               </div>
                   

                   {/* bottom-post start */}
                   <div className="left-post-blog">
                   <div className="big-random-post">
                   <span className="release-date-of-post">21 April 2020</span>
                   <h1 className="random-post-title">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                       </h1>
                       <img className="random-img" src={img2} alt="usuf"/>       
                       <p className="random-pera">
                       This extension allows matching brackets to be identified with colours
                       .characters to match,define identified with colours.characters to match,
                       define which characters tocharacters to match,define which characters
                        tocharacters to match,define which characters to match, and which colours to use.
                        <br/>
                        <br/>
                        <b>This is a Blog</b>
                        <br/>
                        This extension allows matching brackets to be identified with colours
                       .characters to match,define identified with colours.characters to match,
                       define which characters tocharacters to match,define which characters
                        tocharacters to match,define which characters to match, and which colours to use.
                        <br/>
                        <br/>
                        <b>This is a Blog</b>
                        <br/>
                        This extension allows matching brackets to be identified with colours
                       .characters to match,define identified with colours.characters to match,
                       define which characters tocharacters to match,define which characters
                        tocharacters to match,define which characters to match, and which colours to use.
                        This extension allows matching brackets to be identified with colours
                       .characters to match,define identified with colours.characters to match,
                       define which characters tocharacters to match,define which characters
                        tocharacters to match,define which characters to match, and which colours to use.
                       </p>
                       <span className="random-post-read-more">READ MORE</span>
                   </div>
                   <div className="socile-icon">
                   <div className="icon-n-text">
                   <span className="share-text">SHARE</span>
                   <div className="all-icon">
                       <span className="s-icon"><FaFacebookF  style={{color:"#4267B2"}} className="icon"/></span>
                       <span className="s-icon"><FaTwitter style={{color:"00ACEE"}} className="icon"/></span>
                       <span className="s-icon"><FaInstagram  style={{color:"#8a3ab9"}} className="icon"/></span> 
                       <span className="s-icon"><IoMdShareAlt className="icon"/></span>
                   </div>
                   </div>
                   </div>
               </div>
               {/* bottom post end */}
           </div>
           {/* blog number 1 post end */}
           </div>
            </section>
        </>
    )
}

export default Blog;
