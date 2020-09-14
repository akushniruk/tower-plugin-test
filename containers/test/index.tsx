import { History } from 'history';
import * as React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { tablePageLimit } from '../../../../api/config';
import {
    AppState,
    getWalletsList,
    selectWalletsList,
    selectWalletsListTotal,
    WalletItem,
} from '../../../../modules';

interface WalletsState {
    page: number;
    rowsPerPage: number;
}

interface ReduxProps {
    total: number;
    list: WalletItem[];
}

interface DispatchProps {
    getWalletsList: typeof getWalletsList;
}

interface HistoryProps {
    history: History;
}

type Props = ReduxProps & DispatchProps & HistoryProps;

class WalletsScreen extends React.Component<Props, WalletsState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            page: 0,
            rowsPerPage: tablePageLimit(),
        };
    }

    // private walletsRows = [
    //     { key: 'id', alignRight: false, label: 'Id' },
    //     { key: 'name', alignRight: false, label: 'Name' },
    //     { key: 'kind', alignRight: false, label: 'Kind' },
    //     { key: 'address', alignRight: false, label: 'Address' },
    //     { key: 'status', alignRight: true, label: 'Status' },
    //     { key: 'collapse', alignRight: true, label: '' },
    // ];

    public componentDidMount() {
        this.props.getWalletsList({
            page: this.state.page + 1,
            limit: tablePageLimit(),
            ordering: 'desc',
        });
    }

    public render() {
        return (
            <div>test table</div>
        );
    }

    // private handleChangePage = (page: number) => {
    //     const { rowsPerPage } = this.state;
    //     this.setState({ page });
    //     this.handleGetWallets(rowsPerPage, page);
    // };

    // private handleChangeRowsPerPage = (rows: number) => {
    //     this.setState({rowsPerPage: rows, page: 0});
    //     this.handleGetWallets(rows, 0);
    // };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, AppState> =
    (state: AppState): ReduxProps => ({
        list: selectWalletsList(state),
        total: selectWalletsListTotal(state),
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
    getWalletsList: payload => dispatch(getWalletsList(payload)),
});

export const Wallets = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(WalletsScreen) as React.ComponentClass;
