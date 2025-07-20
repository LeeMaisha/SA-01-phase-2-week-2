function Delete({id, setGoals}) {
    function HandleDelete() {
        fetch(`http://localhost:3000/goals/${id}`, { method: "DELETE" })
            .then(() => {
                fetch("http://localhost:3000/goals")
                    .then(res => res.json())
                    .then(data => setGoals(data));
            });
    }

    return <button onClick={HandleDelete} style={{backgroundcolor:"red"}} >Delete</button>;
    }

export default Delete;