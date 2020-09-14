import {
    WALLETS_LIST_DATA,
    WALLETS_LIST_ERROR,
    WALLETS_LIST_FETCH,
} from '../constants';
import { WalletItem, WalletsAction } from './actions';

export interface WalletsState {
    loading: boolean;
    total: number;
    list: WalletItem[];
}

export const initialWalletsState: WalletsState = {
    loading: false,
    list: [],
    total: 0,
};

export const walletsReducer = (state = initialWalletsState, action: WalletsAction) => {
    switch (action.type) {
        case WALLETS_LIST_FETCH:
            return {
                ...state,
                loading: true,
            };
        case WALLETS_LIST_DATA:
            return {
                ...state,
                loading: false,
                list: action.payload.list,
                total: action.payload.total,
            };
        case WALLETS_LIST_ERROR:
            return {
                ...state,
                loading: false,
                list: [],
                total: 0,
            };
        default:
            return {
                ...state,
            };
    }
};
