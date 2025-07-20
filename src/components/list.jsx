import react from "react"

function List({ goals, onUpdateGoal, onDeleteGoal }) {
  if (goals.length === 0) {
    return (
      <p>No goals added yet Start planning</p>
    );
  }

  return (
    <div>
      <h2 style={{color:"green"}}>My goals</h2>
      {goals.map(goal => (
        <item key ={goal.id} goal={goal} setGoal={setGoals}/>
        
      ))}
    </div>
  );
}

export default List;