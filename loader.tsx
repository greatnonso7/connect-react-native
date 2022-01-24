import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

interface LoaderProps {
  close: () => void;
}

const Loader = ({ close }: LoaderProps) => {
  return (
    <View
      style={styles.container}>
      <TouchableOpacity onPress={close} style={styles.closeButtonContainer}>
        <Text style={{ color: 'black' }}>Close</Text>
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
  },
  closeButtonContainer: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  }
})

export default Loader;