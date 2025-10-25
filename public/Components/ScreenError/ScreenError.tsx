import { RiErrorWarningFill } from "react-icons/ri";

export default function ScreenError() {
  return (
    <>
      <div className="container col-12 text-center text-white">
        <div className="inner p-3">
          <h1>
            This application requires a larger screen. Please access it from a
            desktop or laptop computer.
          </h1>
          <hr />
          <h1 className="mb-3">
            يتطلب هذا الموقع شاشه اكبر لاستخدامه بشكل أفضل
          </h1>
          <RiErrorWarningFill />
        </div>
      </div>
    </>
  );
}
