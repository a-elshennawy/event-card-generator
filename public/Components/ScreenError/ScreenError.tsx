import { RiErrorWarningFill } from "react-icons/ri";

export default function ScreenError() {
  return (
    <>
      <div className="inner col-12 text-center text-white m-0 p-3 m-0">
        <h4>
          The website requires a larger screen. Please access it from a desktop
          or laptop computer.
        </h4>
        <hr />
        <h4 className="mb-3">يتطلب الموقع شاشه اكبر لإستخدامه بشكل أفضل</h4>
        <RiErrorWarningFill />
      </div>
    </>
  );
}
