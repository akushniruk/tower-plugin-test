import * as React from 'react';
import { pluginsList } from '../../api/config';
import { HeaderActions, MenuItem } from '../TowerPlugin';

export const custompluginMenuItem: MenuItem[] = [
    { key: 'customplugin', value: 'Custom Plugin', isLink: true },
];

export const custompluginMenuIcons = (name: string) => {
    switch (name) {
        case 'customplugin':
            return (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.04 7.5L13.53 10H18.53L16.04 7.5ZM8 12V25H24V12H8ZM16 5L21 10H24C24.5304 10 25.0391 10.2107 25.4142 10.5858C25.7893 10.9609 26 11.4696 26 12V25C26 25.5304 25.7893 26.0391 25.4142 26.4142C25.0391 26.7893 24.5304 27 24 27H8C7.46957 27 6.96086 26.7893 6.58579 26.4142C6.21071 26.0391 6 25.5304 6 25V12C6 11.4696 6.21071 10.9609 6.58579 10.5858C6.96086 10.2107 7.46957 10 8 10H11L16 5ZM11 23V19H16V23H11ZM18 22V15H22V22H18ZM10 17V14H15V17H10Z" fill="#979797"/>
                </svg>
            );
        default:
            return;
    }
};

export const pagesWithFilter = [
    'tower/customplugin/table',
];

export const pagesWithRefresh = [
    'tower/customplugin/table',
];

export const custompluginActions: HeaderActions = {
    pagesWithFilter,
    pagesWithRefresh,
};

export const getCustomplugin = () => {
    const customplugin = pluginsList().find(item => item.name === 'customplugin');

    return customplugin;
};
