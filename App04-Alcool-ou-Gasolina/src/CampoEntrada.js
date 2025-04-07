import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

export default function CampoEntrada({ placeholder, valor, aoAlterar, emFoco, aoFocar, aoSair }) {
  return (
    <TextInput
      style={[styles.input, emFoco && styles.inputFocused]}
      placeholder={placeholder}
      keyboardType="numeric"
      value={valor}
      onChangeText={aoAlterar}
      onFocus={aoFocar}
      onBlur={aoSair}
    />
  );
}
