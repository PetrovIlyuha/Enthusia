import { MainFrontShell } from '@components/index.js';
import '@styles/globals.css';
import ProductsProvider from 'context/ProductsContext';

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <MainFrontShell>
        <Component {...pageProps} />
      </MainFrontShell>
    </ProductsProvider>
  );
}

export default MyApp;
