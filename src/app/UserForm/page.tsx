"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFormData } from "../../../store/slice";

function UserForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = (data) => {
    dispatch(setFormData(data));
    router.push("/CommerceForm");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>User Info Form </h2>
      <label>
        First Name:
        <input {...register("firstname") } />
      </label>
      <label>
        Last Name:
        <input {...register("lastname")} />
      </label>
      <label>
        Email:
        <input {...register("email")} />
      </label>
      <label>
        Phone
        <input {...register("phone")} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default UserForm;
