import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavbarPage from "./pages/NavbarPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";
import HospitalPage from "./pages/hospital/HospitalPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <NavbarPage />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/detail/:id/title/:title">
          <DetailPage />
        </Route>
        <Route path="/hospital">
          <HospitalPage />
        </Route>
      </Switch>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
