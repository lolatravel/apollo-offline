import { Config } from 'redux-offline';
import OfflineNetworkInterface from './transport';
declare const _default: (networkInterface: OfflineNetworkInterface, rehydratedKey?: string) => (config: Config) => (createStore: any) => (reducer: (state: {
    [key: string]: any;
}, action: any) => {
    [key: string]: any;
}, preloadedState?: {
    [key: string]: any;
} | undefined, enhancer?: any) => any;
export default _default;
