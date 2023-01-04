import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="container px-4 py-3">
      <div className="col-12 col-sm-12 col-md-6 col-xxl-6 mx-auto py-3">
        <p className=" display-6 fw-normal text-center fs-2">
          Having Problems ? Get Support
        </p>
        <p className="px-3">
          <small>
            Our dedicated support team is ready to solve your problem within 24
            hours. Also join our Facebook Group to meet , learn and create
            network with other students
          </small>
        </p>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-xxl-6 mx-auto">
          <form>
            <div class="mb-3">
              <label htmlFor="exampleFormControlInput1" class="form-label">
                Your Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label htmlFor="exampleFormControlTextarea1" class="form-label">
                Details of Your Problem
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon04"
              >
                Upload Screenshot
              </button>
            </div>

            <button className="btn btn-lg btn-outline-secondary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
