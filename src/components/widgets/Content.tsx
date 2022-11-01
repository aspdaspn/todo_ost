import { ListHeader } from 'components/controls/ListHeader'
import { Input } from '../controls/Input'

export const Content = () => {
    return (
        <div className="content">
            <Input />
            <div className="flex-vertical task-list">
                <ListHeader />
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
                    <label className="task-description">Wohnung aufräumen</label>
                    <button type="submit" className="button delete" name="delete">
                        Löschen
                    </button>
                </div>
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
                    <label className="task-description">Katze füttern</label>
                    <button type="submit" className="button delete" name="delete">
                        Löschen
                    </button>
                </div>
            </div>
        </div>
    )
}