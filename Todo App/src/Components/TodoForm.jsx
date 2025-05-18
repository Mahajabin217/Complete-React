import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

const TodoForm = () => {
    const [text, setText] = useState("");
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <input
                type="text"
                placeholder="Enter your task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-grow border px-3 py-2 rounded"
            />
            <button
                type="submit"
                className="ml-2 px-4 py-2  rounded add-btn"
            >
                Add
            </button>
        </form>
    );
};

export default TodoForm;
