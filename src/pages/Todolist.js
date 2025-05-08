import React from 'react';
import Container from '../components/Container';

function TodolistPage() {
    const [todoList, setTodoList] = React.useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [inputValue, setInputValue] = React.useState('');

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const newTodo = {
                todo: inputValue,
                id: Date.now().toString()
            };
            setTodoList([...todoList, newTodo]);
            setInputValue('');
        }
    };

    const handleDelete = (id) => {
        const updatedTodoList = todoList.filter(item => item.id !== id);
        setTodoList(updatedTodoList);
    }

    return (
        <Container>
            <div>
                <h1>To Do List</h1>
            </div>

            <form>
                <input 
                    type="text"
                    label="Todolist"
                    placeholder="Enter your todo item"
                    className="form-input"
                    style={{
                        width: '300px', 
                        padding: '10px', 
                        marginRight: '10px', 
                        border: '1px solid #ccc', 
                        borderRadius: '5px', 
                        color: '#333',
                    }}
                    required
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    style={{
                        backgroundColor: '#007bff',
                        border: 'none',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        width: '300px',
                        display: 'block',
                        marginTop: '10px',
                        '&:hover': {backgroundColor: '#0056b3'}
                    }}
                >
                    Add
                </button>
            </form>

            <div>
                <h2>My List:</h2>
                {todoList.length === 0 ? (
                    <p style={{fontStyle: 'italic', color: '#666'}}>Empty TodoList</p>
                ) : (
                    <ul style={{
                            display: 'block',
                            listStyle: 'none',
                            padding: '0',
                            marginTop: '10px',
                            width: '300px',
                        }}
                    >
                        {todoList.map((item) => (
                            <li key={item.id} style={{
                                marginBottom: '5px',
                                padding: '5px',
                                borderRadius: '5px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                {item.todo}
                                <button 
                                    onClick={() => handleDelete(item.id)}
                                    className="btn btn-danger"
                                    style={{
                                        marginLeft: '10px', 
                                        backgroundColor: 'red', 
                                        border: 'none', 
                                        color: 'white', 
                                        padding: '5px 10px', 
                                        borderRadius: '5px', 
                                        cursor: 'pointer', 
                                        transition: 'background-color 0.3s ease', 
                                        '&:hover': {backgroundColor: '#ff0000'}
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Container>
    );
}

export default TodolistPage;