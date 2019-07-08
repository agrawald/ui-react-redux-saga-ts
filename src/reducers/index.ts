import { combineReducers } from 'redux';
import { fromAccountReducer, FromAccountState } from './from-account.reducer';
import { sendToReducer, SendToState } from './send-to.reducer';

export interface State {
  fromAccountState : FromAccountState;
  sendToState: SendToState;
};

export const reducers = combineReducers<State>({
  fromAccountState: fromAccountReducer,
  sendToState: sendToReducer,
});
