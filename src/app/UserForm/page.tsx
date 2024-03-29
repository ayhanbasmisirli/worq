"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { setFormData } from "../../../store/slice";
import Image from "next/image";
import Step from "../../Components/Step";
import Error from "../../Components/Error";
import { FormInputs } from "../../../src/types";
import { userFormfields, imgUrl } from "../../assets/enum";

function UserForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    dispatch(setFormData(data));
    router.push("/CommerceForm");
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="card card-side w-120 bg-base-100 shadow-xl m-10">
        <figure>
          <Image
            src={imgUrl}
            height={56}
            width={56}
            alt="logo"
            className="p-2 m-2"
            priority={true}
          />
        </figure>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            {userFormfields.map(({ name, label, type }) => (
              <label
                key={name}
                className="input input-bordered flex items-center gap-2 mb-2"
              >
                {label}:
                <input
                  {...register(
                    name as "firstname" | "lastname" | "email" | "phone",
                    { required: true }
                  )}
                  type={type}
                  className="grow"
                  placeholder={label}
                />
              </label>
            ))}
            <div className="card-actions justify-end">
              <input
                type="submit"
                value="Next"
                style={{ backgroundColor: "#016271" }}
                className="btn btn-square px-10 bg-color-['#016271'] text-white"
              />
            </div>
          </form>
        </div>
      </div>
      <Step path={pathname} />
      {userFormfields.map(({ name }) => (
        <Error key={name} fieldName={name} errors={errors} />
      ))}
    </div>
  );
}

export default UserForm;
