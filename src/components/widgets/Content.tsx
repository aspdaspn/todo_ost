import { ListHeader } from 'components/controls/ListHeader'
import { ListItem } from 'components/controls/ListItem'
import { Todo } from 'models/Todo'
import { Importance } from 'models/Importance'
import { Input } from '../controls/Input'

var list: Todo[] = [
    {        
        id: "test1",
        text: "Wohnung Aufräumen",
        done: false,
        importance: 0
    },
    {        
        id: "test2",
        text: "Katze fütter",
        done: false,
        importance: 0
    }
]

export const Content = () => {
    return (
        <div className="content">
            <Input />
            <div className="flex-vertical task-list">
                <ListHeader />
                <ListItem text={list[0].text} importance={list[0].importance} />
                <ListItem text={list[1].text} importance={list[1].importance} />
            </div>
        </div>
    )
}