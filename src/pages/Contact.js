import React from "react";
import { useForm, useFormState } from "react-hook-form";
import {
  Snackbar,
  IconButton,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import "../styles/Contact.css";

export default function Contact() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: " ",
      lastName: " ",
      email: " ",
      subject: " ",
      message: " ",
    },
  });
  const { dirtyFields } = useFormState({
    control,
  });
  const [open, setOpen] = React.useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="section" id="contactPage">
      <h1>Contact Form</h1>
      <Card variant="=outlined" className="form-container">
        <CardContent>
          <Typography variant="h5" component="section"></Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="firstName"
              {...register("firstName", { required: true })}
              label="First Name *"
              variant="outlined"
              fullWidth
              margin="normal"
              className={dirtyFields.firstName ? "is-dirty" : ""}
            />
            {dirtyFields.firstName}
            <TextField
              id="lastName"
              {...register("lastName", { required: true })}
              label="Last Name *"
              variant="outlined"
              fullWidth
              margin="normal"
              className={dirtyFields.lastName ? "is-dirty" : ""}
            />
            {dirtyFields.lastName}
            <TextField
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              label="Email Address *"
              variant="outlined"
              fullWidth
              margin="normal"
              className={dirtyFields.email ? "is-dirty" : ""}
            />
            {dirtyFields.email}
            <TextField
              id="subject"
              {...register("subject", { required: true })}
              label="Subject *"
              variant="outlined"
              fullWidth
              margin="normal"
              className={dirtyFields.subject ? "is-dirty" : ""}
            />
            {dirtyFields.subject}
            <TextField
              id="message"
              {...register("message", { required: true })}
              label="Message *"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={5}
              className={dirtyFields.message ? "is-dirty" : ""}
            />
            {dirtyFields.message}
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Message sent"
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
    </div>
  );
}
