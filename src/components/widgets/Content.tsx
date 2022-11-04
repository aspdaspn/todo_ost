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
    const [showAll, setShowAll] = useState(false)

    const addItem = (item: Todo) => {
        const newItems = [...items, item]
        setItems(newItems)
    }

    const removeItem = (id: string) => {
        const newItems = items.filter(i => i.id !== id)
        setItems(newItems)
    }

    const updateItem = (item: Todo) => {
        const newItems = items.map(i => {
            if(i.id === item.id) {
                return item
            }
            return i
        })
        setItems(newItems)
    }

    const itemList = items.map(item => {
        if(showAll) {
            return <ListItem todo={item} removeItem={removeItem} updateItem={updateItem}/>
        }
        else {
            return item.done ? null : <ListItem todo={item} removeItem={removeItem} updateItem={updateItem}/>
        }
    })

    return (
        <div className="content">
            <Input addItem={addItem} showAll={setShowAll}/>
            <div className="flex-vertical task-list">
                <ListHeader />
                {itemList}
            </div>
        </div>
    )
}