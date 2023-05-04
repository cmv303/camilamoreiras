import React from 'react';
import { useForm, useFormState } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: ""
    }
  });
  const { dirtyFields } = useFormState({
    control
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className='section' id='contactPage'>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        {dirtyFields.firstName && <p>Field is dirty.</p>}
        <input type="submit" />
      </form>
    </div>
  );
}