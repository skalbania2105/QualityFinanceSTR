import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <ul>
        <li>
          <Link to="/">MainDashboard</Link>
        </li>
        <li>
          <Link to="/cashflow">CashFlow</Link>
        </li>
        <li>
          <Link to="/currencymarket">CurrencyMarket</Link>
        </li>
        <li>
          <Link to="/recenttransactions">RecentTransactions</Link>
        </li>
        <li>
          <Link to="/settingeditprofile">SettingEditProfile</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
