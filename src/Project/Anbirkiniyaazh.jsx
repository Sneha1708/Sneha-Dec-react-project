import React, { useState } from "react";
import {
  Button,
  Paper,
  Typography,
  Avatar,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const FreelancerDetails = ({
  name,
  experience,
  personsHired,
  imageUrl,
  bio,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [hireDialogOpen, setHireDialogOpen] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleHireNow = () => {
    setHireDialogOpen(true);
  };

  const handleConfirmHiring = () => {
    if (termsChecked) {
      alert(`Congratulations! ${name} is BOOKED!  `);
      setHireDialogOpen(false);
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  const handleDialogClose = () => {
    setHireDialogOpen(false);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item container xs={12} md={4} alignItems="center">
        <Avatar
          alt={name}
          src={imageUrl}
          sx={{ width: 80, height: 80, marginRight: 2 }}
        />
        <div>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">Total Seats: {experience}</Typography>
          <Typography variant="subtitle1">
            Seats Available: {personsHired}
          </Typography>
          <Button
            variant="contained"
            onClick={handleShowDetails}
            sx={{ marginTop: 2 }}
          >
            Show More Details
          </Button>
          &emsp;&emsp;
          <Button
            variant="contained"
            onClick={handleHireNow}
            sx={{ marginTop: 2 }}
          >
            Book Now
          </Button>
        </div>
      </Grid>
      {showDetails && (
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: 20, marginTop: 10 }}>
            <Typography variant="h6">Facilities:</Typography>
            <Typography>{bio}</Typography>
          </Paper>
        </Grid>
      )}

      <Dialog open={hireDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Contact Details</DialogTitle>
        <DialogContent>
          {/* Add contact details here */}
          <FormControlLabel
            control={
              <Checkbox
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
            }
            label={`Movie Booking Services Agreement
            Welcome to SkillSync,  Please read these terms and conditions carefully before using our online movie ticket booking services.

Acceptance of Terms:

By accessing and using our website, you agree to be bound by these terms and conditions. If you do not agree, please refrain from using our services.
User Account:

Users may be required to create an account to use certain features.
You are responsible for maintaining the confidentiality of your account information.
Booking Process:

Users must provide accurate and current information during the booking process.
The website is not responsible for errors in the selection of movies, showtimes, or cinemas.
Payment:

Payments are processed securely through third-party payment gateways.
All transactions are final, and no refunds or exchanges are allowed.
Ticket Confirmation:

A booking confirmation will be sent to the email address provided during the booking process.
Users must present the confirmation (either digital or printed) at the cinema for ticket validation.
Cancellations and Refunds:

Cancellation policies vary by cinema and showtime. Check the cinema's policy before booking.
In the event of a canceled or rescheduled show, refunds will be processed according to the cinema's policy.
Intellectual Property:

The website and its content are protected by copyright and other intellectual property laws.
Users may not reproduce, distribute, or display any part of the website without prior written consent.
Privacy Policy:

User data is handled in accordance with our Privacy Policy, available on the website.
By using our services, you consent to the collection and use of your information as described in the Privacy Policy.
Security:

Users are responsible for maintaining the security of their devices and accounts.
Report any suspicious activities or security concerns to [Contact Email].
Limitation of Liability:

The website is not liable for any damages, direct or indirect, arising from the use or inability to use the services.
Termination of Services:

The website reserves the right to modify or terminate services at any time without notice.
Governing Law:

These terms and conditions are governed by and construed in accordance with the laws of [Jurisdiction].
Contact Information:

For inquiries or assistance, contact [Customer Support Email].
Changes to Terms:

The website reserves the right to update these terms and conditions at any time. Users will be notified of changes.
Entire Agreement:

These terms and conditions constitute the entire agreement between the user and [Company Name] regarding the use of our services.
Thank you for using [Website Name]! Enjoy your movie experience.
            `}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleConfirmHiring}>Confirm Booking</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

const Photography = () => {
  return (
    <div>
      <center>
        <br></br>
        <img
          height={"500px"}
          width="500px"
          src="https://igimages.gumlet.io/tamil/gallery/movies/anbirkiniyal2021/poster.jpg?w=200&dpr=1.3"
          alt=""
        ></img>
        <h1>Anbirkiniyaazh</h1>
        <p>Comedy</p>
        <br></br>
        <p>Rating:4⭐⭐⭐⭐</p>
        <br></br>{" "}
      </center>
      <div></div>
      <FreelancerDetails
        name="SS Cinemas"
        experience={100}
        personsHired={60}
        imageUrl="data:image/jpeg;base64,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"
        bio={
          <div>
            <p>📸AC and Non AC Seats Available</p>
            <br></br>
            <p>
              📸Well Maintained Spacious Canteen with Cleanly made food items
            </p>
            <br></br>
            <p>📸Spacious Car parking and Bike Parking</p>
            <br></br>
            <p>Cushion Seats</p>
          </div>
        }
      />
      <FreelancerDetails
        name="PPK Cinemas"
        experience={100}
        personsHired={80}
        imageUrl="data:image/jpeg;base64,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"
        bio={
          <div>
            <p>📸AC and Non AC Seats Available</p>
            <br></br>
            <p>
              📸Well Maintained Spacious Canteen with Cleanly made food items
            </p>
            <br></br>
            <p>📸Spacious Car parking and Bike Parking</p>
            <br></br>
            <p>Cushion Seats</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Siva Cinema Hall"
        experience={100}
        personsHired={60}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv0gcN06MZ0YY2pzA0IwS7WeWAy4LrT04oAuMprJ0mpxgWxyfLbyTZgeqwQ&s"
        bio={
          <div>
            <p>📸AC and Non AC Seats Available</p>
            <br></br>
            <p>
              📸Well Maintained Spacious Canteen with Cleanly made food items
            </p>
            <br></br>
            <p>📸Spacious Car parking and Bike Parking</p>
            <br></br>
            <p>Cushion Seats</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Sanotora"
        experience={100}
        personsHired={60}
        imageUrl="data:image/jpeg;base64,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"
        bio={
          <div>
            <p>📸AC and Non AC Seats Available</p>
            <br></br>
            <p>
              📸Well Maintained Spacious Canteen with Cleanly made food items
            </p>
            <br></br>
            <p>📸Spacious Car parking and Bike Parking</p>
            <br></br>
            <p>Cushion Seats</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Plaza Movies"
        experience={50}
        personsHired={20}
        imageUrl="data:image/jpeg;base64,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"
        bio={
          <div>
            <p>📸AC and Non AC Seats Available</p>
            <br></br>
            <p>
              📸Well Maintained Spacious Canteen with Cleanly made food items
            </p>
            <br></br>
            <p>📸Spacious Car parking and Bike Parking</p>
            <br></br>
            <p>Cushion Seats</p>
          </div>
        }
      />
    </div>
  );
};

export default Photography;
