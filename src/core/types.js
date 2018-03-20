// @flow
export type AppState = { movies: Array<Object> }
export type GetState = () => AppState
export type Dispatch = (action: Object) => any
export type SyncThunk = (dispatch: Dispatch, getState?: GetState) => any
export type AsyncThunk = (
  dispatch: Dispatch,
  getState?: GetState
) => Promise<any>
