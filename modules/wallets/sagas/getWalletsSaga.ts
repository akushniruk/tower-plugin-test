import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../../api';
import { buildQueryString } from '../../../../../helpers';
import { alertPush } from '../../../../../modules';
import {
    getWalletsListData,
    getWalletsListError,
    WalletsListFetch,
} from '../actions';

const requestOptions: RequestOptions = {
    apiVersion: 'peatio',
};

export function* getWalletsSaga(action: WalletsListFetch) {
    try {
        const params = buildQueryString(action.payload);
        const { data, headers } = yield call(API.get(requestOptions), `/admin/wallets?${params}`);

        const list = data.map(item => {
            const nestedCurrencies = item.currencies.map(currency => {
                return {
                    name: currency,
                    balance: item.balance !== null && item.balance[currency] ? item.balance[currency] : 0,
                };
            }) || [];

            return {
                ...item,
                nestedCurrencies,
            };
        });

        yield put(getWalletsListData({ list, total: headers.total }));
    } catch (error) {
        yield put(getWalletsListError());
        yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
    }
}
