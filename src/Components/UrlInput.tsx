import React from "react";

function UrlInput({ register }) {
  return (
    <div className="border border-r p-2 rounded-lg flex items-center gap-2 mb-2">
      <label htmlFor="url" className="label">
        Commercial URL:
      </label>
      <input
        id="url"
        type="text"
        {...register("url", { required: true })}
        className="input"
        placeholder="Commercial URL"
      />
    </div>
  );
}

export default UrlInput;
