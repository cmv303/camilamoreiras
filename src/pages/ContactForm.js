import React from "react";
import "../styles/Contact.css";
import {
  Snackbar,
  IconButton,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyyaoave");
  const [succeeded, setSucceeded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async data => {
    try {
      const { response } = await handleSubmit(data);
      if (response.status === 200) {
        setSucceeded(true);
      } else {
        setSucceeded(false);
      }
    } catch (error) {
      setSucceeded(false);
    }
    setOpen(true);
  };

  return (
    <section className="GetInTouch">
      {/* introductory text at top of page */}
      <Typography variant="h1" component="div" sx={{ fontSize: "1rem" }}>
        Feel free to send me an email by using the mail icon in the footer or
        use this contact form. Either way, I'll receive it. I look forward to
        hearing from you!
      </Typography>
      <Card variant="elevation" className="FormContainer">
        {/* contact form */}
        <CardContent>
          <form onSubmit={onSubmit}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <ValidationError
              prefix="First Name"
              field="firstName"
              errors={state.errors}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <ValidationError
              prefix="Last Name"
              field="lastName"
              errors={state.errors}
            />
            <TextField
              id="email"
              type="email"
              name="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <TextField
              id="subject"
              name="subject"
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={5}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#282c34", color: "#f5f5f5" }}
            >
              Send Message
            </Button>
          </form>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={succeeded ? "Message sent" : "Failed to send message"}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <Close fontSize="small" />
              </IconButton>
            }
          />
        </CardContent>
      </Card>
    </section>
  );
}
