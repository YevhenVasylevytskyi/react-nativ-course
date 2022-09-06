import React from "react";
import { View, Text } from "react-native";

export default LoginScreen = () => (
  <View>
    <Text className={styles.title}>LoginScreen</Text>
  </View>
);

const styles = StyleSheet.create({
    title: {
      color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});