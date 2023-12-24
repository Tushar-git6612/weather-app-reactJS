import { Fragment } from "react";
import Weathercard from "../Weathercard";

function Section() {
  return (
    <Fragment>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
          <Weathercard />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Section;
