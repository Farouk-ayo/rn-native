import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className=" flex-auto text-primary font-semibold">
        Welcome to my app.
      </Text>
      <View>
        <Text className="text-secondary font-semibold">
          This is a simple example of a React Native app.
        </Text>
        <Text className="text-secondary font-semibold">
          It uses Tailwind CSS for styling.
        </Text>
      </View>
    </View>
  );
}
