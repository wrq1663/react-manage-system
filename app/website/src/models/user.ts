import { ModelType } from "typing/model";

export type UserModelState = {
  token: string;
  username: string;
};


const UserModel: ModelType<UserModelState> = {
  namespace: 'user',
  state: {
    token:localStorage.getItem('rms_token') || '',
    username: ''
  },
  reducers: {
    changeToken(state, action) {
      localStorage.setItem('rms_token', action.payload.token)
      state.token = action.payload.token
    }
  },
  effects: {
    // *fetch
  }
}

export default UserModel;

export const selectToken = (state: any) => state.user.token