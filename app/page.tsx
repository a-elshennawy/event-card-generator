"use client";
import { useEffect } from "react";

export default function Home() {
  // to import bootstrap js
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap loaded"))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>hello guys</h1>
    </>
  );
}
