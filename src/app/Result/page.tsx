"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { imgUrl } from "@/assets/enum";
import { RootState } from "@/types";
function FormSuccesion() {
  const result = useSelector(
    (state: RootState) => state.UserInfoSlice.formData
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={imgUrl}
            height={128}
            width={256}
            alt="logo"
            className="p-2 m-2"
            priority={true}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"></h2>
          <p>Başvurunuz Tamamlandı</p>
          <p>Ad: {result.firstname}</p>
          <p>Soyad: {result.lastname}</p>
          <p>Email: {result.email}</p>
          <p>Telefon: {result.phone}</p>
          <p>URL: {result.url}</p>
          <p>Platform: {result.commerceplatform}</p>
        </div>
      </div>
    </div>
  );
}

export default FormSuccesion;
