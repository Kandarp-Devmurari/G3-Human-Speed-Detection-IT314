import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import "./HistoryPage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import gimage from "../../public/images/logo.png";
function HistoryPage() {
  const [history, setHistory] = useState([]);
  const token = localStorage.getItem("user_email");
  useEffect(() => {
    axios
      .post("/history", {
        token,
      })
      .then(function (res) {
        // const data = res.json();
        // console.log("history message",data.message);
        setHistory(res);
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // useEffect(() => {

  //   axios
  //     .post("/api/history", {
  //       email:localstora,
  //     })
  //     .then((response) => {
  //       setHistory(response.data);
  //     });
  // }, []);

  return (
    <div className="history">
      <h1>History</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image="" alt="graph" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Video_1
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              12/09/2021
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Avg. Speed: 21km/hr
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
      </Card>
      {history.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.graph}
              alt="graph"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.video_name}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {item.data}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avg. Speed: {item.speed}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
        </Card>
      ))}
    </div>
  );
}
export default HistoryPage;
