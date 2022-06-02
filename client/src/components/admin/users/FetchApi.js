import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

const BearerToken = () =>
  localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt")).token
    : false;
const Headers = () => {
  return {
    headers: {
      token: `Bearer ${BearerToken()}`,
    },
  };
};

export const getAllUser = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/user/all-user`, Headers());
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// export const createUser = async ({
//   cName,
//   cImage,
//   cDescription,
//   cStatus,
// }) => {
//   let formData = new FormData();
//   formData.append("cImage", cImage);
//   formData.append("cName", cName);
//   formData.append("cDescription", cDescription);
//   formData.append("cStatus", cStatus);

//   try {
//     let res = await axios.post(
//       `${apiURL}/api/category/add-user`,
//       formData,
//       Headers()
//     );
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const editUser = async (cId, des, status) => {
  let data = { cId: cId, cDescription: des, cStatus: status };
  try {
    let res = await axios.post(
      `${apiURL}/api/user/edit-user`,
      data,
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (uId) => {
  try {
    let res = await axios.post(
      `${apiURL}/api/user/delete-user`,
      { uId },
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
