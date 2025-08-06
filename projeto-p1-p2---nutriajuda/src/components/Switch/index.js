import React from 'react';
import { View, Text, Switch } from 'react-native';

const SwitchPersonalizado = ({ label, value, onValueChange }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
      <Text style={{ marginRight: 10 }}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

export default SwitchPersonalizado;