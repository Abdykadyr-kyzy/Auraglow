import React from "react"
import "./Six.css"

export const Six = () => {
    return(
        <div className="container six">
            <div className="six_block_one">
                <div className="six_one"></div>
                <div className="six_word">
                    <div className="proven_one">
                        <h1>Proven to whiten</h1>
                        <p>If your dentist uses it, so do we. Every 
                            product we make puts professional-quality
                            ingredients in your hands, to help you be 
                            your own version of perfect.</p>
                        <button className="six_btn">See the proof</button>
                    </div>
                </div>
            </div>
            <div className="six_block_two">
                <div className="six_words">
                    <div className="proven_one">
                        <h1>30 days, risk-free</h1>
                        <p>Here’s the deal. Come smile with us for a 
                            month. See how you feel. If it’s anything
                             short of excellent, you get every penny
                              back. That’s our promise to you. And it’s
                               that simple.</p>
                        <button className="six_btn_two">Our guarantee</button>
                    </div>
                </div>
                <div className="six_two"></div>
            </div>
        </div>
    )
}