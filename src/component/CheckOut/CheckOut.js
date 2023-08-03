import React from "react";
import { useNavigate } from "react-router";
import PageTitle from "../PageTitle/PageTitle";

const CheckOut = () => {
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <PageTitle title="Checkout"></PageTitle>
      <p className="display-6 lead mt-3">Billing Info</p>
      <div className="row g-3">
        {/* Billing info */}
        <div className="col-lg-7 col-sm-12 ">
          {/* Promo code */}
          <div className="d-flex justify-content-between align-items-center border rounded bg-light p-4 my-3">
            <p>Use Promo Code</p>
            <div class="input-group w-50 mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="promo code"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Apply
              </button>
            </div>
          </div>
          {/* User info */}
          <div className="border rounded p-4 bg-light my-3">
            <form className="row g-3">
              <div class="col-lg-6 col-12">
                <label for="inputEmail4" class="form-label">
                  Your Name
                </label>
                <input type="text" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-lg-6 col-12">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-lg-6 col-12">
                <label for="inputEmail4" class="form-label">
                  Phone
                </label>
                <input type="text" class="form-control" id="inputEmail4" />
              </div>
            </form>
          </div>
          {/* Payment methods 1*/}
          <div className="border rounded p-4 bg-light my-3">
            <div class="alert alert-primary" role="alert">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Mobile Banking
                </label>
              </div>
            </div>
            {/* Payment Method 2 */}
            <div class="alert alert-primary" role="alert">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Credit or Debit Card
                </label>
              </div>
            </div>
            {/* payment method 3 */}
            <div class="alert alert-primary" role="alert">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Net Banking
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout form */}
        <div className="col-lg-5 col-sm-12 ">
          {/* cart */}
          <div class="col-lg-8 offset-lg-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">3</span>
            </h4>
            {/* selected items */}
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Product name</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Second product</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$8</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Third item</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">−$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
            {/* Place order button */}
            <button
              onClick={handlePlaceOrder}
              className="btn btn-lg btn-outline-primary w-100"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
