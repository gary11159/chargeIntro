import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/notosanstc.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
