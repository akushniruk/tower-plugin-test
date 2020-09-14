import { AppState } from '../../../../modules';
import { WalletsState } from './reducer';

export const selectWalletsList = (state: AppState): WalletsState['list'] =>
    state.plugins.customplugin.wallets.list;

export const selectWalletsListLoading = (state: AppState): WalletsState['loading'] =>
    state.plugins.customplugin.wallets.loading;

export const selectWalletsListTotal = (state: AppState): WalletsState['total'] =>
    state.plugins.customplugin.wallets.total;
