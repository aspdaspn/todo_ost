import './App.css'

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
              <input type="checkbox" className="show-checkbox" />
              <label>Alle anzeigen</label>
            </div>
            <div className="flex-vertical task-list">
              <div className="task-entry">
                <label className="prio-header">
                  <span className="psort">Priorität&nbsp; </span>
                </label>
                <label className="description-header">
                  <span className="tsort">Beschreibung </span>
                </label>
              </div>
              <div className="task-entry">
                <input type="checkbox" name="done" className="done-checkbox" />
                <label className="bolt" /*name="prio-1"*/>🗲</label>
                <label className="bolt" /*name="prio-2"*/>🗲</label>
                <label className="bolt" /*name="prio-3"*/>🗲</label>
                <label className="task-description"> Wohnung aufräumen </label>
                <button type="submit" className="button delete" name="delete">
                  Löschen
                </button>
              </div>
              <div className="task-entry">
                <input type="checkbox" name="done" className="done-checkbox" />
                <label className="bolt" /*name="prio-1"*/>🗲</label>
                <label className="bolt" /*name="prio-2"*/>🗲</label>
                <label className="bolt" /*name="prio-3"*/>🗲</label>
                <label className="task-description"> Katze füttern </label>
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
