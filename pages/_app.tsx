import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;