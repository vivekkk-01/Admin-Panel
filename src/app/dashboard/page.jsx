import Header from "@/components/Header";
import React from "react";
import classes from "./dashboard.module.css";
import Summary from "@/components/Summary";

const Dashboard = () => {
  return (
    <div className={`h-full ${classes.dashboard}`}>
      <Header />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-4xl text-dark">Hello Admin,</h1>
          <p className=" text-grey font-light">
            This is what we got for you today.
          </p>
        </div>
        <Summary />
      </div>
    </div>
  );
};

export default Dashboard;
