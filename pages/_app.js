import "@styles/globals.css";
import MainFrontShell from "../components/ui/layout/MainFrontShell";
import ProductsProvider from "../components/providers/ProductsContext";
import Web3Provider from "../components/providers/web3/index";
import { ModalProvider } from "@components/providers/ModalProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Web3Provider>
        <ModalProvider>
          <MainFrontShell>
            <Component {...pageProps} />
          </MainFrontShell>
        </ModalProvider>
      </Web3Provider>
    </ProductsProvider>
  );
}

export default MyApp;
