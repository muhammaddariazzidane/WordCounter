import React from "react";

export default function Alert({ message }) {
  return (
    <>
      <div className="toast toast-top top-16 toast-center">
        <div
          className={`alert w-full ${
            message
              ? "alert-success  py-2.5  lg:hidden md:hidden sm:hidden block xl:hidden w-44 text-white"
              : "alert-warning py-2.5"
          } rounded-md`}
        >
          <span className="text-[0.9rem]">
            {message ? message : "Masukan minimal 1 Karakter !"}
          </span>
        </div>
      </div>
    </>
  );
}
