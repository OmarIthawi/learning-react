import { PropTypes } from 'react'
import '../../stylesheets/Menu.scss'
import SORT_C from '../sortConstants'

const SortMenu = ({ sort=SORT_C.date, onSelect=f=>f}) => {
    return (
        <nav className="menu">
            <h1>Sort Colors</h1>
            {Object.keys(SORT_C).map((item, i) =>
                <a key={i}
                   className={(sort === item) ? "selected" : null}
                   onClick={e => {
                       e.preventDefault()
                       onSelect(item)
                   }}>{item}</a>
            )}
        </nav>
    )
}

SortMenu.propTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
}

export default SortMenu
