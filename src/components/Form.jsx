import React, {useState} from 'react';
import Todo from '../components/Todo';
import { click } from '@testing-library/user-event/dist/click';

const Form = () => {
    const [todo, setTodo] = useState({})
        const [todos, setTodos] = useState([
            {todo: 'todo 1'},
            {todo: 'todo 2'},
            {todo: 'todo 3'}
        ])
        const handleChance = e => setTodo({[e.target.name]: e.target.value})
        const handleClick = e => {
            if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
                alert('el campo no puede estar vaio')
                return
            }
            setTodos([...todos, todo])
        }
        const deleteTodo = indice => {
            const newTodos = [...todos]
            newTodos.splice(indice, 1)
            setTodos(newTodos)
        }
    
    return (
        <>
        <form onSubmit={e=> e.preventDefault()}>
            <label> Agregar tarea</label><br />
            <input type="text" name="todo" onChange={handleChance}/>
            <button onClick={handleClick}>agregar</button>
            </form>
        {
           todos.map((value, index) => (<Todo todo={value.todo} />))
        }
        </>
    )
    }
export default Form
