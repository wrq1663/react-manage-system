import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { createStore } from 'utils/createStore'

import MenuModel from 'models/menu'

const { reducer, rootSaga } = createStore(MenuModel)
const sagaMiddleware = createSagaMiddleware()


export default configureStore({
  reducer,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)