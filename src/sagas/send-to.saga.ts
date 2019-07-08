import { call, put, takeEvery } from 'redux-saga/effects';
import { actionIds } from '../common';
import { fetchCountries } from '../services/country.service';
import { fetchCountriesCompletedAction } from '../actions/countries.action';

export function* watchFetchCountries() {
  yield takeEvery(actionIds.FETCH_COUNTRIES, fetchCountriesSaga);
}

function* fetchCountriesSaga() {
  const countries = yield call(fetchCountries);
  yield put(fetchCountriesCompletedAction(countries))
}