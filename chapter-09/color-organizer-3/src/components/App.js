import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import '../../stylesheets/APP.scss'


const App = ({store}) => 
    <div className="app">
        <AddColorForm store={store} />
        <ColorList store={store}
                    store={store}
                    store={store} />
    </div>

export default App
