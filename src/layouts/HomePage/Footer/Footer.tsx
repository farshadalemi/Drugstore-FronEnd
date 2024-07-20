import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">About Us</h5>
            <p>
              At our online drugstore, we are dedicated to providing high-quality
              healthcare products and services to our customers. We strive to
              deliver a convenient and reliable shopping experience.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Products</h5>
            <p>
              <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                Prescription Medications
              </a>
            </p>
            <p>
              <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                Over-the-Counter Drugs
              </a>
            </p>
            <p>
              <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                Health & Beauty
              </a>
            </p>
            <p>
              <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                Baby & Child Care
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p>
              <i className="fas fa-home mr-3"></i> Fitchburg, MA 10012, US
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 ">
            <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
            <div className="justify-content-center justify-content-md-start ">
              <a href="#" className="text-dark mr-4" style={{ textDecoration: 'none' }}>
                <i className="bi bi-facebook fs-2 m-2"></i>
              </a>
              <a href="#" className="text-dark mr-4" style={{ textDecoration: 'none' }}>
                <i className="bi bi-twitter-x fs-2 m-2"></i>
              </a>
              <a href="#" className="text-dark mr-4" style={{ textDecoration: 'none' }}>
                <i className="bi bi-instagram fs-2 m-2"></i>
              </a>
              <a href="#" className="text-dark mr-4" style={{ textDecoration: 'none' }}>
                <i className="bi bi-linkedin fs-2 m-2"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved by:
              <a href="#" style={{ textDecoration: 'none' }}>
                <strong className="text-dark">Online Drugstore</strong>
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

