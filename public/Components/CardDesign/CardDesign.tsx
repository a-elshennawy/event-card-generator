"use client";
import { useCardStore } from "@/public/Store/useCardStore";

export default function CardDesign() {
  const {
    logo,
    companyName,
    name,
    position,
    website,
    selectedFont,
    height,
    width,
    borderRadius,
    backgroundColor_one,
    backgroundColor_two,
    gradientDegree,
    textColor,
    primaryColor,
    secondaryColor,
    thirdColor,
  } = useCardStore();

  const logoUrl = logo ? URL.createObjectURL(logo) : null;

  return (
    <div className="col-5 cardContainer text-center m-0">
      <div
        className="cardDesign"
        style={{
          fontFamily: selectedFont,
          background: `linear-gradient(${gradientDegree}deg, ${backgroundColor_one},${backgroundColor_two})`,
          color: textColor,
          height: `${height}px`,
          width: `${width}px`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        <div
          className="shapeOne"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div
          className="shapeTwo"
          style={{ backgroundColor: secondaryColor }}
        ></div>
        <div
          className="shapeThree"
          style={{ backgroundColor: thirdColor }}
        ></div>
        <div className="mainInfo m-0 p-0">
          <div className="logo mb-3 p-0">
            {logoUrl && (
              <img
                src={logoUrl}
                alt="Company Logo"
                style={{ maxWidth: "200px", marginBottom: "20px" }}
              />
            )}
            {!logoUrl && <h1 className="m-0 placeholder-text">logo</h1>}
            <h1 className={`m-0 ${!companyName ? "placeholder-text" : ""}`}>
              {companyName || "organization name"}
            </h1>
          </div>
          <h1 className={`m-0 p-0 pb-1 ${!name ? "placeholder-text" : ""}`}>
            {name || "person name"}
          </h1>

          <h3
            className={`mb-3 p-0 pb-1 ${!position ? "placeholder-text" : ""}`}
          >
            {position || "person position"}
          </h3>
        </div>

        <p
          className={`link ${!website ? "placeholder-text" : ""}`}
          style={{
            color: textColor,
          }}
        >
          {website || "www.companyWebsite.com"}
        </p>
      </div>
    </div>
  );
}
