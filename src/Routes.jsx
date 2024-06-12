import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SettingEditProfile = React.lazy(() => import("pages/SettingEditProfile"));
const RecentTransactions = React.lazy(() => import("pages/RecentTransactions"));
const CurrencyMarket = React.lazy(() => import("pages/CurrencyMarket"));
const CashFlow = React.lazy(() => import("pages/CashFlow"));
const MainDashboard = React.lazy(() => import("pages/MainDashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cashflow" element={<CashFlow />} />
          <Route path="/currencymarket" element={<CurrencyMarket />} />
          <Route path="/recenttransactions" element={<RecentTransactions />} />
          <Route path="/settingeditprofile" element={<SettingEditProfile />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
