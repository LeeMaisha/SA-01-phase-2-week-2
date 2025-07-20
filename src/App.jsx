import React, { useState, useEffect } from "react";
import "./App.css";
import list from "./components/list"
import form from "./components/form"
import item from "./components/item"


//base API for the url
const url= "http://localhost:3000/goals" // Replace with your actual API endpoint

function App(){
    const [goals ,setGoals] = useState ([])
    const [loading,setLoading] = useState (true)
    
    useEffect(() =>{
        //code to run after rendering
        fetch(URL)
         .then(res => res.json())
         .then(data => setUsers(data))
         .catch(err => console.error());
    },[]);
    
    // Removed duplicate sendData declaration
    // Move variable declarations here
    const totalGoals = goals.length;

   const sendData = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Big goals</h1>
      <div>
        <form onSubmit={sendData}>
          <label htmlFor="">goals to achieve: </label>
          <input
            type="text"
          />
          <br />
          <label htmlFor="">Set goals: </label>
          <input
            type="text"
          />
          <br />
          <button type="submit">Add Goals</button>
        </form>
      </div>
      {goals.map(user => (
        <li key={user.id}>
          <div>
            <h4>{Set.goals}</h4>
            <span>{setGoals.goals}</span>
          </div>
        </li>
      ))}
    </>
  );
}

export default App;
