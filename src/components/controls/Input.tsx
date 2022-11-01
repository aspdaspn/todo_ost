import { createTodo, Todo } from "models/Todo"
import { Fragment, useState } from "react"

interface Props {
    addItem: (item: Todo) => void
}

export const Input = ({addItem}: Props) => {
    
    const [text, setText] = useState('')

    function addButtonClicked () {
        if(text)
        {
            addItem(createTodo(text))
            setText('')
        }
        else
        {
            alert("Bitte zuerst eine Aufgabe erfassen!")
        }
    }

    return (    
        <Fragment >
            <div className="flex-horizontal">
                <input
                    type="text"
                    className="input"
                    placeholder="Aufgabe..."
                    id="txt-add"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
        
                <button type="submit" className="button" id="btn-add" onClick={addButtonClicked}>
                    Hinzuzfügen
                </button>
      
            </div>
            <div className="flex-horizontal flex-left">
                <input
                    type="checkbox"
                    className="show-checkbox"
                    name="show-all"
                    checked
                />
                <label>Alle anzeigen</label>
            </div>
        </Fragment>
    )
}