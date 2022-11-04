import { SortingMode } from "models/SortingMode"

interface Props {
    setSortingMode: (mode: SortingMode) => void
    currentSortingMode: SortingMode
}

export const ListHeader = (props: Props) => {

    const htmlCodes = ['', '<i class="fa-solid fa-arrow-up"></i>', '<i class="fa-solid fa-arrow-down"></i>'];

    let prioArrow = null
    let descriptionArrow = null

    switch(props.currentSortingMode) {
        case SortingMode.DescriptionAscending:
            prioArrow = null
            descriptionArrow = <i className="fa-solid fa-arrow-up"></i>
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
                <span className="sort" data-sort="none" onClick={() => props.setSortingMode(SortingMode.ImportanceDescending)}>
                    Priorität {prioArrow}
                </span>
            </label>
            <label className="description-header">
                <span className="sort" data-sort="none">
                    Beschreibung {descriptionArrow}
                </span>
            </label>
        </div>
    )
}