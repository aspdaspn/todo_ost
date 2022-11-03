import { Importance } from "models/Importance";
import { Todo } from "models/Todo";
import { useState } from "react";

interface Props {
    todo: Todo,
    removeItem: (id: string) => void
    updateItem: (id: string, isDone: boolean) => void
}

export const ListItem = (props: Props) => {   

    const [checked, setChecked] = useState(props.todo.done)

    function updateDone(isDone: boolean) {
        setChecked(isDone)
        props.updateItem(props.todo.id, isDone)
    }

    function remove() {
        setChecked(false) // fix to prevent that checkbox is checked for new ListItem at this position
        props.removeItem(props.todo.id)
    }

    return (
        <div className="task-entry ">
            <input type="checkbox" name="done" className="done-checkbox" checked={checked} onChange={e => updateDone(e.target.checked)}/>
            <label className="bolt" /*name="prio-1"*/>
                <i className="fa-solid fa-bolt"></i>
            </label>
            <label className="bolt" /*name="prio-2"*/>
                <i className="fa-solid fa-bolt"></i>
            </label>
            <label className="bolt" /*name="prio-3"*/>
                <i className="fa-solid fa-bolt"></i>
            </label>
            <label className={`task-description ${props.todo.done ? "strikethrough" : ""}`}>{props.todo.text}</label>
            <button type="submit" className="button delete" name="delete" onClick={remove}>
                Löschen
            </button>
        </div>
    )
}