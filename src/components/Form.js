import React from 'react'

// we set the state we need for our applicaiton
export default function Form({setInputText,setTodos,todos,inputText,setStatus}) {

// capture the values of ourinput text
const inputTextHandler = (e) =>{
    setInputText(e.target.value)
}
//the spread operator will show the rest of the todos in the array and properties we use in the future
const submitTodoHandler = (e) =>{
    e.preventDefault()
    setTodos([...todos,{
        text:inputText,
        completed:false,
        id:Math.random()*1000
    }])
    setInputText('')
}
// we update the status of the todo from completed or uncompleted
const statusHandler = (e) =>{
setStatus(e.target.value)
}

    return (    
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange = {statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        
    )
}
