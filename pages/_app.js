import '@styles/globals.css';
import MainFrontShell from '../components/ui/layout/MainFrontShell';
import ProductsProvider from '../components/providers/ProductsContext';
import Web3Provider from '../components/providers/web3/index';

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Web3Provider>
        <MainFrontShell>
          <Component {...pageProps} />
        </MainFrontShell>
      </Web3Provider>
    </ProductsProvider>
  );
}

export default MyApp;
