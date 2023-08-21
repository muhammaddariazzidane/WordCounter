import React from "react";

export default function Alert() {
  return (
    <>
      <div className="toast toast-top top-16 toast-center">
        <div className="alert w-full alert-warning rounded-md">
          <span>Masukan minimal 1 Karakter !</span>
        </div>
      </div>
    </>
  );
}
