import './App.css'
import '../assets/css/solid.css'
import '../assets/css/fontawesome.css'

export const App = () => {
  return (
    <div>
      {
        <div>
          <header>
            <div className="app-header">Todo App</div>
          </header>
          <div className="content">
            <div className="flex-horizontal">
              <input
                type="text"
                className="input"
                placeholder="Aufgabe..."
                id="txt-add"
              />
              <button type="submit" className="button" id="btn-add">
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
            <div className="flex-vertical task-list">
              <div className="task-entry">
                <label className="prio-header">
                  <span className="sort" data-sort="none">
                    Priorität
                  </span>
                </label>
                <label className="description-header">
                  <span className="sort" data-sort="none">
                    Beschreibung
                  </span>
                </label>
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
        </div>
      }
    </div>
  )
}
