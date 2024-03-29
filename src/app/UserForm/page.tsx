"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFormData } from "../../../store/slice";
import Image from "next/image";

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = (data) => {
    dispatch(setFormData(data));
    router.push("/CommerceForm");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card  card-side w-120 bg-base-100 shadow-xl m-50">
        <figure>
          <Image
            src="https://assets-global.website-files.com/629898333cd8b9941adf699f/62baa0b7a5a9f2e43f60623b_worq-company-logo-1.svg"
            height={56}
            width={56}
            alt="logo"
            className="p-2 m-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">User Info</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              First Name:
              <input
                {...register("firstname", { required: true })}
                type="text"
                className="grow"
                placeholder="First Name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 mb-2">
              Last Name:
              <input
                {...register("lastname", { required: true })}
                type="text"
                className="grow"
                placeholder="Last Name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 mb-2">
              Email:
              <input
                {...register("email", { required: true })}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Phone
              <input
                {...register("phone", { required: true })}
                type="text"
                className="grow"
                placeholder="Phone"
              />
            </label>
            <div className="card-actions justify-end">
              <input
                type="submit"
                value="Next"
                style={{ backgroundColor: "#016271" }}
                className="btn btn-square  px-10 bg-color-['#016271'] text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
