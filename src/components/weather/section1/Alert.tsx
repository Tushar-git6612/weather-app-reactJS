import { Fragment, memo, useContext } from "react";
import { WeatherContext } from "../../../context/state";

function Alert() {
  // contextapi state of notification message and type
  const { notification }: any = useContext(WeatherContext);

  return (
    <Fragment>
      {notification.message && (
        <div style={{ position: "absolute", top: "10", width: "100%" }}>
          <div
            className={`alert text-capitalize alert-${notification?.type}`}
            role="alert"
          >
            {notification?.message}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default memo(Alert);
