import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App/App'
import { rootReducer } from './redux'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
