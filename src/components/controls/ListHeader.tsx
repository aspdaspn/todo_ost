

export const ListHeader = () => {

    return (
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
    )
}