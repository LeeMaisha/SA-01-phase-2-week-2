import {useState} from "react"
function GoalForm(){
    const [forms, SetForms] = useState({
        targetAmount: "",
        name: "",
        category: "",
        deadline: ""
    });
    function Change(e) {
        SetForms({...forms,[e.target.name]:e.target.value})
    }
 function handleSubmit(e) {
        e.preventDefault();
        const newGoal = {
            ...forms,
            targetAmount: parseFloat(forms.targetAmount),
            savedAmount: 0,
            createdAt: new Date().toISOString().split('T')[0]
        };

        fetch("http://localhost:3000/goals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newGoal)
        })
        .then(res => res.json())
        .then(() => {
           
            fetch("http://localhost:3000/goals")
                .then(res => res.json())
                .then(data => setGoals(data));
        });


        SetForms({ name: "", targetAmount: "", category: "", deadline: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={forms.name} onChange={Change} placeholder="Name" required  style={{ padding: "20px", margintop: "30px"}}/> <br></br>
            <input name="targetAmount" value={forms.targetAmount} onChange={Change} placeholder="Amount" required style={{ padding: "20px"}} /> <br></br>
            <input name="category" value={forms.category} onChange={Change} placeholder="Category" required style={{ padding: "20px"}}/> <br></br>
            <input type="date" name="deadline" value={forms.deadline} onChange={Change} required style={{ padding: "20px"}}/> <br></br>
            <button type="submit" style={{color: "green", marginBottom: "20px", padding: "10px", cursor: "pointer"}}>Submit</button>
        </form>
    );
}


export default GoalForm;