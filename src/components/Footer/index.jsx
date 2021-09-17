import React from "react"
import "./Footer.css"
import footer from "../Images/footer.png"
import footer_two from "../Images/footer-two.png"
import footer_aurag from "../Images/footer-aurag.png"

export const Footer = () => {
    return (
        <div className="container footer">
            <div className="footer_block">
               <div>
                   <img alt="" style={{width:134,height:31,marginTop:15}} src={footer_aurag} />
               </div>
               <div>
                   <p>Products</p>
                   <ul>
                       <li>Complete LED Whitening Kit</li>
                       <li>Custom Whitening Kit</li>
                       <li>Whitening Strips</li>
                       <li>Whitening Pen</li>
                       <li>Daily Toothpaste</li>
                       <li>Whitening Gel</li>
                       <li>Extra Strength Whitening Gel</li>
                       <li>LED Whitening Light</li>
                   </ul>
               </div>
               <div>
                   <p>Company</p>
                   <ul>
                       <li>Blog</li>
                       <li>Reviews</li>
                       <li>Our Story</li>
                       <li>Guarantee</li>
                       <li>Virtual Mirror</li>
                       <li>Clinical Study</li>
                       <li>Where to Buy</li>
                   </ul>
               </div>
               <div>
                   <p>Support</p>
                   <ul>
                       <li>FAQs</li>
                       <li>Contact</li>
                       <li>Privacy Policy</li>
                       <li>Terms of Service</li>
                       <li>Shipping & Returns</li>
                   </ul>
               </div>
               <div className="block_four">
                   <h4>Sign up for the latest in oral wellness</h4>
                   <hr/>
                   <div style={{textAlign:'start'}}><button className="footer_btn">Subscribe</button></div>
                   <div style={{textAlign:'start'}}>
                       <img alt="" src={footer} />
                       <img alt="" src={footer_two} />
                   </div>
               </div>
            </div>
            <p style={{textAlign:'start',marginLeft:50}}>© Auraglow 2021</p>
        </div>
    )
}