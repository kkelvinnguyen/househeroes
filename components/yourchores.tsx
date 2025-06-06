import React from 'react';
import { Text, View } from 'react-native';

const YourChores = () => {
  return (
    <View style={{backgroundColor: '#9194EF', borderRadius: 10, padding: 25, height: '100%'}}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'white', alignSelf: 'center', justifyContent: 'flex-start' }}>Your Chores</Text>
    </View>
  );
};

export default YourChores;