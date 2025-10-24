"use client";
import { useState } from "react";
import { useCardStore } from "@/public/Store/useCardStore";
import { MdRotate90DegreesCw } from "react-icons/md";

export default function Designs() {
  const [activeTab, setActiveTab] = useState<"designs" | "colors">("designs");
  const {
    backgroundColor_one,
    backgroundColor_two,
    textColor,
    primaryColor,
    secondaryColor,
    gradientDegree,
    thirdColor,
    setBackgroundColor_one,
    setBackgroundColor_two,
    setGradientDegree,
    setTextColor,
    setPrimaryColor,
    setSecondaryColor,
    setThirdColor,
  } = useCardStore();
  return (
    <>
      <div className="col-3 designSection m-0 p-3">
        <div className="switchTab text-center mb-2 p-2">
          <button
            className={activeTab == "designs" ? "selected" : ""}
            onClick={() => setActiveTab("designs")}
          >
            Designs
          </button>
          <button
            className={activeTab == "colors" ? "selected" : ""}
            onClick={() => setActiveTab("colors")}
          >
            Colors
          </button>
        </div>
        {activeTab === "colors" && (
          <div className="colorSelections p-3 m-0">
            <div className="colorContainer mb-3 p-2">
              <label>background color - 1</label>
              <input
                type="color"
                value={backgroundColor_one}
                onChange={(e) => setBackgroundColor_one(e.target.value)}
              />
              <input
                className="grDegree"
                type="number"
                value={gradientDegree}
                onChange={(e) => setGradientDegree(Number(e.target.value))}
              />
              <span className="ms-2">
                <MdRotate90DegreesCw />
              </span>
            </div>
            <div className="colorContainer mb-3 p-2">
              <label>background color - 2</label>
              <input
                type="color"
                value={backgroundColor_two}
                onChange={(e) => setBackgroundColor_two(e.target.value)}
              />
            </div>
            <div className="colorContainer mb-3 p-2">
              <label>text color</label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </div>
            <div className="colorContainer mb-3 p-2">
              <label>primary color</label>
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
            </div>
            <div className="colorContainer mb-3 p-2">
              <label>secondery color</label>
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
              />
            </div>
            <div className="colorContainer p-2">
              <label>third color</label>
              <input
                type="color"
                value={thirdColor}
                onChange={(e) => setThirdColor(e.target.value)}
              />
            </div>
          </div>
        )}
        {activeTab === "designs" && (
          <div className="designSelections text-center">
            <h3 className="py-2 m-0">designs will be added soon!!</h3>
          </div>
        )}
      </div>
    </>
  );
}
