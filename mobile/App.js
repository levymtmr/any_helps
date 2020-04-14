import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en-AU';

import Routes from "./src/routes";
import { StoreProvider } from './src/services/store';

export default function App() {
  return (
    <StoreProvider>
      <Routes/>
    </StoreProvider>
  );
}

