import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store.ts';
import DynamicRoutes from './router/DynamicRoutes.tsx';

function AppContent() {
  const location = useLocation();

  return (
    <div className="app flex flex-col min-h-screen">
      <div className="content flex-1">
        <DynamicRoutes />
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppContent />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
