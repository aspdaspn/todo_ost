export const App = () => {
  return <div>{
    <div className='todoapp'>
      <header>
        <div className='app-header'>
          Todo App
        </div>
      </header>

      <div className='content'>
        <form>
          <div className='flex-horizontal'>
            <input type='text' className='input' placeholder='Aufgabe...' id='txt-add' />
            <button type='submit' className='button' id='btn-add'>Hinzufügen</button>
          </div>
          <div className='flex-horizontal flex-left'>
            <input type='checkbox' name='show-checkbox' id='show-all' />
            <label htmlFor='show-all'>Alle anzeigen</label>
          </div>
        </form>
        
        <div className='flex-vertical task-list'>
          <div className='task-entry'>
            <div className='prio-header'> Priorität </div>
            <div className='description-header'> Beschreibung </div>
            <input type='checkbox' name='done' className='done-checkbox' />
            <div className='bolt prio-1'>🗲</div>
            <div className='bolt prio-2'>🗲</div>
            <div className='bolt prio-3'>🗲</div>
            <div className='task-deskription'> Wohnung aufräumen </div>
            <button type='submit' className='button delete' name='delete'>
              Löschen
            </button>
          </div>
        </div>
      </div>
    </div>
  }</div>
}
