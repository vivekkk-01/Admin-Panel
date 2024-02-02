import Header from "@/components/Header";
import React from "react";
import classes from "./dashboard.module.css";
import Summary from "@/components/Summary";
import Articles from "@/components/Articles";
import Stories from "@/components/Stories";

const Dashboard = () => {
  return (
    <div className={`h-full ${classes.dashboard}`}>
      <Header />
      <div className="flex flex-col gap-10 overflow-hidden my-5">
        <div className="flex flex-col gap-3 overflow-hidden">
          <h1 className="font-semibold text-4xl text-dark overflow-hidden">
            Hello Admin,
          </h1>
          <p className=" text-grey font-light  overflow-hidden">
            This is what we got for you today.
          </p>
        </div>
        <Summary />
        <Articles />
        <Stories />
      </div>
    </div>
  );
};

export default Dashboard;
