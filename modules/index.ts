import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import {
    rootWalletsSaga,
    walletsReducer,
    WalletsState,
} from './wallets';

export * from './wallets';

export interface CustompluginPluginState {
    wallets: WalletsState;
}

export const custompluginPluginReducer = combineReducers({
    wallets: walletsReducer,
});

export function* rootCustompluginsSaga() {
    yield all([
        call(rootWalletsSaga),
    ]);
}
