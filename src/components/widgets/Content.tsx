import { ListHeader } from 'components/controls/ListHeader'
import { ListItem } from 'components/controls/ListItem'
import { createTodo, Todo } from 'models/Todo'
import { useState } from 'react'
import { Input } from '../controls/Input'



const defaultList: Todo[] = [
    createTodo("Wohnung aufräumen"),
    createTodo("Katze füttern"),
]

export const Content = () => {

    const [items, setItems] = useState(defaultList)

    const addItem = (item: Todo) => {
        const newItems = [...items, item]
        setItems(newItems)
    }

    const removeItem = (id: string) => {
        const newItems = items.filter(i => i.id !== id)
        setItems(newItems)
    }

    const updateItem = (id: string, isDone: boolean) => {
        const newItems = items.map(i => {
            if(i.id === id) {
                return {...i, done: isDone }
            }
            return i
        })
        setItems(newItems)
    }

    const itemList = items.map(item => <ListItem todo={item} removeItem={removeItem} updateItem={updateItem}/>)

    return (
        <div className="content">
            <Input addItem={addItem}/>
            <div className="flex-vertical task-list">
                <ListHeader />
                {itemList}
            </div>
        </div>
    )
}