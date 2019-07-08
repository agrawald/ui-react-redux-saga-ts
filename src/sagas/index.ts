import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { watchFetchAccounts, watchFromAccountSelected } from './from-account.saga';
import { watchFetchCountries } from './send-to.saga';

// Register all your watchers
export const rootSaga = function* root() {
    yield all([
      fork(watchFetchAccounts),
      fork(watchFetchCountries),
      fork(watchFromAccountSelected),
    ])
  }