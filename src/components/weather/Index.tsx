import { Fragment, useEffect, useContext } from "react";
import Section from "./section1/Section";
import Alert from "./section1/Alert";
import { WeatherContext } from "../../context/state";

function Index() {
  const { notificationFunction }: any = useContext(WeatherContext);

  let num: number = 0;
  useEffect(() => {
    if (num < 1) {
      window.addEventListener("offline", () =>
        notificationFunction("please turn on your internet", "danger")
      );
      window.addEventListener("online", () =>
        notificationFunction("you are online", "success")
      );
      num++;
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Alert />
      <Section />
    </Fragment>
  );
}

export default Index;
