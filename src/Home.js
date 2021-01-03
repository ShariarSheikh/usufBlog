import React from 'react'

 //import icon
 import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

 //import img
 import pc1 from "./img/img1.jpg"
 import pc2 from "./img/img2.jpg"
 import pc3 from "./img/img3.jpg"
 import pc4 from "./img/img4.jpg"
 import pc5 from "./img/img5.jpg"
 import pc6 from "./img/img6.jpg"
//  import pc7 from "./img/img7.jpg"
 //import css
import "./styles/home.css"
function Home() {
    return (
        <>
          <section className="home">
           <div className="random-post-home">
               <div className="left-post-home">
                   <div className="big-random-post">
                   <span className="release-date-of-post">21 April 2020</span>
                   <h1 className="random-post-title">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                       </h1>
                       <img className="random-img" src={pc1} alt="usuf"/>       
                       <p className="random-pera">
                       <b>This is a Blog</b>
                        <br/>
                       This extension allows matching brackets to be identified with colours
                       .characters to match,define identified with colours.characters to match,
                       define which characters tocharacters to match,define which characters
                       <br/>
                        <br/>
                        <b>This is a Blog</b>
                        <br/>
                        This extension allows matching brackets to be identified with colours
                       .characters to match,define identified with colours.characters to match,
                       define which characters tocharacters to match,define which characters
                        tocharacters to match,define which characters to match, and which colours to use.
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
               <div className="right-post-home">
                   <div className="title">
                       <h1 className="fetured-title">More Fetured</h1>
                       <div className="underline"></div>
                   </div>
                   <div className="fetured-item">
                       <div className="items">
                           <img className="fetured-img" src={pc2} alt=""/>
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
                           <img className="fetured-img" src={pc3} alt=""/>
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
                           <img className="fetured-img" src={pc4} alt=""/>
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
                           <img className="fetured-img" src={pc5} alt=""/>
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
                           <img className="fetured-img" src={pc6} alt=""/>
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
               <div className="left-post-home">
                   <div className="big-random-post">
                   <span className="release-date-of-post">21 April 2020</span>
                   <h1 className="random-post-title">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                       </h1>
                       <img className="random-img" src={pc2} alt="usuf"/>       
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
               <div className="right-post-add">
                   <div className="add-div">
                       <div className="items_add">
                        <span>add</span>
                          
                       </div>
                   </div>
               </div>  
           </div>
           <div className="random_post_homee">
               <div className="left-random-div2">

               <div className="div-for-title">
               <span className="title">Fetures</span>
               <div className="fetures-items-div">
                       <div className="fetures-items">
                           <img className="fetures-items-img" src={pc3} alt=""/>
                           <h1 className="fetures-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           </h1>
                       </div>
                       <div className="fetures-items">
                           <img className="fetures-items-img" src={pc4} alt=""/>
                           <h1 className="fetures-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           </h1>
                       </div>
                       <div className="fetures-items">
                           <img className="fetures-items-img" src={pc5} alt=""/>
                           <h1 className="fetures-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           </h1>
                       </div>
                   </div>
               </div>
              <div className="blog-main-div">
                  <span className="title">Blog</span>  
                  <div className="blog-div-for-title">
                    <div className="blog-div-item">
                     <div className="blog-item1">
                     <div className="blog-items">
                           <img className="blog-items-img" src={pc5} alt=""/>
                           <h1 className="blog-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           </h1>
                       </div>
                       
                    <div className="blog-items">
                           <img className="blog-items-img" src={pc4} alt=""/>
                           <h1 className="blog-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           </h1>
                       </div>
                     </div>
                   
                     <div className="blog-item2">
                                                   
                    <div className="blog-items">
                           <img className="blog-items-img" src={pc3} alt=""/>
                           <h1 className="blog-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           </h1>
                       </div>
                       <div className="blog-items">
                           <img className="blog-items-img" src={pc2} alt=""/>
                           <h1 className="blog-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                           </h1>
                       </div>
                     </div>
                         
                    </div>
                    <div className="blog-big-item">
                         <img className="blog-big-item-img" src={pc1} alt=""/>
                         <h1 className="blog-items-title">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           </h1>
                     </div>
                     
                 </div>
              </div>
                 
              <div className="left-post-home">
                   <div className="big-random-post">
                   <span className="release-date-of-post">21 April 2020</span>
                   <h1 className="random-post-title">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                       </h1>
                       <img className="random-img" src={pc1} alt="usuf"/>       
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
                    
                    <div className="manstyle">
                        <span className="title">Man Style</span>
                        <div className="manstyle-item">
                            <div className="manstyle-item1">

                               <div className="blog-item">
                                   <img className="blog-img" src={pc3} alt=""/>
                                   <h1 className="blog-title">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   </h1>
                               </div>
                               <div className="blog-item">
                                   <img className="blog-img" src={pc2} alt=""/>
                                   <h1 className="blog-title">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   </h1>
                               </div>
                               <div className="blog-item">
                                   <img className="blog-img" src={pc1} alt=""/>
                                   <h1 className="blog-title">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   </h1>
                               </div>

                            </div>

                            <div className="manstyle-item2">   

                            <div className="blog-item">
                                   <img className="blog-img" src={pc4} alt=""/>
                                   <h1 className="blog-title">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   </h1>
                               </div>
                               <div className="blog-item">
                                   <img className="blog-img" src={pc5} alt=""/>
                                   <h1 className="blog-title">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   </h1>
                               </div>
                               <div className="blog-item">
                                   <img className="blog-img" src={pc6} alt=""/>
                                   <h1 className="blog-title">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   </h1>
                               </div>

                            </div>
                        </div>
                    </div>

              

               </div>

                    {/* end line left  */}




               <div className="right-random-div2">
                   <div className="random-left-items">
                       <div className="item-left-one">
                           <img className="left-item-img" src={pc1} alt=""/>
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
                           <img className="left-item-img" src={pc1} alt=""/>
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
                           <img className="left-item-img" src={pc1} alt=""/>
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
                           <img className="left-item-img" src={pc1} alt=""/>
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
                           <img className="left-item-img" src={pc1} alt=""/>
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
               </div>
           </div>
        
             <div className="last-bottom-div">

                 <div className="bottom-left-div">
                 <div className="left-post-home">
                   <div className="big-random-post">
                   <span className="release-date-of-post">21 April 2020</span>
                   <h1 className="random-post-title">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                       </h1>
                       <img className="random-img" src={pc1} alt="usuf"/>       
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
                 </div>

                 <div className="bottom-right-div">
                      <div className="bottom-right-item-one">
                          <h1 className="get-in-tauch">Get in tauch</h1>
                          <p className="enter-your-email">
                              Enter your email address below <br/> to subscribe to my blog
                          </p>
                          <input className="subscribe-input" type="text" placeholder="Your Email Address"/>
                          <button className="subscribe-btn">SUBSCRIBE</button>
                      </div>
                      <div className="bottom-right-item-two">
                          <div className="profile-usuf-bottom">
                              <div className="hr-bottom"></div>
                              <img className="bottom-usuf-img" src={pc4} alt=""/>
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
                 </div>
             </div>

          </section>
            
        </>
    )
}

export default Home;
