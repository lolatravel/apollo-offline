import OfflineNetworkInterface, { NetworkInterface } from './transport';
import { Config } from 'redux-offline';
export { Config as EnhancerConfig };
declare const _default: (networkInterface: NetworkInterface, rehydratedKey?: string | undefined) => {
    enhancer: (config: Config) => (createStore: any) => (reducer: (state: {
        [key: string]: any;
    }, action: any) => {
        [key: string]: any;
    }, preloadedState?: {
        [key: string]: any;
    } | undefined, enhancer?: any) => any;
    networkInterface: OfflineNetworkInterface;
};
export default _default;
