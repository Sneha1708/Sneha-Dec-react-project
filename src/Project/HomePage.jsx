import "./Home.css";
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import ReactPlayer from 'react-player';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="HomePage">
      <div>
        <br></br>
        <center>
          <h1 style={{ color: "white" }}>Welcome to Movie Booking</h1>
          <h2 style={{ color: "white" }}>
            Book Your Tickets and Enjoy your Weekends!!
          </h2>
        </center>
      </div>
      <div>
        <br></br>
        <br></br>
        &emsp;&emsp; &emsp; &emsp;&emsp;{" "}
        <h3 style={{ color: "white" }}>
          " A world of entertainment, just a ticket away."
        </h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <Button
          className="find-freelance "
          onClick={() => navigate("Book")}
          variant="contained"
          type="submit"
          style={{
            backgroundColor: "deeppink",
            width: "200px",
            height: "50px",
            fontFamily: "initial",
          }}
        >
          Book Your Tickets
        </Button>
      </div>
      <div className="paragraph">
        <div>
          <p className="bottom-padding"></p>
        </div>

        <h3>Need something done?</h3>
        <p>
          Post a job It’s free and easy to post a job. Simply fill in a title,
          description and budget and competitive bids come within minutes.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3>Choose freelancers</h3>
          No job is too big or too small. We've got freelancers for jobs of any
          size or budget, across 1800+ skills. No job is too complex. We can get
          it done!
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">Pay safely</h3>
          Only pay for work when it has been completed and you're 100% satisfied
          with the quality using our milestone payment system.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">We’re here to help</h3>
          Our talented team of recruiters can help you find the best freelancer
          for the job and our technical co-pilots can even manage the project
          for you.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 style={{ textDecoration: "underline" }} className="topic">
            What's great about it?
          </h3>
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">Browse portfolios</h3>
          Find professionals you can trust by browsing their samples of previous
          work and reading their profile reviews.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">Fast bids</h3>
          Receive obligation free quotes from our talented freelancers fast. 80%
          of projects get bid on within 60 seconds.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">Quality work</h3>
          Freelancer.com has by far the largest pool of quality freelancers
          globally- over 70 million to choose from{" "}
        </p>
        <br></br>
      </div>
    </div>
  );
};

export default HomePage;
