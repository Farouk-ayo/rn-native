import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Profile = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text> Movie Profile: {id}</Text>
    </View>
  );
};

export default Profile;
