import React, {  useState, Fragment } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Layout from "../layout";

const ForgotPasswordComponent = () => {
  const apiURL = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${apiURL}/api/password-reset`;
      const { data } = await axios.post(url, { email });
      // setMsg(data.message);
      // setError("");
      toast.success(data.message)
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // setError(error.response.data.message);
        toast.error(error.response.data.message)
      }
    }
  };
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center my-32">
        <div className="w-11/12 md:w-3/5 lg:w-1/3">
          <h1 className="my-2 text-2xl font-bold text-center">Forgot Password</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name">
                Email
                <span className="text-sm text-gray-600 ml-1">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className={`px-4 py-2 focus:outline-none border`}
              />
              {/* {error && <div className="text-xl text-red-500">{error}</div>} */}
              {/* {msg && <div className="border-green-500">{msg}</div>} */}
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
    </Fragment>
  );
}

const ForgotPassword = () => {
  return <Layout children={<ForgotPasswordComponent />} />;
};

export default ForgotPassword;