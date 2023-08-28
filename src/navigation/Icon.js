import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({ name, size, color }) => {
    console.log('ICON', name)
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export default Icon;
