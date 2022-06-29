import React, { useEffect,useState, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Layout from "../layout";

const ResetPasswordComponent = () => {
  const apiURL = process.env.REACT_APP_API_URL;
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const param = useParams();
  const url = `${apiURL}/api/password-reset/${param.id}/${param.token}`;

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param, url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, { password,cPassword });
      console.log("data",data)
      toast.success(data.message)
      setTimeout(() => {window.location = "/"},5000)
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message)
      }
    }
  };
  return (
    <Fragment>
      {validUrl ? (
        <div className="flex flex-col items-center justify-center my-32">
          <div className="w-11/12 md:w-3/5 lg:w-1/3">
            <h1 className="my-2 text-2xl font-bold text-center">Reset Password</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name">
                  Password
                  <span className="text-sm text-gray-600 ml-1">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  className={`px-4 py-2 focus:outline-none border`}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">
                  Confirm Password
                  <span className="text-sm text-gray-600 ml-1">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setCpassword(e.target.value)}
                  value={cPassword}
                  required
                  className={`px-4 py-2 focus:outline-none border`}
                />
              </div>
              <button type="submit" style={{ background: "blue" }}
                className="font-medium px-4 py-2 text-white text-center cursor-pointer">
                Submit
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            </form>
          </div>
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

const ResetPassword = () => {
  return <Layout children={<ResetPasswordComponent />} />;
};

export default ResetPassword;