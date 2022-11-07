import { SortingMode } from  "models/SortingMode"

interface Props {
    setSortingMode: (mode: SortingMode) => void
    currentSortingMode: SortingMode
}

export const ListHeader = (props: Props) => {
    let prioArrow = null
    let descriptionArrow = null

    switch(props.currentSortingMode) {
        case SortingMode.DescriptionAscending:
            prioArrow = null
            descriptionArrow = <i className="fa-solid fa-arrow-up"></i>
            props.setSortingMode(props.currentSortingMode)
            break
        case SortingMode.DescriptionDescending:
            prioArrow = null
            descriptionArrow = <i className="fa-solid fa-arrow-down"></i>
            break
        case SortingMode.ImportanceAscending:
            prioArrow = <i className="fa-solid fa-arrow-up"></i>
            descriptionArrow = null
            break
        case SortingMode.ImportanceDescending:
            prioArrow = <i className="fa-solid fa-arrow-down"></i>
            descriptionArrow = null
            break
    } 

    return (
        <div className="task-entry">
            <label className="prio-header">
                <span className="sort" data-sort="none" onClick={() => props.setSortingMode(props.currentSortingMode === SortingMode.ImportanceDescending ? SortingMode.ImportanceAscending : SortingMode.ImportanceDescending)}>
                    Priorität {prioArrow}
                </span>
            </label>
            <label className="description-header">
                <span className="sort" data-sort="none" onClick={() => props.setSortingMode(props.currentSortingMode === SortingMode.DescriptionDescending ? SortingMode.DescriptionAscending : SortingMode.DescriptionDescending)}>
                    Beschreibung {descriptionArrow}
                </span>
            </label>
        </div>
    )
}