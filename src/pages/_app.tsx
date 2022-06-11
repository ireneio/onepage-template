import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';

function App({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === 'production') {
    console.log =
      console.warn =
      console.error =
        () => {
          return;
        };
  }

  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
      <div id="snackbar-root" />
    </ReduxProvider>
  );
}

export default App;
