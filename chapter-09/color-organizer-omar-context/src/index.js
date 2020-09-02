import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import storeFactory from './store'

window.React = React

const store = storeFactory()

render(
    <App store={store} />,
    document.getElementById('react-container')
)
