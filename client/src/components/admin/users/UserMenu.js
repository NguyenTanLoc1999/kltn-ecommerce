import React, { Fragment } from "react";
//import { UserContext } from "./index";
// import AddCategoryModal from "./AddCategoryModal";
import EditUserModal from "./EditUserModal";

const UserMenu = (props) => {
  //const { dispatch } = useContext(UserContext);

  return (
    <Fragment>
      <div className="col-span-1 flex items-center">
        {/* <AddCategoryModal /> */}
        <EditUserModal />
      </div>
    </Fragment>
  );
};

export default UserMenu;
