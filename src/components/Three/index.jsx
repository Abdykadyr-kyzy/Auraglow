import React from "react"
import "./Three.css"
import three_two from "../Images/three-two.png"

export const Three = () => {
    return (
        <div className="container three">
            <div style={{height:150}}>
                <p style={{color: "#225B93"}}>Our Products</p>
                <h1>Find the right products for your smile</h1>
            </div>
            <div className="three_block_one">
                <div className="three_block_foto">
                    <h1>Whitening</h1>
                    <button className="all_button">Shop whitening</button>
                </div>
                <div className="three_block_book">
                    <div className="pay">
                        <h1>Complete LED Whitening Kit</h1>
                        <p>$80</p>
                    </div>
                    <div className="img"></div>
                    <div>
                      <button className="three_button">Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className="three_block_one">
                <div className="three_block_books">
                    <div className="pay">
                        <h1>Whitening Gel</h1>
                        <p>$45</p>
                    </div>
                    <div className="img_two"></div>
                    <div>
                      <button  className="three_button">Add To Cart</button>
                    </div>
                </div>
                <div className="three_block_fotos">
                    <h1 className="three_title">Refills & <br/>Accessories</h1>
                    <button className="all_button">Shop whitening</button>
                </div>
            </div>
        </div>
    )
}