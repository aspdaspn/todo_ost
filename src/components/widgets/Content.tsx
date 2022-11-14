import { ListHeader } from 'components/controls/ListHeader'
import { ListItem } from 'components/controls/ListItem'
import { SortingMode } from 'models/SortingMode'
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
    const [filter, setFilter] = useState('')
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
        switch(sortingMode) {
            case SortingMode.ImportanceAscending:
                if(a.importance > b.importance) return -1;
                if(a.importance < b.importance) return 1;
                return 0;
            case SortingMode.ImportanceDescending:
                if(a.importance < b.importance) return -1;
                if(a.importance > b.importance) return 1;
                return 0;
            case SortingMode.DescriptionAscending:
                if(a.text.toLowerCase() > b.text.toLowerCase()) return -1;
                if(a.text.toLowerCase() < b.text.toLowerCase()) return 1;
                return 0;
            default:
            case SortingMode.DescriptionDescending:
                if(a.text.toLowerCase() < b.text.toLowerCase()) return -1;
                if(a.text.toLowerCase() > b.text.toLowerCase()) return 1;
                return 0;
            
        }

    })

    const itemListFiltered = items.filter(item => {
        if (filter) {
            return item.text.includes(filter)
        }
        return true
    })

    const itemList = itemListFiltered.map(item => {
        const output = <ListItem key={item.id} todo={item} removeItem={removeItem} updateItem={updateItem}/>
        if(showAll) {
            return output
        }
        else {
            return item.done ? null : output
        }
    })
    
    return (
        <div className="content">
            <Input addItem={addItem} showAll={setShowAll} filterItem={setFilter}/>
            <div className="flex-vertical task-list">
                <ListHeader setSortingMode={setSortingMode} currentSortingMode={sortingMode}/>
                {itemList}
            </div>
            {filter && !itemListFiltered.length && (<span>Kein Todos gefunden.</span>)}
        </div>
    )
}