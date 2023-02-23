import React from "react";
import { useState } from "react";

const CurrentTeamMembers = (props) => {

  const [heroTeam, setHeroTeam] = useState();

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Members</h1>
        </div>
      </div>
    </main>
  );
}

export default CurrentTeamMembers;