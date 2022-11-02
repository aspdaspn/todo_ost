import { Importance } from "models/Importance";
import { Todo } from "models/Todo";
import { toUnicode } from "punycode";
import { useState } from "react";

interface Props {
    todo: Todo,
    removeItem: (id: string) => void
    updateItem: (id: string, isDone: boolean) => void
}

export const ListItem = (props: Props) => {   
    return (
        <div className="task-entry ">
            <input type="checkbox" name="done" className="done-checkbox" onChange={e => props.updateItem(props.todo.id, e.target.checked)}/>
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
            <button type="submit" className="button delete" name="delete" onClick={() => props.removeItem(props.todo.id)}>
                Löschen
            </button>
        </div>
    )
}