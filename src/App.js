import React from "react";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";
const App = () => {
  return (
    <AdminContext>
      <ClientContext>
        <Navigation />
      </ClientContext>
    </AdminContext>
  );
};

export default App;
