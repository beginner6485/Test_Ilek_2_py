import React from "react"
import Mountains from "../Assets/mountains.png"
import '../Styles/tendance.css'

function Tendance () {
    return (
        <div>
            <div className="Banner">
                <img src={Mountains} alt="Terres de vignes" className="Landscape"></img>
                <div className="Title">Les favoris du moment</div>

            </div>
        </div>
    )
}

export default Tendance