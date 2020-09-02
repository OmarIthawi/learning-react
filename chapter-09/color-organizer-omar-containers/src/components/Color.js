import { PropTypes, Component } from 'react'
import StarRating from './StarRating'
import '../../stylesheets/Color.scss'
import TimeAgo from './TimeAgo'
import FaTrash from 'react-icons/lib/fa/trash-o'
import { rateColor, removeColor } from '../actions'

class Color extends Component {
    render() {
        const { id, title, color, rating, date } = this.props
        const { store } = this.context

        return (
            <section className="color">
                <h1>{title}</h1>
                <button onClick={() => store.dispatch( removeColor(id) )}>
                    <FaTrash />
                </button>
                <div className="color"
                    style={{ backgroundColor: color }}>
                </div>
                <TimeAgo timestamp={date} />
                <div>
                    <StarRating starsSelected={rating} 
                        onRate={(_rating) => store.dispatch( rateColor(id, _rating) )} />
                </div>
            </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    id: PropTypes.string.idRequired,
    timestamp: PropTypes.string.isRequired
}

Color.defaultProps = {
    rating: 0
}

Color.contextTypes = {
    store: PropTypes.object.isRequired
}

export default Color
