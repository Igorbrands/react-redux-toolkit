import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./storeToolkit/configureStore";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Dashboard />
      <GlobalStyles />
    </Provider>
  );
};

export default App;
