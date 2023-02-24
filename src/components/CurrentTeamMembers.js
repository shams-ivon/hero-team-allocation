import React from "react";
import { useState } from "react";

const CurrentTeamMembers = ({heroes}) => {


  const teamAMembers = heroes.filter(item => {
    return item.teamName === "TeamA";
  });
  const teamBMembers = heroes.filter(item => {
    return item.teamName === "TeamB";
  });
  const teamCMembers = heroes.filter(item => {
    return item.teamName === "TeamC";
  });
  const teamDMembers = heroes.filter(item => {
    return item.teamName === "TeamD";
  });

  const renderTeamA = teamAMembers.map(item => {
    return <h3>{item.heroName}</h3>;
  });
  const renderTeamB = teamBMembers.map(item => {
    return <h3>{item.heroName}</h3>;
  });
  const renderTeamC = teamCMembers.map(item => {
    return <h3>{item.heroName}</h3>;
  });
  const renderTeamD = teamDMembers.map(item => {
    return <h3>{item.heroName}</h3>;
  });

  const [heroTeam, setHeroTeam] = useState(
    [
      {
        teamName: "TeamA",
        showMembers: false
      },
      {
        teamName: "TeamB",
        showMembers: false
      },
      {
        teamName: "TeamC",
        showMembers: false
      },
      {
        teamName: "TeamD",
        showMembers: false
      }
    ]
  );

  function handleTeamClick(currentTeam) {
    const newHeroTeam = heroTeam.map(item => {
      return {
        ...item,
        showMembers: item.teamName === currentTeam? !item.showMembers: item.showMembers
      }
    });
    setHeroTeam(newHeroTeam);
  }

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <div onClick={() => handleTeamClick("TeamA")}>
            <h1>Team Members of TeamA</h1>
          </div>
          <hr/>
          {heroTeam[0].showMembers && renderTeamA}
          <hr/>
          <hr/>
          <div onClick={() => handleTeamClick("TeamB")}>
            <h1>Team Members of TeamB</h1>
          </div>
          <hr/>
          {heroTeam[1].showMembers && renderTeamB}
          <hr/>
          <hr/>
          <div onClick={() => handleTeamClick("TeamC")}>
            <h1>Team Members of TeamC</h1>
          </div>
          <hr/>
          {heroTeam[2].showMembers && renderTeamC}
          <hr/>
          <hr/>
          <div onClick={() => handleTeamClick("TeamD")}>
            <h1>Team Members of TeamD</h1>
          </div>
          <hr/>
          {heroTeam[3].showMembers && renderTeamD}
          <hr/>
        </div>
      </div>
    </main>
  );
}

export default CurrentTeamMembers;