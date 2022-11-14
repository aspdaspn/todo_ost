import { createTodo, Todo } from "models/Todo"
import { Fragment, useState } from "react"

interface Props {
    addItem: (item: Todo) => void
    showAll: (show: boolean) => void
    filterItem: (filter: string) => void
}

export const Input = (props: Props) => {
    
    const [text, setText] = useState('')

    function addButtonClicked () {
        if(text)
        {
            props.addItem(createTodo(text))
            props.filterItem('')
            setText('')
        }
        else
        {
            alert("Bitte zuerst eine Aufgabe erfassen!")
        }
    }

    const handleKeyDown = (event: { key: string }) => {
        if (event.key === 'Enter') {
            addButtonClicked();
        }
    };

    return (    
        <Fragment >
            <div className="flex-horizontal">
                <input
                    type="text"
                    className="input"
                    placeholder="Aufgabe..."
                    id="txt-add"
                    value={text}
                    onChange={e => {
                        setText(e.target.value)
                        props.filterItem(e.target.value) }
                    }
                    onKeyDown={handleKeyDown}
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
                    onChange={e => props.showAll(e.target.checked)}
                />
                <label>Alle anzeigen</label>
            </div>
        </Fragment>
    )
}