import React from 'react';
import { motion } from 'framer-motion';
//  import commnet commponent

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { IoMdText } from "react-icons/io";
import { IoMdShareAlt } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import img
import img1 from "./img/img4.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img6.jpg"
// import img4 from "./img/img7.jpg"


// css
import "./styles/home2.css"

const Fetures=()=>{

  
    return(
        <>
        <section>
           <div className="home2-fast-three-div">
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
             <div className="fetures-random-fast-div">

             <div className="fetures-card">  

               {/* post number 1 post*/}
             <div className="left-post-home">
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
                       </p>
                       <br/>

                       <div className="add-div">
                       <div className="items_add">
                        <span>add</span>    
                       </div>
                       </div> 

                       <br/>
                       <p className="random-pera">
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
               {/* post number 1 end*/}
               {/* post number 2  start*/}
               <div className="left-post-home">
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
                       </p>
                       <br/>

                       <div className="add-div">
                       <div className="items_add">
                        <span>add</span>    
                       </div>
                       </div> 

                       <br/>
                       <p className="random-pera">
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
               {/* post number 2 end */}
                 {/* post number 3  start*/}
                 <div className="left-post-home">
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
                       </p>
                       <br/>

                       <div className="add-div">
                       <div className="items_add">
                        <span>add</span>    
                       </div>
                       </div> 

                       <br/>
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
               {/* post number 3 end */}
             </div>

                {/* fetures right post start */}              
                 <div className="fetures-card-right">
            <div className="bottom-right-item-two">
                          <div className="profile-usuf-bottom">
                              <div className="hr-bottom"></div>
                              <img className="bottom-usuf-img" src={img2} alt=""/>
                          </div>
                          <h1 className="usuf-bottom-title">Usuf Ahmed</h1>
                          <p className="usuf-about-bottom">
                          Hi I am Usuf . I am from bangladesh. <br/>
                           Lorem ipsum dolor sit ametconsectetur <br/>
                            adipisicing elit. Sequi, consequatur! <br/> adipisicing elit. Sequi
                          </p>
                          <div className="follow-me-icon">
                              <div className="span-icon-bottom">
                                  <span className="follow-me">Follow Me On -</span>
                                  <span className="span-bottom-icon">
                                  <FaFacebookF  className="icon-bottom"/>
                                  </span>
                                  <span className="span-bottom-icon">
                                  <FaTwitter  className="icon-bottom"/>
                                  </span>
                                  <span className="span-bottom-icon">
                                  <FaInstagram  className="icon-bottom"/>
                                  </span>
                              </div>
                          </div>
                      </div>  
                        
                      <div className="right-post-home">
                   <div className="title">
                       <h1 className="fetured-title">More Fetured</h1>
                       <div className="underline"></div>
                   </div>
                   <div className="fetured-item">
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
                   </div>
               </div>

                       <div className="add-div">
                       <div className="items_add">
                        <span>add</span>    
                       </div>
                    </div>         
                    <div className="item-left-one">
                           <img className="left-item-img" src={img1} alt=""/>
                           <h1 className="left-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                           </h1>
                           <div className="icon-for-socile">
                               <span className="ss-icon"><FaFacebookF style={{color:"#4267B2"}}/></span>
                               <span className="ss-icon"><FaTwitter style={{color:"00ACEE"}}/></span>
                               <span className="ss-icon"><FaInstagram style={{color:"#8a3ab9"}}/></span>
                               <span className="from-of-post">Lorem ipsum dolor sit amet.</span>
                           </div>
                       </div> 
                       <div className="item-left-one">
                           <img className="left-item-img" src={img2} alt=""/>
                           <h1 className="left-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                           </h1>
                           <div className="icon-for-socile">
                               <span className="ss-icon"><FaFacebookF style={{color:"#4267B2"}}/></span>
                               <span className="ss-icon"><FaTwitter style={{color:"00ACEE"}}/></span>
                               <span className="ss-icon"><FaInstagram style={{color:"#8a3ab9"}}/></span>
                               <span className="from-of-post">Lorem ipsum dolor sit amet.</span>
                           </div>
                       </div> 
                       <div className="item-left-one">
                           <img className="left-item-img" src={img3} alt=""/>
                           <h1 className="left-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                           </h1>
                           <div className="icon-for-socile">
                               <span className="ss-icon"><FaFacebookF style={{color:"#4267B2"}}/></span>
                               <span className="ss-icon"><FaTwitter style={{color:"00ACEE"}}/></span>
                               <span className="ss-icon"><FaInstagram style={{color:"#8a3ab9"}}/></span>
                               <span className="from-of-post">Lorem ipsum dolor sit amet.</span>
                           </div>
                       </div> 
                       <div className="item-left-one">
                           <img className="left-item-img" src={img1} alt=""/>
                           <h1 className="left-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                           </h1>
                           <div className="icon-for-socile">
                               <span className="ss-icon"><FaFacebookF style={{color:"#4267B2"}}/></span>
                               <span className="ss-icon"><FaTwitter style={{color:"00ACEE"}}/></span>
                               <span className="ss-icon"><FaInstagram style={{color:"#8a3ab9"}}/></span>
                               <span className="from-of-post">Lorem ipsum dolor sit amet.</span>
                           </div>
                       </div> 


                  </div>
                {/* fetures right post end */}
           

             </div>
         

        </section>
        </>
    )
}
export default Fetures;