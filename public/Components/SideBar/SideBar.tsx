"use client";
import { useEffect, useRef, useState } from "react";
import { useCardStore } from "@/public/Store/useCardStore";
import { FaRegImage } from "react-icons/fa";

export default function SideBar() {
  const {
    companyName,
    name,
    position,
    website,
    selectedFont,
    setLogo,
    setCompanyName,
    setName,
    setPosition,
    setWebsite,
    setSelectedFont,
  } = useCardStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fonts, setFonts] = useState<Record<string, string>>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    fetch("/API/fonts.json")
      .then((res) => res.json())
      .then((data) => setFonts(data.fonts))
      .catch((err) => console.error("Error fetching fonts:", err));
  });

  return (
    <>
      <div className="sideBar col-3 text-start m-0 p-3">
        <div className="inputContainer mb-3 p-2">
          <label>upload your logo</label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*"
          />
          <button
            type="button"
            onClick={handleClickUpload}
            className="uploadBtn"
          >
            Upload Logo <FaRegImage />
          </button>
        </div>
        <div className="inputContainer mb-3 p-2">
          <label>your organization name</label>
          <input
            type="text"
            placeholder="organization name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="inputContainer mb-3 p-2">
          <label>person name</label>
          <input
            type="text"
            placeholder="person name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputContainer mb-3 p-2">
          <label>person position</label>
          <input
            type="text"
            placeholder="person position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="inputContainer mb-3 p-2">
          <label>organization website (optional)</label>
          <input
            type="text"
            placeholder="your organization website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="inputContainer p-2">
          <label>font </label>
          <div className="dropend">
            <button
              className="fontBtn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontFamily: selectedFont }}
            >
              {selectedFont}
            </button>
            <ul className="dropdown-menu">
              {Object.entries(fonts).map(([key, value]) => (
                <li
                  className="dropdown-item"
                  key={key}
                  value={selectedFont}
                  onClick={() => setSelectedFont(value)}
                  style={{ fontFamily: value }}
                >
                  {key}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
