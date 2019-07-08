import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchAccountsCompletedAction } from '../actions/accounts.action';
import { actionIds } from '../common';
import { fetchAccounts } from '../services';
import { enableSendToAction } from '../actions/countries.action';

export function* watchFetchAccounts() {
  yield takeEvery(actionIds.FETCH_ACCOUNTS, fetchAccountsSaga);
}

function* fetchAccountsSaga() {
  const accounts = yield call(fetchAccounts);
  yield put(fetchAccountsCompletedAction(accounts))
}

export function* watchFromAccountSelected() {
  yield takeEvery(actionIds.FROM_ACCOUNT_SELECTED, fromAccountSelectedSaga);
}

function* fromAccountSelectedSaga() {
  yield put(enableSendToAction())
}
