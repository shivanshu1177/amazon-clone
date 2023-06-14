import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        //the user logged in or was loged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
