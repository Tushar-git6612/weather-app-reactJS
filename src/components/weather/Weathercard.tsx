import { Fragment, memo, useCallback } from "react";
import SearchBar from "./section1/SearchBar";
import { useContext } from "react";
import { WeatherContext } from "../../context/state";

function Weathercard() {
  // get weatherReport and fetchWeatherReport function from contextapi  
  const { weatherReport, fetchWeatherReport }: any = useContext(WeatherContext);

  // is function send to seachbar for get searchinput value 
  const searchFunc = useCallback(
    (value: string | undefined) => {
      if(value){
        fetchWeatherReport(value);
      }
    },
    [fetchWeatherReport]
  );
  

  return (
    <Fragment>
      <div className="col-md-8 col-lg-6 ">
        <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
        {/* search input */}
        <SearchBar func={searchFunc} />
        {/* search input */}
        {weatherReport?.location ? (
          <div className="card shadow-0 border">
            <div className="card-body p-4">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="mb-1 sfw-normal">
                  {" "}
                  {weatherReport?.location?.name}{" "}
                  {weatherReport?.location?.country}
                </h4>
              </div>
              <p className="mb-2">
                Current temperature:{" "}
                <strong>{weatherReport?.current?.temperature}°C</strong>
              </p>
              <p>
                Feels like:{" "}
                <strong>{weatherReport?.current?.feelslike}°C</strong>
              </p>
              <p>
                humidity <strong>{weatherReport?.current?.humidity}</strong>,
                cloudcover <strong>{weatherReport?.current?.cloudcover}</strong>
              </p>

              <div className="d-flex flex-row align-items-center">
                <p className="mb-0 me-4 " style={{ fontWeight: "bold" }}>
                  {weatherReport?.location?.localtime}
                </p>
                <i className="fas fa-cloud fa-3x" style={{ color: "#eee" }}></i>
              </div>
            </div>
          </div>
        ) : weatherReport?.error?.info ? (
          <div className="tex-center">
            {`error: ${weatherReport?.error?.code} ${"   "} ${
              weatherReport?.error?.info
            } `}
          </div>
        ) : (
          <div className="text-center">No Forecast</div>
        )}
      </div>
    </Fragment>
  );
}

export default memo(Weathercard);
