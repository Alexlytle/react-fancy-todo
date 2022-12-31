
import React,{useState, useEffect} from 'react';
import './App.css';

import Form from "./components/Form";
import TodoList from "./components/TodoList";
// import Todo from "./components/Todo";

function App() {


const [inputText,setInputText] = useState("");
const [todos, setTodos] = useState([])
const [status, setStatus] = useState("all")
const [filterTodos, setFilterTodos] = useState([])


//this will run once
useEffect(() => {
  getLocalTodos()
}, [])

useEffect(() => {
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo=> todo.completed === true)) 
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo=> todo.completed === false)) 
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }
  // getLocalTodos()
  filterHandler()
  savedLocalTodos()
}, [todos,status])



const savedLocalTodos =()=>{
 
    localStorage.setItem('todos',JSON.stringify(todos))
  
}

const getLocalTodos =()=>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]))
  }else{
    let todoFromLocal = JSON.parse(localStorage.getItem('todos'))
    setTodos(todoFromLocal)
  }
}


  return (
    <div className="App">
        <header>
          Alex's todo list
        </header>
        <Form todos={todos} 
            inputText={inputText} 
            setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}
            
            />
        <TodoList setTodos={setTodos} todos={todos} filterTodos={filterTodos}/>
    </div>
  );
}

export default App;
