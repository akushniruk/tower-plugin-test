import * as React from 'react';
import {
    Wallets,
} from '..';
import { PrivateRoute } from '../../../../router';

export const custompluginRoutes = (userLoading, isCurrentSession) => {
    return ([
        <PrivateRoute
            loading={userLoading}
            isLogged={isCurrentSession}
            exact={true}
            path="/tower/customplugin"
            component={Wallets}
        />,
    ]);
};
