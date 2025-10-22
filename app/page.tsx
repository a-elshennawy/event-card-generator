"use client";
import SideBar from "@/public/Components/SideBar/SideBar";
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
      <div className="row justify-content-center align-items-center py-2 px-1 m-0">
        <div className="col-12 text-center">
          <h4>welcome to your friendly event card designer</h4>
        </div>
      </div>
    </>
  );
}
