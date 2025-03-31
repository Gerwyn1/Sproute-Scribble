"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="w-full min-h-56 flex items-center justify-center flex-col text-lg">
      <h1>Something went wrong! {error.message}</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
