import {
    WALLETS_LIST_DATA,
    WALLETS_LIST_ERROR,
    WALLETS_LIST_FETCH,
} from '../constants';

export interface WalletItemSettings {
    uri?: string;
    secret?: string;
    access_token?: string;
    testnet?: boolean;
    wallet_id?: string;
}

export interface NestedCurrency {
    name: string;
    balance: string;
}

export interface WalletItem {
    id: number;
    name: string;
    kind: string;
    address: string;
    gateway: string;
    max_balance: string;
    blockchain_key: string;
    status: string;
    settings: WalletItemSettings;
    created_at: string;
    updated_at: string;
    balance: any[]; // tslint:disable-line
    nestedCurrencies: NestedCurrency[];
}

export interface WalletsListFetch {
    type: typeof WALLETS_LIST_FETCH;
    payload: {
        page: number;
        limit: number;
        kind?: string;
        currency?: string;
        blockchain_key?: string;
        order_by?: string;
        ordering?: string;
    };
}

export interface WalletsListData {
    type: typeof WALLETS_LIST_DATA;
    payload: {
        list: WalletItem[];
        total: number;
    };
}

export interface WalletsListError {
    type: typeof WALLETS_LIST_ERROR;
}

export type WalletsAction = WalletsListFetch
    | WalletsListData
    | WalletsListError;


export const getWalletsList = (payload: WalletsListFetch['payload']): WalletsListFetch => ({
    type: WALLETS_LIST_FETCH,
    payload,
});

export const getWalletsListData = (payload: WalletsListData['payload']): WalletsListData => ({
    type: WALLETS_LIST_DATA,
    payload,
});

export const getWalletsListError = (): WalletsListError => ({
    type: WALLETS_LIST_ERROR,
});
