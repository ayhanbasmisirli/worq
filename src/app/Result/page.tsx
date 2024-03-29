"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
function FormSuccesion() {
  const result = useSelector((state) => state.UserInfoSlice.formData);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src="https://assets-global.website-files.com/629898333cd8b9941adf699f/62baa0b7a5a9f2e43f60623b_worq-company-logo-1.svg"
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
