import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { createStore } from 'utils/createStore'

import MenuModel from 'models/menu'
import UserModel from 'models/user'

const { reducer, rootSaga } = createStore(MenuModel, UserModel)
const sagaMiddleware = createSagaMiddleware()


export default configureStore({
  reducer,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)