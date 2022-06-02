import React, { Fragment } from "react";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        {/* Develop & Design Hasan-py © Copyright {moment().format("YYYY")} */}
        {/* <div className="container">
        <div className="row" style={{display:"flex", justifyContent:"space-between"}}>
          <div className="col-sm-4">
            <div>
              <div>NT - LP Shop</div>
            </div>
          </div>
          <div className="col-sm-4">asasdsad</div>
          <div className="col-sm-4">asdsd</div>
        </div>
        </div> */}
      </footer>
    </Fragment>
  );
};

export default Footer;
