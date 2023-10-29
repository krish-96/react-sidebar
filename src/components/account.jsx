import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <>
      <div className="container row">
        <h1 className="h1 text-center">Your Account</h1>
        <p className="text-center mt-3">
          Welcome back,{" "}
          <strong>{sessionStorage.getItem("user", "UnKnown")}</strong>! Here,
          you can manage your account settings, view your order history, and
          update your personal information.
        </p>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 py-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Personal Information</h5>
              <p className="card-text">
                Update your personal details, including your name, email
                address, and contact information.
              </p>
              <div className="text-center">
                <Link to="/personal-info" className="btn btn-primary btn-sm">
                  Edit Personal Information
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 py-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Change Password</h5>
              <p className="card-text">
                For security purposes, you can change your account password at
                any time. Make sure to choose a strong and unique password to
                protect your account.
              </p>
              <div className="text-center">
                <Link to="/personal-info" className="btn btn-primary btn-sm">
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 py-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order History</h5>
              <p className="card-text">
                View a history of your past orders, including order dates, order
                numbers, and a summary of the items you've purchased. You can
                also track the status of current orders here.
              </p>
              <div className="text-center">
                <Link to="/personal-info" className="btn btn-primary btn-sm">
                  View Order History
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 py-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Address Book</h5>
              <p className="card-text">
                Manage your shipping and billing addresses. You can add, edit,
                or delete addresses to simplify the checkout process when making
                a purchase.
              </p>
              <div className="text-center">
                <Link to="/personal-info" className="btn btn-primary btn-sm">
                  Manage Addresses
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 py-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Notifications and Subscriptions</h5>
              <p className="card-text">
                Control your email notifications and subscription preferences.
                You can choose to receive updates on promotions, new arrivals,
                and important account-related information.
              </p>
              <div className="text-center">
                <Link to="/personal-info" className="btn btn-primary btn-sm">
                  Manage Subscriptions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 py-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Log Out</h5>
              <p className="card-text">
                If you wish to log out of your account, you can do so here.
                Logging out ensures the security of your account when using a
                shared or public computer.
              </p>
              <div className="text-center">
                <Link to="/personal-info" className="btn btn-primary btn-sm">
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
