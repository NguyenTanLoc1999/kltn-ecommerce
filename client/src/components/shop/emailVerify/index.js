import React, { useEffect, useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../imagesIcon/success.png";
import Layout from "../layout";

const EmailVerifyComponent = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  const apiURL = process.env.REACT_APP_API_URL;
  const verifyEmailUrl = async () => {
    try {
      const url = `${apiURL}/api/${param.id}/verify/${param.token}`;
      const { data } = await axios.get(url);
      console.log(data);
      setValidUrl(true);
    } catch (error) {
      console.log(error);
      setValidUrl(false);
    }
  };
  useEffect(() => {
    verifyEmailUrl();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {validUrl ? (
        <div className="flex flex-col items-center justify-center my-32">
          <img src={success} alt="success_img" />
          <h1 className="my-2 text-2xl font-bold">Email verified successfully</h1>
          <Link to="/">
            <button className="text-center text-xl bg-blue-300 rounded-lg px-4 py-2">Home page</button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center my-32">
          <span>
            <svg
              className="w-32 h-32 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className="text-center text-gray-700 text-4xl font-bold">
            404 not found
          </span>
        </div>

      )}
    </Fragment>
  );
}

const EmailVerify = () => {
  return <Layout children={<EmailVerifyComponent />} />;
};

export default EmailVerify;