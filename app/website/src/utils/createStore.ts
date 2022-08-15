import { createSlice } from "@reduxjs/toolkit"
import { EffectsCommandMap, ModelType, Reducer } from "typing/model";
import { all, takeEvery, call, put, select, take, cancel, AllEffect } from "redux-saga/effects";

type StoreOption = {
  reducer: ObjIndexString<Reducer>,
  rootSaga: () => Generator<AllEffect<any>, void, unknown>
}

const saga: EffectsCommandMap = { all, call, put, select, take, cancel }

const createReducers = (modelList: ModelType<unknown>[]) => {
  const reducer: ObjIndexString<Reducer> = {}
  modelList.forEach((model: ModelType<unknown>) => {
    reducer[model.namespace] = createSlice({
      name: model.namespace,
      initialState: model.state,
      reducers: model.reducers,
    }).reducer
  });
  return reducer
}

/**
 * 
 * @param {数据模型数组} modelList 
 * @returns 
 */
const createSagaMiddle = (modelList: ModelType<unknown>[]) => {
  const watchList: any[] = []
  //遍历数据模型集合
  modelList.forEach(({ namespace, effects }) => {
    for (let key in effects) {
      let type = namespace + '/' + key
      watchList.push((function* () {
        yield takeEvery(type, function* (action) {
          //调用对应的方法，并传入action和saga
          yield saga.call(effects[key], action, saga)
        })
      })())
    }
  })
  return function* rootSaga() {
    yield all(watchList)
  }
}

export const createStore = (...modelList: ModelType<any>[]): StoreOption => {
  //create reducer
  let reducer = createReducers(modelList)
  //create effect
  let rootSaga = createSagaMiddle(modelList)

  return {
    reducer,
    rootSaga
  }
}