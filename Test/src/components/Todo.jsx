import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  const deleteTask = (i) => {
    const updatedList = list.filter((_, index) => index !== i);
    setList(updatedList);
  };

  return (
    <div style={{
        margin:'0%',
      backgroundColor: '#34495e',
      width: '100%',
      height: '100vh',
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'white'
    }}>
      
      <h2>ToDo</h2>

      <div>
        <input 
          type="text" 
          value={task} 
          style={{
            borderRadius: "50px",
            padding: "5px 10px",
            marginRight: "10px"
          }}
          onChange={(e) => setTask(e.target.value)} 
        />
        <button onClick={addTask} style={{ padding: "5px 10px" }}>+</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {list.map((item, index) => (
          <div key={index} style={{ margin: "5px" }}>
            {item}
            <button 
              onClick={() => deleteTask(index)} 
              style={{ marginLeft: "10px" }}
            >X</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Todo;
