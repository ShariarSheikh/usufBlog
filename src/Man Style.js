import React from 'react'
import { motion } from 'framer-motion';

// import img
import img1 from "./img/img4.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img6.jpg"
// import css
import "./styles/manstyle.css"

function ManStyle() {
    return (
        <>
             <section className="manstyle">
             {/* fast motion div start */}
                 <div className="animation-style-div">
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
               <div className="animation-style-div">
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
                 </div>
                 </div>
             {/* fast motion div end */}
             
             {/* second body div start */}
             <div className="manstyle-second-div">
                 {/* mastyle left div start */}
               <div className="manstyle-left-div">
                 {/* left div nm one start */}
                  <div className="left-div-nm-one">
                  <h1 className="this-div-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus.
                  </h1>
                    <div className="left-flex-item-div">
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
                    </div>
                  </div>
                 {/* left div nm end */}

                 {/* left div nm two start */}
                 <div className="left-div-nm-two">
                     <div className="nm-two-div1">
                      <span className="m-style-date">12 April 2020</span>
                      <h1 className="manstyle-two-div-title">What happend to me in 2020- in Review Fast adkf get.</h1>
                       <img className="m-two-img" src={img1} alt="manstyle"/>
                       <p className="m-style-two-div-pera">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in.
                       Lorem ipsum dolor sit amet.
                       <b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in.
                       Lorem ipsum dolor sit amet. <br/>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in.
                       Lorem ipsum dolor sit amet.
                       </p>
                       <span className="read-more-manstyle">READ MORE</span>
                     </div>
                     <div className="nm-two-div2">
                       <div className="div2-fast-div">

                       <div className="div-two2">
                       <span className="m-style-date-div2">12 April 2020</span>
                      <h1 className="manstyle-two-div-title-div2">What happend to me in 2020- in</h1>
                       <img className="m-two-img-div2" src={img1} alt="manstyle"/>
                       <p className="m-style-two-div-pera-div2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in.          
                       </p>
                       </div>
                       <div className="div-two2">
                       <span className="m-style-date-div2">12 April 2020</span>
                      <h1 className="manstyle-two-div-title-div2">What happend to me in 2020- in</h1>
                       <img className="m-two-img-div2" src={img1} alt="manstyle"/>
                       <p className="m-style-two-div-pera-div2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       </p>
                       </div>

                       </div>
                       <div className="div2-last-div">
                       <div className="div-two2">
                       <span className="m-style-date-div2">12 April 2020</span>
                      <h1 className="manstyle-two-div-title-div2">What happend to me in 2020- in</h1>
                       <img className="m-two-img-div2" src={img1} alt="manstyle"/>
                       <p className="m-style-two-div-pera-div2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in.          
                       </p>
                       </div>
                       <div className="div-two2">
                       <span className="m-style-date-div2">12 April 2020</span>
                      <h1 className="manstyle-two-div-title-div2">What happend to me in 2020- in</h1>
                       <img className="m-two-img-div2" src={img1} alt="manstyle"/>
                       <p className="m-style-two-div-pera-div2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       </p>
                       </div>
                       </div>

                     </div>
                 </div>
                 {/* left div nm two start */}

                 {/* left div nm last start */}
                 <div className="man-style-last-bottom-div">
                   <h1 className="title-bottom-of-last-div">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in. 
                   </h1>
                 </div>
                 {/* left div nm last end */}

               </div>
                 {/* mastyle left div end */}




                 {/* mastyle right div start */}            
               <div className="manstyle-right-div">
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

               </div>
                 {/* mastyle right div start */}            

             </div>
             {/* second body div end */}
              
             </section>
        </>
    )
}

export default ManStyle;
