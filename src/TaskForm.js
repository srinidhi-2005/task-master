import { useState } from "react";

export default function TaskForm({onAdd}) {
    const [task, setTask] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        onAdd(task);
        setTask('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <button>+</button>
            <input type="text" 
                value={task} 
                onChange={e => setTask(e.target.value)}
                placeholder="next task"/>
        </form>
    );
}