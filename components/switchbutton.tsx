import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type Props = {
  value: boolean;
  onToggle: () => void;
};

const SwitchButton = ({ value, onToggle }: Props) => {
  return (
    <TouchableOpacity onPress={onToggle} activeOpacity={0.8}>
      <View style={styles.track}>
        <View
          style={[
            styles.thumb,
            { alignSelf: value ? 'flex-start' : 'flex-end' },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  track: {
    width: 60,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#9194EF',
    padding: 3,
    justifyContent: 'center',
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#9194EF',
  },
});