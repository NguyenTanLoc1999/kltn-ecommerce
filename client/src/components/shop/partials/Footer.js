import React, { Fragment } from "react";
import paypalIcon from "../imagesIcon/paypal.jpg"
import visaIcon from "../imagesIcon/visa.png"

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        {/* Develop & Design Hasan-py © Copyright {moment().format("YYYY")} */}
        <div className="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>NT - LP SHOP
              </h6>
              <p>
              Our store is developed in Vietnam with a source of fashion goods, new designs, attractive colors and best materials.
              </p>
              <div className="w-full flex justify-between">
              {/* eslint-disable-next-line  */}
                <img src={paypalIcon} className="w-32 h-24"/>
                {/* eslint-disable-next-line  */}
                <img src={visaIcon} className="w-32 h-24"/>
              </div>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Categories
              </h6>
              <p>
                <a href="#!" class="text-reset">Formal Shirts</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Casual Shirts</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Jeans</a>
              </p>
              <p>
                <a href="#!" class="text-reset">T-shirt</a>
              </p>
            </div>


            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                Information
              </h6>
              <p>
                <a href="#!" class="text-reset">Contact Us</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Term & Condition</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Shipping & Delivery</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Private Policy</a>
              </p>
            </div>


            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> Thu Duc, Tp HCM</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                ntlpshop@gmail.com
              </p>
              <p><i class="fas fa-phone me-3"></i> 0965-852-025</p>
              <p><i class="fas fa-print me-3"></i> 0274-3567-225</p>
            </div>
          </div>
        </div>
        NT - LP SHOP © Copyright 2022
      </footer>
    </Fragment>
  );
};

export default Footer;
