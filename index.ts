import { TowerPlugin, TowerPluginInterface } from '../TowerPlugin';
import { custompluginActions, custompluginMenuIcons, custompluginMenuItem } from './constants';
import { custompluginRoutes } from './containers';
import { custompluginPluginReducer, rootCustompluginsSaga } from './modules';

export * from './containers';
export * from './modules';

export const CustompluginPlugin: TowerPluginInterface =
    new TowerPlugin(custompluginPluginReducer, rootCustompluginsSaga, custompluginRoutes, custompluginActions, custompluginMenuItem, custompluginMenuIcons, null);
