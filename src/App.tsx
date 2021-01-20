import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <>
      <Dashboard />
      <GlobalStyles />
    </>
  );
};

export default App;
