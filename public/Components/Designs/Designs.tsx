"use client";
import { useState } from "react";
import { useCardStore } from "@/public/Store/useCardStore";
import { MdRotate90DegreesCw } from "react-icons/md";

export default function Designs() {
  const [activeTab, setActiveTab] = useState<
    "templates" | "colors" | "dimensions"
  >("colors");
  const {
    backgroundColor_one,
    backgroundColor_two,
    textColor,
    primaryColor,
    secondaryColor,
    gradientDegree,
    thirdColor,
    height,
    width,
    borderRadius,
    setBackgroundColor_one,
    setBackgroundColor_two,
    setGradientDegree,
    setTextColor,
    setPrimaryColor,
    setSecondaryColor,
    setThirdColor,
    setHeight,
    setWidth,
    setBorderRadius,
  } = useCardStore();
  return (
    <>
      <div className="col-3 designSection m-0 p-3">
        <div className="switchTab text-center mb-2 p-2">
          <button
            className={activeTab == "templates" ? "selected" : ""}
            onClick={() => setActiveTab("templates")}
          >
            Templates
          </button>
          <button
            className={activeTab == "colors" ? "selected" : ""}
            onClick={() => setActiveTab("colors")}
          >
            Colors
          </button>
          <button
            className={activeTab == "dimensions" ? "selected" : ""}
            onClick={() => setActiveTab("dimensions")}
          >
            Dimensions
          </button>
        </div>

        {activeTab === "templates" && (
          <div className="designInnerSection text-center p-3 m-0">
            <h3 className="py-2 m-0">SOON !!!</h3>
          </div>
        )}

        {activeTab === "colors" && (
          <div className="designInnerSection p-3 m-0">
            <div className="inputContainer mb-3 p-2">
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
            <div className="inputContainer mb-3 p-2">
              <label>background color - 2</label>
              <input
                type="color"
                value={backgroundColor_two}
                onChange={(e) => setBackgroundColor_two(e.target.value)}
              />
            </div>
            <div className="inputContainer mb-3 p-2">
              <label>text color</label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </div>
            <div className="inputContainer mb-3 p-2">
              <label>primary color</label>
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
            </div>
            <div className="inputContainer mb-3 p-2">
              <label>secondery color</label>
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
              />
            </div>
            <div className="inputContainer p-2">
              <label>third color</label>
              <input
                type="color"
                value={thirdColor}
                onChange={(e) => setThirdColor(e.target.value)}
              />
            </div>
          </div>
        )}

        {activeTab === "dimensions" && (
          <div className="designInnerSection text-center p-3 m-0">
            <div className="inputContainer mb-3 p-2">
              <label>height</label>
              <input
                className="dimensionInp"
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
              <strong className="ms-2"> px</strong>
            </div>
            <div className="inputContainer mb-3 p-2">
              <label>width</label>
              <input
                className="dimensionInp"
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
              />
              <strong className="ms-2"> px</strong>
            </div>
            <div className="inputContainer p-2">
              <label>border radius</label>
              <input
                className="dimensionInp"
                type="number"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
              />
              <strong className="ms-2"> px</strong>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
