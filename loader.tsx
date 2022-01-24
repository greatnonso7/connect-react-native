import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

interface LoaderProps {
  close: () => void;
}

const Loader = ({ close }: LoaderProps) => {
  return (
    <View
      style={styles.container}>
      <TouchableOpacity onPress={close}>
        <Text>Close</Text>
      </TouchableOpacity>
      <ActivityIndicator size="small" color="#182CD1" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%"
  }
})

export default Loader;