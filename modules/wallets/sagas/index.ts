import { takeLatest } from 'redux-saga/effects';
import {
    WALLETS_LIST_FETCH,
} from '../../constants';
import { getWalletsSaga } from './getWalletsSaga';

export function* rootWalletsSaga() {
    yield takeLatest(WALLETS_LIST_FETCH, getWalletsSaga);
}
