"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../store/slice";
import Image from "next/image";
import Step from "../../Components/Step";
import { usePathname } from "next/navigation";
import UrlInput from "../../Components/UrlInput";
import { imgUrl, platforms } from "../../assets/enum";
import Error from "../../Components/Error";
import { CommerceFormInputs } from "../../../src/types";

function CommerceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommerceFormInputs>();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const onSubmit: SubmitHandler<CommerceFormInputs> = (data) => {
    dispatch(setFormData(data));
    router.push("/Result");
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="card card-side w-120 bg-base-100 shadow-xl mb-10">
        <figure>
          <Image
            src={imgUrl}
            width={56}
            height={56}
            alt="logo"
            className="p-2 m-2"
            priority
          />
        </figure>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <UrlInput register={register} />
            <div className="border border-r p-2 rounded-lg flex items-center gap-2 mb-2 place-content-between">
              <label htmlFor="commerceplatform" className="label">
                Platform:
              </label>
              <select
                id="commerceplatform"
                {...register("commerceplatform", { required: true })}
                className="select select-bordered w-full max-w-xs"
                defaultValue={"Select Platform"}
              >
                <option disabled>Select Platform</option>
                {platforms.map((platform) => (
                  <option key={platform.value} value={platform.value}>
                    {platform.label}
                  </option>
                ))}
              </select>
            </div>
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
      <Step path={pathname} />
      <Error fieldName="url" errors={errors} />
    </div>
  );
}
export default CommerceForm;
