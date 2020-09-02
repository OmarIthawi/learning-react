import '../../stylesheets/APP.scss'
import {Menu, NewColor, Colors} from './containers'


const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App
