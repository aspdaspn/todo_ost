import React from "react";
import { Importance } from "../../models/Importance";
import { Todo } from "../../models/Todo";


export default function ToDoItem(props: Todo) {
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
      <label className="task-description">
        {props.text}
      </label>
      <button type="submit" className="button delete" name="delete">
        Löschen
      </button>
    </div>
  );
}