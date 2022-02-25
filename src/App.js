import React from "react";

import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import "./App.css";
import {
  Header,
  Sidenav,
  SalesToday,
  RecentDeposits,
  RecentOrders,
} from "./components";
const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Sidenav />
        <SalesToday />
        <RecentDeposits />
        <RecentOrders />
      </div>
      <footer className="footer">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Mui Dashboard. All rights Reserved.{" "}
        </p>
        <p className="socials">
          <span className="social">
            <FaGithubSquare />
          </span>
          <span className="social">
            <FaTwitterSquare />
          </span>
        </p>
      </footer>
    </>
  );
};

export default App;
