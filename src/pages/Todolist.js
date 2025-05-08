import React, { useState } from 'react';
import Container from '../components/Container';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodolistPage() {
    const [todos, setTodos] = useState([
        { id: uuidv4(), todo: 'Mau makan enak hari ini' },
        { id: uuidv4(), todo: 'Mau lari pagi hari ini' },
        { id: uuidv4(), todo: 'Mau pergi ke rumah temen' },
    ]);
    const [inputText, setInputText] = useState('');

    const handleAddTodo = () => {
        if (inputText.trim()) {
        setTodos([...todos, { id: uuidv4(), todo: inputText.trim() }]);
        setInputText('');
        console.log('Add Data')
        console.log(todos)
        }
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <Container>
        <div className="max-w-md mx-auto mt-8">
            <div className="mb-4">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Input todo.."
                className="mx-2 flex-1 p-2 border text-dark rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleAddTodo}
                disabled={!inputText.trim()}
                className="px-4 py-2 text-dark rounded disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
                Add
            </button>
            </div>
            <div className="mx-2">
                <p className="text-lg font-semibold mb-2"><b>My list:</b></p>
                
                {todos.length === 0 ? (
                <p>Empty Todolist</p>
                    ) : (
                    <ol className="list-decimal pl-5">
                        {todos.map((todo) => (
                            <li key={todo.id} className="flex justify-between items-center mb-2">
                            <span className='mt-2'>{todo.todo} </span>
                            <button
                                onClick={() => handleDeleteTodo(todo.id)}
                                className="btn btn-danger btn-sm text-white hover:text-red-700"
                            >
                                Delete
                            </button>
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
        </Container>
    );
}

export default TodolistPage;