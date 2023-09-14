// CustomHeader.js
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

const CustomHeader = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => {
          // Implement navigation back action here
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
