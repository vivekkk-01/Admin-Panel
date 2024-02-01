import Header from "@/components/Header";
import React from "react";
import classes from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={`h-full ${classes.dashboard}`}>
      <Header />
      Dashboard
    </div>
  );
};

export default Dashboard;
