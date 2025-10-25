import { create } from "zustand";

// it's weirds as it's type definition for the store
// if you use javascript you can ignore this part
interface UserCardState {
  logo: File | null;
  companyName: string;
  name: string;
  position: string;
  website: string;
  selectedFont: string;
  fontSize: number;
  height: number;
  width: number;
  borderRadius: number;
  backgroundColor_one: string;
  backgroundColor_two: string;
  gradientDegree: number;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
  setLogo: (logo: File | null) => void;
  setCompanyName: (companyName: string) => void;
  setName: (name: string) => void;
  setPosition: (position: string) => void;
  setWebsite: (website: string) => void;
  setSelectedFont: (font: string) => void;
  setFontSize: (size: number) => void;
  setHeight: (height: number) => void;
  setWidth: (width: number) => void;
  setBorderRadius: (radius: number) => void;
  setBackgroundColor_one: (color: string) => void;
  setBackgroundColor_two: (color: string) => void;
  setGradientDegree: (degree: number) => void;
  setTextColor: (color: string) => void;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
  setThirdColor: (color: string) => void;
}

// here to manage initial state and actions (maintainers of the store)
export const useCardStore = create<UserCardState>((set) => ({
  logo: null,
  companyName: "",
  name: "",
  position: "",
  website: "",
  selectedFont: "Roboto",
  fontSize: 16,
  height: 800,
  width: 600,
  borderRadius: 10,
  backgroundColor_one: "#000",
  backgroundColor_two: "#fff",
  gradientDegree: 45,
  textColor: "#fff",
  primaryColor: "#fff",
  secondaryColor: "#fff",
  thirdColor: "#000",
  setLogo: (logo) => set({ logo }),
  setCompanyName: (companyName) => set({ companyName }),
  setName: (name) => set({ name }),
  setPosition: (position) => set({ position }),
  setWebsite: (website) => set({ website }),
  setSelectedFont: (selectedFont) => set({ selectedFont }),
  setFontSize: (fontSize) => set({ fontSize }),
  setHeight: (height) => set({ height }),
  setWidth: (width) => set({ width }),
  setBorderRadius: (borderRadius) => set({ borderRadius }),
  setBackgroundColor_one: (backgroundColor_one) => set({ backgroundColor_one }),
  setBackgroundColor_two: (backgroundColor_two) => set({ backgroundColor_two }),
  setGradientDegree: (gradientDegree) => set({ gradientDegree }),
  setTextColor: (textColor) => set({ textColor }),
  setPrimaryColor: (primaryColor) => set({ primaryColor }),
  setSecondaryColor: (secondaryColor) => set({ secondaryColor }),
  setThirdColor: (thirdColor) => set({ thirdColor }),
}));
