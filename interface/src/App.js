import logo from './logo.svg';
import './App.css';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Faucet from './pages/Faucet';
import Home from './pages/Home';
import Liquidity from './pages/Liquidity';
import Trade from './pages/Trade';

export const abyss = {
  id: 9_747_778,
  name: 'Abyss',
  network: 'Abyss',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/abyss_4029858-1/logos/abyss_4029858-1.png',
  nativeCurrency: {
    decimals: 18,
    name: 'ABYSS',
    symbol: 'ABYSS',
  },
  rpcUrls: {
    public: { http: ['http://38.242.129.140:8545'] },
    default: { http: ['http://38.242.129.140:8545'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
} 

export const arkham = {
  id: 9_193_196,
  name: 'Arkham',
  network: 'Arkham',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/arkham_9193196-1/logos/arkham_9193196-1.jpeg',
  nativeCurrency: {
    decimals: 18,
    name: 'ARK',
    symbol: 'ARK',
  },
  rpcUrls: {
    public: { http: ['https://froopyland.dymension.xyz/13/arkham_9193196-1/evmrpc'] },
    default: { http: ['https://froopyland.dymension.xyz/13/arkham_9193196-1/evmrpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
} 

export const avocado = {
  id: 2_177_968,
  name: 'Avocado',
  network: 'Avocado',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/avocado_2177968-1/logos/avocado_2177968-1.png',
  nativeCurrency: {
    decimals: 18,
    name: 'AVO',
    symbol: 'AVO',
  },
  rpcUrls: {
    public: { http: ['https://froopyland.dymension.xyz/14/avocado_2177968-1/evmrpc'] },
    default: { http: ['https://froopyland.dymension.xyz/14/avocado_2177968-1/evmrpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
} 

export const animus = {
  id: 6_468_241,
  name: 'Animus',
  network: 'Animus',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/animus_6468241-1/logos/animus_6468241-1.png',
  nativeCurrency: {
    decimals: 18,
    name: 'ANI',
    symbol: 'ANI',
  },
  rpcUrls: {
    public: { http: ['https://froopyland.dymension.xyz/14/animus_6468241-1/evmrpc'] },
    default: { http: ['https://froopyland.dymension.xyz/14/animus_6468241-1/evmrpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
} 

export const ace = {
  id: 5_736_254,
  name: 'Ace',
  network: 'Ace',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/ace_5736254-1/logos/ace_5736254-1.png',
  nativeCurrency: {
    decimals: 18,
    name: 'Ace',
    symbol: 'Ace',
  },
  rpcUrls: {
    public: { http: ['http://161.97.107.208:8545'] },
    default: { http: ['http://161.97.107.208:8545'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
}

export const dmc = {
  id: 2_827_710,
  name: 'DMC',
  network: 'DMC',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/devilmaycry_2827710-1/logos/devilmaycry_2827710-1.png',
  nativeCurrency: {
    decimals: 18,
    name: 'DMC',
    symbol: 'DMC',
  },
  rpcUrls: {
    public: { http: ['https://froopyland.dymension.xyz/14/devilmaycry_2827710-1/evmrpc'] },
    default: { http: ['https://froopyland.dymension.xyz/14/devilmaycry_2827710-1/evmrpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
}

export const umbros = {
  id: 1_188_624,
  name: 'Umbros',
  network: 'Umbros',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/umbros_1188624-1/logos/umbros_1188624-1.svg',
  nativeCurrency: {
    decimals: 18,
    name: 'UMB',
    symbol: 'UMB',
  },
  rpcUrls: {
    public: { http: ['https://froopyland.dymension.xyz/14/umbros_1188624-1/evmrpc'] },
    default: { http: ['https://froopyland.dymension.xyz/14/umbros_1188624-1/evmrpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
} 

export const phoenix = {
  id: 9_955_692,
  name: 'Phoenix',
  network: 'Phoenix',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/rollapp-registry/main/devnet/phoenix_9955692-1/logos/phoenix_9955692-1.png',
  nativeCurrency: {
    decimals: 18,
    name: 'PHY',
    symbol: 'PHY',
  },
  rpcUrls: {
    public: { http: ['https://froopyland.dymension.xyz/14/phoenix_9955692-1/evmrpc'] },
    default: { http: ['https://froopyland.dymension.xyz/14/phoenix_9955692-1/evmrpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
}

const { chains, publicClient } = configureChains(
  [abyss, arkham, avocado, animus, ace, dmc, umbros],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Fluidity',
  projectId: '6160c615f05244c0838315aec9610295',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="bg-[#1d2839] w-screen h-screen">
          <Router>
            <Navbar/>  
            <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/faucet' exact element={<Faucet/>}/>
              <Route path='/liquidity' exact element={<Liquidity/>}/>
              <Route path='/trade' exact element={<Trade/>}/>
            </Routes>
          </Router>
        </div>  
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
