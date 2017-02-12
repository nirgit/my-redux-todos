import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducers/appReducer'
import App from './components/App'

export function go() {
  let store = createStore(appReducer)

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}
