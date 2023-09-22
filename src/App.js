import React from "react";
import { BrowserRouter} from "react-router-dom";

import NavBar from './Navbar';
import AppRoutes from './AppRoutes';
import UserContext from './Auth/UserContext';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{}}>
        <NavBar />
        <AppRoutes />
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
