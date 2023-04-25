import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import HistoryPage from "./../HistoryPage";
import AccountCard from "../AccountCard";

const DashBoard = () => {
  return (
    <>
      <AccountCard />
      <HistoryPage />
    </>
  );
};
export default DashBoard;
