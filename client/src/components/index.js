import { mainRoutes, wrapperRoutes } from '../shared/constants';
import Home from './Home';
import { CreateWallet } from './Accounts/CreateWallet';
import Wallets from './Wallets';
import History from './History';
import KeyManager from './KeyManager';
import Tokens from './Tokens';

export const mainModules = {
	[mainRoutes.dashboard]: Wallets,
	[mainRoutes.tokens]: Tokens,
	[mainRoutes.history]: History,
	[mainRoutes.keyManager]: KeyManager,
};

export const wrapperModules = {
	[wrapperRoutes.home]: Home,
	[wrapperRoutes.newwallet]: CreateWallet,
};
