import React from "react";
import { View } from "react-native";

// Styles
import { rootCommonStyles as styles } from "./../../styles/screenStyles";

// Components
import Header from "../../components/Header";
import RecruiterDetail from "../../components/RecruiterDetail";
import StudentDetail from "../../components/StudentDetail";

export default function Detail({ route, navigation }) {
  const { userDetail, userType, userRole, uid } = route.params;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        {userType === "Recruiter" ? (
          <RecruiterDetail
            userDetail={userDetail}
            userRole={userRole}
            navigation={navigation}
            uid={uid}
          />
        ) : (
          <StudentDetail
            userDetail={userDetail}
            userRole={userRole}
            navigation={navigation}
            uid={uid}
          />
        )}
      </View>
    </View>
  );
}
