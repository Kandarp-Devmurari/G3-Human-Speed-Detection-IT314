import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HistoryPage.css";
function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("/api/history").then((response) => {
      setHistory(response.data);
    });
  }, []);

  return (
    <div className="history">
      <h1>History</h1>
      <div key="101" className="history-item">
        <p className="title"> This is Video Name </p>
        <p className="date"> 06/05/2003</p>
        <p className="time"> 05:00</p>
      </div>
      {history.map((item) => (
        <div key={item.id} className="history-item">
          <p className="title">{item.title}</p>
          <p className="date">{item.date}</p>
        </div>
      ))}
    </div>
  );
}
export default HistoryPage;
