import React, { Fragment } from "react";

// Components
import RecruiterRegister from "../../components/RecruiterRegister";
import StudentRegister from "../../components/StudentRegister";

export default function Register({ route, navigation }) {
  const { userType } = route.params;

  return (
    <Fragment>
      {userType === "Student" ? <StudentRegister /> : <RecruiterRegister />}
    </Fragment>
  );
}
