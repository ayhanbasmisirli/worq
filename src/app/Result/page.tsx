"use client";

import React from "react";
import { useSelector } from "react-redux";

function FormSuccesion() {
  const result = useSelector((state) => state.UserInfoSlice.formData);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://assets-global.website-files.com/629898333cd8b9941adf699f/62baa0b7a5a9f2e43f60623b_worq-company-logo-1.svg"
            alt="logo"
            className="rounded-xl"
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
