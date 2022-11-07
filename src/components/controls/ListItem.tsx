import { Importance } from "models/Importance";
import { Todo } from "models/Todo";

interface Props {
    todo: Todo,
    removeItem: (id: string) => void
    updateItem: (item: Todo) => void
}

export const ListItem = (props: Props) => {   

    const setImportance = (importance: Importance) => {
        if(importance === props.todo.importance)
            props.todo.importance = 0
        else
            props.todo.importance = importance
        props.updateItem(props.todo)
    }

    const setDone = (isDone: boolean) => {
        props.todo.done = isDone
        props.updateItem(props.todo)
    }
    
    return (
        <div className="task-entry ">
            <input type="checkbox" name="done" className="done-checkbox" checked={props.todo.done} onChange={e => setDone(e.target.checked)}/>
            <label className={`bolt ${props.todo.importance >= 1 ? "bolt-active" : ""}`} onClick={() => setImportance(1)}>
                <i className="fa-solid fa-bolt"></i>
            </label>
            <label className={`bolt ${props.todo.importance >= 2 ? "bolt-active" : ""}`} onClick={() => setImportance(2)}>
                <i className="fa-solid fa-bolt"></i>
            </label>
            <label className={`bolt ${props.todo.importance === 3 ? "bolt-active" : ""}`} onClick={() => setImportance(3)}>
                <i className="fa-solid fa-bolt"></i>
            </label>
            <label className={`task-description ${props.todo.done ? "strikethrough" : ""}`}>{props.todo.text}</label>
            <button type="submit" className="button delete" name="delete" onClick={() => props.removeItem(props.todo.id)}>
                Löschen
            </button>
        </div>
    )
}