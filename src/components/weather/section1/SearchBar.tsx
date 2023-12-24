import { Fragment, memo, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../../../context/state";

function SearchBar({ func }: { func: (value: string | undefined) => void }) {
  // state of search input
  const [search, setSearch] = useState<string | undefined>("");
  // get notification function from react contextapi state;
  const { notificationFunction }: any = useContext(WeatherContext);

  // search input debouncing function
  const stateChanger = (e: any) => {
    setSearch(e.target.value);
  };
  const debouncing = (callback: any) => {
    let timeOutId: any;
    return function (argg: any) {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
      timeOutId = setTimeout(() => {
        callback(argg);
      }, 700);
    };
  };
  // debouncing funtion 
  const handleChanger = debouncing(stateChanger);

  // submit search state and hit the request on server
  const submit = () => {
    if (search) {
      func(search);
    } else {
      // call the notification function if user not type country name in input
      notificationFunction("please enter country name", "danger");
    }
  };

  return (
    <Fragment>
      <div className="input-group rounded mb-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder="enter city name"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleChanger}
          name="search input"
        />
        <Link to="/" type="button" onClick={submit}>
          <span className="input-group-text border-0 fw-bold" id="search-addon">
            Check!
          </span>
        </Link>
      </div>
    </Fragment>
  );
}

export default memo(SearchBar);
