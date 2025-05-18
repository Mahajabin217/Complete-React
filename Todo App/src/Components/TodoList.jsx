import { useTodo } from "../context/TodoContext";

const TodoList = () => {
    const { todos, deleteTodo } = useTodo();

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex justify-between items-center border-b pb-2"
                >
                    <span>{todo.text}</span>
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-sm  px-2 py-1 rounded delete-btn"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
