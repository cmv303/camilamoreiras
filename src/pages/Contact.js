import React from "react";
import { useForm, useFormState } from "react-hook-form";
import "../styles/Contact.css";

export default function Contact() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
    },
  });
  const { dirtyFields } = useFormState({
    control,
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="section" id="contactPage">
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor='"firstName'>First Name *</label>
            <input
              id="firstName"
              {...register("firstName", { required: true })}
              type="text"
              placeholder="First Name"
              className={`form-control ${
                dirtyFields.firstName ? "is-dirty" : ""
              }`}
            />
            {dirtyFields.firstName && <p>Field is dirty.</p>}
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              {...register("lastName", { required: true })}
              type="text"
              placeholder="Last Name"
              className={`form-control ${
                dirtyFields.lastName ? "is-dirty" : ""
              }`}
            />
            {dirtyFields.lastName && <p>Field is dirty.</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            type="email"
            placeholder="Email Address"
            className={`form-control ${dirtyFields.email ? 'is-dirty' : ''}`}
          />
          {dirtyFields.email && <p>Field is dirty.</p>}
        </div>
        <br></br>
        <br></br>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            id="subject"
            {...register("subject", { required: true })}
            type="text"
            placeholder="Subject"
            className={`form-control ${dirtyFields.subject ? 'is-dirty' : ''}`}
          />
          {dirtyFields.subject && <p>Field is dirty.</p>}
        </div>
        <br></br>
        <br></br>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            rows={5}
            placeholder="Enter your message"
            className={`form-control ${dirtyFields.message ? 'is-dirty' : ''}`}
          />
          {dirtyFields.message && <p>Field is dirty.</p>}
        </div>

        <input type="submit" className="btn btn-primary" value="Send Message" />
      </form>
    </div>
  );
}
