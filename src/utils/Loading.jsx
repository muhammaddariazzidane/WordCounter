import React from "react";

export default function Loading() {
  return (
    <>
      <div className="absolute w-full min-h-screen top-0  z-50">
        <div className="flex justify-center h-full min-h-screen items-center">
          <span className="loading loading-dots loading-lg text-primary"></span>
        </div>
      </div>
    </>
  );
}
