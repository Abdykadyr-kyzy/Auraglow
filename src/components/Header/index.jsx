import React from 'react'
import "./Header.css"
import two from "../Images/Frametwo.png"
import one from "../Images/Vectorone.png"
import aurag from "../Images/aurag.png"

export const Header = () => {
    return (
        <div className="container home" >
            <div className="header">
                 <p>New look, new products. Available exclusively at Auraglow.com</p>
                 <p className="exit">x</p>
            </div>
            <div className="header_content">
                 <div className="header_nav">
                     <div>
                         <img style={{height:48,width:134,marginTop:10,marginLeft:75}} alt="" src={aurag} />
                     </div>
                     <div>
                         <ul className="nav_ul">
                             <li>Products</li>
                             <li>Our Story</li>
                             <li>Reviews</li>
                             <li>Virtual Mirror</li>
                         </ul>
                     </div>
                     <div>
                        <div>
                            <img style={{height:21,width:20,marginRight:80,marginLeft:-5,marginTop:5}}src={two} alt="" />
                        </div>
                        <div style={{marginTop:-15}}>
                            <img style={{height:24,width:24,marginRight:120}}src={one} alt=""  />
                        </div>
                     </div>
                 </div>
                 <div className="header_nav_two">
                      <p className="header_title">Oral care is self care</p>
                      <button className="all_button">Find your glow</button>
                 </div>
            </div>
        </div>
    )
}