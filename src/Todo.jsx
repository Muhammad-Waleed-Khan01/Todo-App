import { useState } from 'react'

function Todo() {
    const [newTodo , setNewTodo] =useState('')
    const [todos , setTodos] = useState([])

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(newTodo){
            setTodos([...todos, {text:newTodo, completed:false}])
            setNewTodo('')
        }
    }
    const handleDelete = (index) =>{
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed 
        setTodos(newTodos)
    }

  return (
    <div className="container mt-5">
        <h1 className="text-center mb-4">Todo App</h1>

        <form onSubmit={handleSubmit} className="card p-4 shadow">
            
            <div className="input-group mb-3">
                <input 
                   type="text"
                   className="form-control"
                   placeholder='Add new todo' 
                   value={newTodo} 
                   onChange={(e) => setNewTodo(e.target.value)}
                />
                <button className="btn btn-primary" type='submit'>Submit</button>
            </div>

            <ul className="list-group">
                {
                    todos.map((todo, index) =>(
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            
                            <span style = {{ textDecoration : todo.completed ? 'line-through' : 'none'}}>
                                {todo.text}
                            </span>

                            <button 
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>

                        </li>
                    ))
                }
            </ul>
            
        </form>
    </div>
  )
}

export default Todo