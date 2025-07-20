import react from "react"

function List({ goals, onUpdateGoal, onDeleteGoal }) {
  if (goals.length === 0) {
    return (
      <p>No goals added yet Start planning</p>
    );
  }

  return (
    <div>
      {goals.map(goal => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onUpdateGoal={onUpdateGoal}
          onDeleteGoal={onDeleteGoal}
        />
      ))}
    </div>
  );
}

export default List;