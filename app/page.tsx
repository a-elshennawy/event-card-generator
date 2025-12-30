"use client";
import CardDesign from "@/public/Components/CardDesign/CardDesign";
import Designs from "@/public/Components/Designs/Designs";
import HeadBar from "@/public/Components/HeadBar/HeadBar";
import ScreenError from "@/public/Components/ScreenError/ScreenError";
import SideBar from "@/public/Components/SideBar/SideBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [loading, setLoading] = useState(true);

  // to import bootstrap js
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap loaded"))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1400);
    };

    checkScreenSize();
    setLoading(false);

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (loading) {
    return null;
  }

  if (!isLargeScreen) {
    return (
      <>
        <ScreenError />
      </>
    );
  }

  return (
    <>
      <div className="row justify-content-evenly gap-1 align-items-start m-0 p-0">
        <HeadBar />
        <SideBar />
        <CardDesign />
        <Designs />
      </div>
    </>
  );
}
