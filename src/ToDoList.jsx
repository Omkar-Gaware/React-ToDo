import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

export default function () {
    let [todos, settodos] = useState([{ task: "Sample", id: uuidv4(), isdone: false }]);
    let [newtodo, setnewtodo] = useState("");

    let addNewTask = () => {
        settodos([...todos, { task: newtodo, id: uuidv4(), isdone : false }])
        setnewtodo("");
    }

    let updatetodo = (event) => {
        setnewtodo(event.target.value);
    }
    let deletetodo = (id) => {
        // let copy = todos.filter((todoss)=> todos.id != id);
        // console.log(copy)
        settodos(todos.filter((todoss) => todoss.id != id))
    }
    let uppercaseAll = () => {
        settodos(todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            }
        }))
    }
    let markallDone = () => {
        settodos(todos.map((todo) => {
            return {
                ...todo,
                isdone:true
            }
        }))
    }
    let markasdone = (id) => {
        settodos(todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isdone : true
                }
            } else {
                return {
                    ...todo
                }
            }
        }))
    }

    let uppercase = (id) => {
        settodos(todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            } else {
                return {
                    ...todo
                }
            }
        }))
    }
    return <>
        <div>
            <h1>TO-DO List</h1>
            <input placeholder="Add a Task" onChange={updatetodo} value={newtodo} />
            <button onClick={addNewTask}>Add Task </button>
            <hr />
            <h2>TODOS</h2>
            <ul>
                {todos.map((tododd) => {
                    return <li key={tododd.id}>
                        <span style={tododd.isdone ? {textDecoration: "line-through"} : {}}>{tododd.task}
        
                        </span>
                        <button onClick={() => deletetodo(tododd.id)}> Delete</button>
                            <button onClick={() => markasdone(tododd.id)}> Mark as Done</button>
                            <button onClick={() => uppercase(tododd.id)}> Uppercase</button>

                    </li>
                })}
            </ul>
            <button onClick={uppercaseAll}>UpperCase All</button>&nbsp;
            <button onClick={markallDone}>Mark All Done</button>
        </div>
    </>
}