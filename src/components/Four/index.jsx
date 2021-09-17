import React from 'react'
import "./Four.css"
import four from "../Images/four.png"

export const Four = () => {
    return (
        <div className="container four">
            <img style={{width:33,height:44}} alt="" src={four} />
            <h1 className="four_words">"You can now multitask while you drive (or sneak 
                away to the bathroom in between meetings) with the 
                Auraglow whitening pen. All it takes is 60 seconds to 
                start seeing a brighter smile."</h1>
        </div>
    )
}