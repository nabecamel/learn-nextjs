'use client';

import { useState } from "react";

type Todo = {
	id: number;
	text: string;
};

export default function TodoPage() {
	const [todos, setTodos] = useState<Todo[]>([])
	const [input, setInput] = useState('');
	
	const addTodo = () => {
		if (!input.trim()) return;
		setTodos([...todos, {id: Date.now(), text: input }]);
		setInput('');
	};
	
	const deleteTodo = (id: number) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<main style={{ padding: '2rem' }}>
			<h1>My Todo App</h1>
			<input 
				value={ input } 
				onChange={ e => setInput(e.target.value)} 
				placeholder="Add new task"
			/>
			<button onClick={ addTodo }>Add</button>
			<ul>
				{todos.map(todo => (
					<li key={ todo.id }>
						{todo.text}
						<button onClick={ () => deleteTodo(todo.id)} >Delete</button>
					</li>
				))}
			</ul>
		</main>
	);
}