import { PropTypes } from 'react'
import '../../stylesheets/AddColorForm.scss'

import { addColor } from '../actions'

const AddColorForm = (props, { store }) => {

    let _title, _color

    const submit = e => {
        e.preventDefault()
        store.dispatch( addColor(_title.value, _color.value) )
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="color title..." required/>
            <input ref={input => _color = input}
                   type="color" required/>
            <button>ADD</button>
        </form>
    )

}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func.isRequired
}

AddColorForm.contextTypes = {
    store: PropTypes.object.isRequired
}

export default AddColorForm