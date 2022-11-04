import { ListHeader } from 'components/controls/ListHeader'
import { ListItem } from 'components/controls/ListItem'
import { SortingMode } from 'models/SortingMode'
import { createTodo, Todo } from 'models/Todo'
import { useState } from 'react'
import { Input } from '../controls/Input'



const defaultList: Todo[] = [
    createTodo("Bohnung aufräumen"),
    createTodo("Aatze füttern"),
]

export const Content = () => {

    const [items, setItems] = useState(defaultList)
    const [showAll, setShowAll] = useState(false)
    const [sortingMode, setSortingMode] = useState(SortingMode.DescriptionDescending)

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

    items.sort((a,b) => {
        if(a.text.toLowerCase() < b.text.toLowerCase()) return -1;
        if(a.text.toLowerCase() > b.text.toLowerCase()) return 1;
        return 0;
    })

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
                <ListHeader setSortingMode={setSortingMode} currentSortingMode={sortingMode}/>
                {itemList}
            </div>
        </div>
    )
}