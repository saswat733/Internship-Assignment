import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'

import chatReducer from './feature/ChatSlice.ts'
import { Provider } from 'react-redux'

const store=configureStore({
  reducer:{
    chat:chatReducer,
  }
})

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
