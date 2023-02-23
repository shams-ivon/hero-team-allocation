import React from "react";

const Main = (props) => {
  return (
    <main className="container">

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select 
            className="form-select form-select-lg"
            onChange={props.handleTeamChange}
          >
            <option value="">--choose--</option>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-10">
          <div className="card-collection">
            {props.renderHeroData}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;