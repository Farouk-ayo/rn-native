import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-2 text-center">
      <Text className=" text-5xl text-black">Welcome to my app.</Text>

      <Text className="text-secondary font-semibold">
        This is a simple example of a React Native app.
      </Text>
      <Text className="text-secondary font-semibold">
        It uses Tailwind CSS for styling.
      </Text>
    </View>
  );
}
