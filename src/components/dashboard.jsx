import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <>
      <h1 className="text-center">DashBoard</h1>
      <div className="row mt-3">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Total Orders</h5>
              <p className="card-text">List of Previous orders</p>
              <Link to="/" className="btn btn-sm btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Total Orders</h5>
              <p className="card-text">List of Previous orders</p>
              <Link to="/" className="btn btn-sm btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Total Orders</h5>
              <p className="card-text">List of Previous orders</p>
              <Link to="/" className="btn btn-sm btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Total Orders</h5>
              <p className="card-text">List of Previous orders</p>
              <Link to="/" className="btn btn-sm btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
