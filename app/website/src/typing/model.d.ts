import { Action, AnyAction } from "@reduxjs/toolkit";

/**
 * reducer类型
 */
declare type Reducer<S = any, A extends Action = AnyAction> = (
  state: S,
  action: A,
) => any;

interface EffectsCommandMap {
  put: <A extends AnyAction>(action: A) => any,
  call: Function,
  select: Function,
  take: Function,
  cancel: Function,
  [key: string]: any,
}


/**
 * effect类型
 */
declare type Effect = (
  action?: AnyAction,
  effects?: EffectsCommandMap,
) => void;

/**
 * 数据model类型
 */
declare interface ModelType<T> {
  namespace: string,
  state: T,
  reducers: {
    [key: string]: Reducer<T>
  },
  effects: {
    [key: string]: Effect
  }
}