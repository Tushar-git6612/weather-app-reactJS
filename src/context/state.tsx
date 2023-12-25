import { createContext, useState } from "react";
import axios from "axios";
import Apikey from "../components/weather/section1/Apikey";

export const WeatherContext: any = createContext("");

// type of notificationfunction's object
type notificationType = {
  message: string | undefined;
  type: string | undefined;
}

const ApiContext = (props: any) => {
  // state of weather response which is store the response that come from server
  const [weatherReport, setWeatherReport] = useState("");
  //  notificationfunction's object
  const [notification, setNotification] = useState<notificationType>({
    message: "",
    type: "",
  });

  // notification function that call for show any notification , warning , etc. on screen
  const notificationFunction = (
    msg: string | undefined,
    type: string | undefined
  ) => {
    setNotification({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setNotification({
        message: "",
        type: "",
      });
    }, 2000);
  };

  // function that call by user for get weather report
  const fetchWeatherReport = async (city: any) => {
    const response: any = await axios
      .get(
        `http://api.weatherstack.com/current?access_key=${Apikey}&query=${city}`
      )
      .catch((error:any) => {
        notificationFunction(error.message,"danger");
      });
    if (response) {
      setWeatherReport(response.data);
    } else if (!navigator.onLine) {
      notificationFunction("please check your internet connection....", "danger");
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherReport,
        fetchWeatherReport,
        notificationFunction,
        notification,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default ApiContext;
