"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../store/slice";
import Image from "next/image";
function CommerceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = (data) => {
    dispatch(setFormData(data));
    router.push("/Result");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card  card-side w-120 bg-base-100 shadow-xl">
        <figure>
          <Image
            src="https://assets-global.website-files.com/629898333cd8b9941adf699f/62baa0b7a5a9f2e43f60623b_worq-company-logo-1.svg"
            width={10}
            height={10}
            alt="logo"
            className="p-2 m-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Commerce Info</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Commercial URL:
              <input
                {...register("url", { required: true })}
                type="text"
                className="grow"
                placeholder="Commercial URL"
                id="url"
              />
            </label>

            <label className="border border-r p-2 rounded-lg flex items-center gap-2 mb-2">
              Platform:
              <select
                {...register("commerceplatform", { required: true })}
                className="select select-info w-full max-w-xs"
              >
                <option disabled selected>
                  Select Platform
                </option>
                <option value="Hepsiburada">Hepsi Burada</option>
                <option value="Amazon">Amazon</option>
                <option value="Trendyol">Trendyol</option>
              </select>
            </label>
            <div className="card-actions justify-end">
              <input
                type="submit"
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

export default CommerceForm;
