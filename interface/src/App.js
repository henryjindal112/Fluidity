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

export const ace = {
  id: 1_432_979,
  name: 'Ace',
  network: 'Ace',
  iconUrl: 'https://raw.githubusercontent.com/dymensionxyz/chain-registry/main/devnet/ace_5736254-1/logos/ace_5736254-1.png',
  nativeCurrency: {
    decimals: 18,
    name: 'ACE',
    symbol: 'ACE',
  },
  rpcUrls: {
    public: { http: ['https://d3.acethelight.xyz'] },
    default: { http: ['https://d3.acethelight.xyz'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: '' },
    default: { name: 'SnowTrace', url: '' },
  },
} 

const { chains, publicClient } = configureChains(
  [ace],
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
