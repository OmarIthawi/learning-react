import { PropTypes } from 'react'
import StarRating from './StarRating'
import '../../stylesheets/Color.scss'
import TimeAgo from './TimeAgo'
import FaTrash from 'react-icons/lib/fa/trash-o'



const Color = ({ title, color, rating=0, date, onRemove=f=>f, onRate=f=>f}) =>
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}><FaTrash /></button>
        <div className="color"
             style={{ backgroundColor: color }}>
        </div>
        <TimeAgo timestamp={date} />
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    timestamp: PropTypes.string,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default Color
