import React, { useState } from "react";

function Todoform({addTodo}) {
  const [val, SetVal] = useState("");
  const handleChange = (e) => {
    SetVal(e.target.value);
  };
  const handleEvent = (e) => {
    e.preventDefault();
    addTodo(val);
    SetVal("");
  };

  return (
    <div className="todo-form">
      <form type="submit" onSubmit={handleEvent}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Add a Todo"
          value={val}
          required
        ></input>
        <input type="submit" value="Add" className="add"></input>
      </form>
    </div>
  );
}

export default Todoform;