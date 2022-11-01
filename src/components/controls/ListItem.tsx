import { Importance } from "models/Importance";

interface Props {
    text: string,
    importance: Importance
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
            <label className="task-description">{props.text}</label>
            <button type="submit" className="button delete" name="delete">
                Löschen
            </button>
        </div>
    )
}