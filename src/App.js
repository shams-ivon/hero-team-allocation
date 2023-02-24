import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Nav from "./components/Nav";
import PageNotFound from "./components/PageNotFound";
import CurrentTeamMembers from "./components/CurrentTeamMembers";
import "./App.css";
import { useState, useEffect } from "react";
import heroData from "./heroData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  const [team, setTeam] = useState();
  const [heroes, setHeroes] = useState(JSON.parse(localStorage.getItem("heroesList")) || heroData);

  const renderHeroData = heroes.map(item => {
    return (
      <Hero 
        id={item.id}
        heroName={item.heroName}
        power={item.power}
        teamName={item.teamName}
        clickEvent={handleCardClick}
        currentTeam={team}
      />
    )
  });

  function handleTeamChange(event) {
    setTeam(event.target.value);
  }

  function handleCardClick(event) {

    console.log(team);

    const newHeroList = heroes.map(item => {
      
      let changedItem = item;

      if(item.id === parseInt(event.currentTarget.id)){
        if(item.teamName === team){
          changedItem = {
            ...item,
            teamName: ""
          }
        }
        else{
          changedItem = {
            ...item,
            teamName: team
          }
        }
      }
      return changedItem;
    });

    setHeroes(newHeroList);
  }

  useEffect(() => {
    localStorage.setItem("heroesList", JSON.stringify(heroes));
  }, [heroes]);

  return (
    <BrowserRouter>
      <Nav />
      <Header 
        teamName={team}
        teamMemberCount={
          heroes.filter(item => {
            return item.teamName === team;
          }).length
        }
      />
      <Routes>
        <Route 
          path="/"
          element={
            <Main 
              handleTeamChange={handleTeamChange}
              renderHeroData={renderHeroData}
            />
          }
        />
        <Route 
          path="/CurrentTeamMembers"
          element={
            <CurrentTeamMembers 
              heroes={heroes}
            />
          }
        />
        <Route 
          path="*"
          element={
            <PageNotFound />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
