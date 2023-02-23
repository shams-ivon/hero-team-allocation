import React from "react";

const Hero = (props) => {

  return (
    <div 
      id={props.id} 
      className={props.teamName === props.currentTeam? "card m-2 border-dark": "card m-2"}
      style={{cursor: "pointer"}}
      onClick={props.clickEvent}
    >
      <img 
        src={`images/${props.id}.webp`} 
        className="card-img-top" 
        alt={props.heroName}
      />
      <div className="card-body">
        <h5 className="card-title">
          Name: {props.heroName}
        </h5>
        <p className="card-text">
          <b>Power:</b> {props.power}
        </p>
      </div>
    </div>
  );
}

export default Hero;