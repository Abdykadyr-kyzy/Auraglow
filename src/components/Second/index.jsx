import React from "react"
import "./Second.css"
import second_one from "../Images/second-one.png"
import second_two from "../Images/second-two.png"
import second_three from "../Images/second-three.png"
import second_fore from "../Images/second-fore.png"

export const Second = () => {
    return (
        <div className="container second">
            <div>
                <h1>Our promises to you</h1>
            </div>
            <div className="second_blocks">
                <div className="second_block" >
                    <img alt="" src={second_one} />
                    <h2>Whiter Smile</h2>
                    ​​<p>​​Our clinically proven teeth whitening formula whitens up to 10 shades in just 7 days.</p>
                </div>
                <div className="second_block" >
                    <img alt="" src={second_two} />
                    <h2>Sensitive Whitening</h2>
                    ​​<p>​​A bright smile is one that stays feeling healthy and happy. So our whitening products do just that.</p>
                </div>
                <div className="second_block" >
                    <img alt="" src={second_three} />
                    <h2>Enamel Safe</h2>
                    ​​<p>​​The whitening ingredients we use have two rules. Stains must go. Enamel must stay.</p>
                </div>
                <div className="second_block" >
                    <img alt="" src={second_fore} />
                    <h2>Made in America</h2>
                    ​​<p>​​​​The whitening ingredients we use have two rules. Stains must go. Enamel must stay.</p>
                </div>
            </div>
        </div>
    )
}