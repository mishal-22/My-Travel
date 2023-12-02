import React from "react";
import pin from '../assets/pin.png'
export default function Header(props){
    return(
        <div>
            <div className="card-item">
                <img src={`./images/${props.item.coverImg}` } className="coverImg" />
                <div className="tag">
                   <div className="sub-tag">
                   <img src={pin} />
                    <p>{props.item.country}</p>
                    <a href="#">View on Google Maps</a>
                   </div>
                <h2 className="title">{props.item.title}</h2>
                <p className="duration">{props.item.duration}</p>
                <p className="desc">{props.item.desc}</p>
                 
                </div>
               
               
            </div>
        </div>
    )
}