import { PropTypes } from 'react'
import '../../stylesheets/Menu.scss'
import { sortColors } from '../actions'
import SORT_C from '../sortConstants'

const SortMenu = (props, { store }) => {
    const { sort } = store.getState()

    return (
        <nav className="menu">
            <h1>Sort Colors</h1>
            {Object.keys(SORT_C).map((item, i) =>
                <a key={i}
                   className={(sort === item) ? "selected" : null}
                   onClick={e => {
                       e.preventDefault()
                       store.dispatch( sortColors(item) )
                   }}>{item}</a>
            )}
        </nav>
    )
}

SortMenu.contextTypes = {
    store: PropTypes.object.isRequired
}

export default SortMenu
