"use client";

import React from "react";
import { useSelector } from "react-redux";

function FormSuccesion() {
  const result = useSelector((state) => state.UserInfoSlice.formData);
  return <div>FormSuccesion {JSON.stringify(result)}</div>;
}

export default FormSuccesion;
