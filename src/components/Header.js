import React from "react";

const Header = (props) => {
  
  return (
    <header className="containter">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Hero Allocation</h1>
          <h3>{props.teamName} has {props.teamMemberCount} members</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;