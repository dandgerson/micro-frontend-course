import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Footer from "home/Footer";
import Header from "home/Header";

import "./index.scss";
import PDPContent from "./PDPContent";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={(<div>
        <div className="text-3xl mx-auto max-w-6xl">
          <Header />
          <div className="m-10">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>)}>
        <Route path="/product/:id" element={<PDPContent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
