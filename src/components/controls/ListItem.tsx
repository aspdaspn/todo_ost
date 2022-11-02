import { Importance } from "models/Importance";
import { Todo } from "models/Todo";

interface Props {
    todo: Todo,
    removeItem: (id: string) => void
}


export const ListItem = (props: Props) => {   
    return (
        <div className="task-entry">
            <input type="checkbox" name="done" className="done-checkbox" />
            <label className="bolt" /*name="prio-1"*/>
                <i className="fa-solid fa-bolt"></i>
            </label>
            <label className="bolt" /*name="prio-2"*/>
                <i className="fa-solid fa-bolt"></i>
            </label>
            <label className="bolt" /*name="prio-3"*/>
                <i className="fa-solid fa-bolt"></i>
            </label>
            <label className="task-description">{props.todo.text}</label>
            <button type="submit" className="button delete" name="delete" onClick={() => props.removeItem(props.todo.id)}>
                Löschen
            </button>
        </div>
    )
}