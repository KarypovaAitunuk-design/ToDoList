import React, { useState } from "react";
import styles from "../styles/TodoList.module.css";
import { BsArrowDownRightSquareFill } from "react-icons/bs"

const TodoList = () => {
  const [text, setText] = useState("");

 const [todos, setTodos] = useState([]);


  const handleSubmit = (e) => {

    e.preventDefault();

     setTodos([...todos, text]);

    console.log(todos);
    setText("");


  };


  return (


    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}>


        <h1>To Do List</h1>

        <div className={styles.inputGroup}>


          <input
            type="text"
            placeholder="enter text"
            className={styles.input}
            onChange={(event) => setText(event.target.value)}
            value={text}
          />

          <button className={styles.button} type="submit">
            Add
          </button>

          P
        </div>
      </form>




      <ul className= {styles.list}>
        {todos.map((item, index) => (
          <li className={styles.todo} key={index}>{item}</li>
        ))}
      </ul>




    </div>
  );
};

export default TodoList;
