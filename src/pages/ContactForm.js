import React from "react";
import { Snackbar, IconButton, Card, CardContent, TextField, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contact.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyyaoave");
  const [succeeded, setSucceeded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      const { response } = await handleSubmit(data);
      console.log('response:', response);
      console.log(response.status, "What response?")
      if (response.status === 200) {
        console.log("Success", data);
        setSucceeded(true);
      } else {
        console.log("No message sent", response);
        setSucceeded(false);
      }
    } catch (error) {
      console.log("Error:", error);
      setSucceeded(false);
    }
    setOpen(true);
  };


  //return form-container card
  return (
    <Card variant="elevation" className="form-container">
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
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
        </form>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={ succeeded ? "Message sent" : "Failed to send message" }
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
  );
}