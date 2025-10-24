"use client";
import CardDesign from "@/public/Components/CardDesign/CardDesign";
import Designs from "@/public/Components/Designs/Designs";
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
      <div className="container-fluid row justify-content-between align-items-start py-4 m-0">
        <SideBar />
        <CardDesign />
        <Designs />
      </div>
    </>
  );
}
