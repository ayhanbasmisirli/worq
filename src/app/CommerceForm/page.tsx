"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../store/slice";

function CommerceForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = (data) => {
    dispatch(setFormData(data));
    router.push("/Result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Commerce Info</h2>
      <label>
        Url:
        <input {...register("Url")} />
      </label>
      <label>
        Commerce Platform
        <select {...register("commerceplatform")}>
          <option value="Hepsiburada">Hepsi Burada</option>
          <option value="Amazon">Amazon</option>
          <option value="Trendyol">Trendyol</option>
        </select>
      </label>
      <input type="submit" />
    </form>
  );
}

export default CommerceForm;
