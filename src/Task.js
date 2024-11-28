import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Task({name, done, onToggle, onDel, onRename}) {
    const [edit, setEdit] = useState(false);
    return (
        <div className={`task ${done ? 'done' : ''}`}>
            <Checkbox check={done} onClick={() => onToggle(!done)}/>
            {!edit && (
                <span onClick={() => setEdit(prev => !prev)}>{name}</span>
            )}
            {edit && (
                <form onSubmit={e => {e.preventDefault(); setEdit(false)}}>
                    <input type="text" 
                            value={name} 
                            onChange={e => onRename(e.target.value)}/>
                </form>
            )}
            <button id="del" onClick={onDel}>
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    );
}