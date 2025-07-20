import Delete from "./delete"

function Item({goal, setGoals }) {
  const {
    name,
    targetAmount,
    savedAmount,
    category,
    deadline
  } = goal;
  const progress = Math.round((savedAmount / targetAmount) * 100);

  
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const msInDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((deadlineDate - now) / msInDay);
  const isOverdue = daysLeft < 0 && savedAmount < targetAmount;
  const isWarning = daysLeft <= 30 && daysLeft >= 0 && savedAmount < targetAmount;

  return (
    <div
      style={{
        border: "3px solid brown",
        margin: '10px',
        padding: '16px',
        borderRadius: '10px',
        background: isOverdue
          ? "grey"
          : isWarning
          ? "grey"
          : 'rgba(255,255,255,0.08)',
        color: "brown",
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}
    >
      <h3 style={{color:'#ffd700'}}>{name}</h3>
      <p style={{color:"black"}}>Target: <span style={{color:"blue"}}>${targetAmount}</span></p>
      <p style={{color:"black"}}>Saved: <span style={{color:"blue"}}>${savedAmount}</span></p>
      <p style={{color:"black"}}>Category: <span style={{color:"blue"}}>{category}</span></p>
      <p style={{color:"black"}}>Deadline: <span style={{color:"blue"}}>{deadline}</span> {isOverdue && <span style={{color:'red'}}> (Overdue)</span>} {isWarning && <span style={{color:'orange'}}> (Less than 30 days left!)</span>}</p>
      <p style={{color:"black"}}>Progress: {progress}%</p>
      <progress value={savedAmount} max={targetAmount} style={{width:'100%'}}></progress>
      <p style={{color:"black"}}>Remaining: <span style={{color:"green"}}>${targetAmount - savedAmount}</span></p>
      <Delete style={{color:"red"}}  id={goal.id} setGoals={setGoals}/>
    </div>
  );
}

export default Item;